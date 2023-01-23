import '../HomeworkPage/homework.css'
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { useParams } from 'react-router-dom';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import remarkSlug from 'remark-slug'
import rehypeRaw from 'rehype-raw'
import remarkToc from 'remark-toc'
import Footer from '../Footer/Footer';

function ProjectSpecPage() {
    const [homework, setHomework] = useState("");
    let path = require("../../spec/spec-final-project.md")

    useEffect(() => {
        fetch(path)
        .then((res) => res.text())
        .then((text) => setHomework(text));
        document.querySelector('body').scrollTo(0, 0);
    });
    
    return (
      <div>
    <div className="text-wrapper">
        <ReactMarkdown children={homework} remarkPlugins={[gfm, remarkSlug, remarkToc]} rehypePlugins={[rehypeRaw]}
        components={{em: ({node, ...props}) => <ul className="ul-special" {...props} />,
        table: ({node, ...props}) => <div className="table-wrapper"><table className="styled-table" {...props} /></div>,
        a: ({node, ...props}) => <a className="a-special" {...props}>{props.children}</a>,
        code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }} />
    </div>
        <Footer/>
        </div>
    );
}

export default ProjectSpecPage;

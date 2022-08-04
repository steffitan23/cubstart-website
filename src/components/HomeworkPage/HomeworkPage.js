import './homework.css'
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "https://cdn.skypack.dev/remark-gfm@1.0.0";
import { useParams } from 'react-router-dom';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkSlug from 'remark-slug'
import remarkToc from 'remark-toc'

function HomeworkPage() {
    let { id } = useParams()

    const [homework, setHomework] = useState("");
    let path = require("../../hw/" + id + ".md")
    useEffect(() => {
        fetch(path)
        .then((res) => res.text())
        .then((text) => setHomework(text));
    }, []);
    
    return (
    <div className="text-wrapper">
        <ReactMarkdown children={homework} remarkPlugins={[gfm, remarkToc, remarkSlug]}
        components={{em: ({node, ...props}) => <ul className="ul-special" {...props} />, 
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
          } }} />
    </div>
    );
}

export default HomeworkPage;

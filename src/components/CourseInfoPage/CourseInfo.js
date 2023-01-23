import { useState, useEffect } from 'react'
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import "./courseinfo.css"
import "../SchedulePage/SchedulePage.css"
import "../HomeworkPage/homework.css"
import Footer from '../Footer/Footer';

function CourseInfoPage() {
  const [content, setContent] = useState("");

    useEffect(() => {
        fetch("content/course-info.md")
        .then((res) => res.text())
        .then((text) => setContent(text));
        document.querySelector('body').scrollTo(0, 0);
    }, []);
  return (
    <div>
    <div className="text-wrapper">
      <div className="header">
        <h1>Course Information</h1>
      </div>
      <ReactMarkdown children={content} remarkPlugins={[gfm]} components={{table: ({node, ...props}) => <table className="styled-table" {...props} />,
      a: ({node, ...props}) => <a className="a-special" {...props}>{props.children}</a> }}/>
    </div>
    <Footer />
    </div>
  );
}

export default CourseInfoPage;
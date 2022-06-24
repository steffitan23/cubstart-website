import { useState, useEffect } from 'react'
import ReactMarkdown from "react-markdown";
import gfm from "https://cdn.skypack.dev/remark-gfm@1.0.0";
import "./courseinfo.css"

function CourseInfoPage() {
  const [content, setContent] = useState("");

    useEffect(() => {
        fetch("content/course-info.md")
        .then((res) => res.text())
        .then((text) => setContent(text));
    }, []);
  return (
    <div className="text-wrapper">
      <h1 className="heading">Course Information</h1>
      <ReactMarkdown children={content} remarkPlugins={[gfm]}/>
    </div>
  );
}

export default CourseInfoPage;
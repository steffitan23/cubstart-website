import './SchedulePage.css';
import { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import gfm from "https://cdn.skypack.dev/remark-gfm@1.0.0";

function SchedulePage(props) {
    const [ios, setiOS] = useState("");
    const [web, setWeb] = useState("");

    useEffect(() => {
        fetch("content/ios/schedule-page.md")
        .then((res) => res.text())
        .then((text) => setiOS(text));

        fetch("content/web/schedule-page.md")
        .then((res) => res.text())
        .then((text) => setWeb(text));
    }, []);

    return (
    <div className="text-wrapper">
        <div className="header">
            <h1>CS 198-75: Introduction to Building Apps</h1>
            <h2>UC Berkeley, Fall 2022</h2>
        </div>
        <div class="wrapper">
        <div class="tabs">
            <div class="tab">
            <input type="radio" name="css-tabs" id="tab-2" class="tab-switch" defaultChecked="checked"/>
            <label for="tab-2" class="tab-label">Web</label>
            <div class="tab-content"><ReactMarkdown children={web} remarkPlugins={[gfm]}
            components={{table: ({node, ...props}) => <table className="styled-table" {...props} /> }}/></div>
            </div>
            <div class="tab">
            <input type="radio" name="css-tabs" id="tab-3" class="tab-switch"/>
            <label for="tab-3" class="tab-label">iOS</label>
            <div class="tab-content"><ReactMarkdown children={ios} remarkPlugins={[gfm]}
            components={{table: ({node, ...props}) => <table className="styled-table" {...props} /> }}/></div>
            </div>
        </div>
        </div> 
    </div>
    );
}

export default SchedulePage;

import { useState, useEffect } from 'react'
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import "../SchedulePage/SchedulePage.css"
import "../HomeworkPage/homework.css"
import "./enrollment.css"
import Footer from '../Footer/Footer';

function EnrollmentInfoPage() {
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
      <a href="/" style={{"color":"#3e9ec3", "borderBottom":"1px solid #3e9ec3", "cursor":"pointer", "fontSize":"0.9em"}}>Back to Home Page</a>
        <h1 style={{"color":"#3e9ec3", "fontWeight":"bold", "fontSize":"2.5em"}}>How do I Enroll?</h1>
      </div>

      <p style={{"textAlign":"center", "color":"#3e9ec3", "fontWeight":"500", "letterSpacing":"-0.01em" }}>Enroll in Cubstart through these 3 easy steps!</p>

      <br/>

      <div style={{ "display":"flex", "flexDirection":"row", "alignItems":"center"}}><h3 className="enrollment_header" style={{"color":"#3e9ec3", "marginRight":"10px",}}>Step 1: </h3><p style={{"marginTop":"19px"}}>Go to "Enrollment Center" in <a style={{"cursor":"pointer", "borderBottom":"1px solid #3e9ec3", "fontWeight":"600",}} target="_blank" href="https://calcentral.berkeley.edu/academics">CalCentral</a></p></div>
      
      <div style={{ "display":"flex", "flexDirection":"row", "alignItems":"center"}}><h3 className="enrollment_header" style={{"color":"#3e9ec3", "marginRight":"10px",}}>Step 2: </h3><p style={{"marginTop":"19px"}}>Search for either <span style={{"color":"#3e9ec3", "fontWeight":"600", "letterSpacing":"0em"}}>29886</span> for our <span style={{"color":"#3e9ec3", "fontWeight":"600", "letterSpacing":"0em"}}>Web Track</span> (CS 198-750) or <span style={{"color":"#3e9ec3", "fontWeight":"600", "letterSpacing":"0em"}}>29885</span> for our <span style={{"color":"#3e9ec3", "fontWeight":"600", "letterSpacing":"0em"}}>iOS Track</span> (CS 198-075)</p></div>
      
      <div style={{ "display":"flex", "flexDirection":"row", "alignItems":"center"}}><h3 className="enrollment_header" style={{"color":"#3e9ec3", "marginRight":"10px",}}>Step 3: </h3><p style={{"marginTop":"19px"}}>Go through all the steps to enroll, leaving the permission number blank! Then you're <span style={{"color":"#3e9ec3", "fontWeight":"700", "letterSpacing":"-0.03em"}}>DONE!</span></p></div>
    
      <p>Got stuck? Ask us anything at <a href="mailto:team@cubstart.com" style={{"color":"#3e9ec3", "fontWeight":"600", "letterSpacing":"0em"}}>team@cubstart.com</a></p>
      
    </div>
    </div>
  );
}

export default EnrollmentInfoPage;
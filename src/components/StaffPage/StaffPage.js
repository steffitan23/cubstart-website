import './staff.css'
import '../SchedulePage/SchedulePage.css'
import { useState, useEffect } from "react";
import StaffCard from "./StaffCard";
import Footer from '../Footer/Footer';

function StaffPage() {
    const [staffInfo, setStaffInfo] = useState({
        "lecturers": [
          {
            "image": "",
            "name": "",
            "title": "",
            "description": "",
            "social": ""
          }
        ],
        "tas": [
          {
            "image": "",
            "name": "",
            "title": "",
            "description": "",
            "social": ""
          }
        ],
        "archives": [
          {
            "image": "",
            "name": "",
            "title": "",
            "description": "",
            "social": ""
          }
        ]
      }
      );

    useEffect(() => {
        fetch("content/staff.json")
        .then((res) => res.json())
        .then((jsonData) => setStaffInfo(jsonData))
    }, []);
    
    return (
    <div className="staff-wrapper">
        <p style={{"paddingBottom":"10px", "fontSize":"1.17em", "marginBottom":"20px"}}>Interested in joining our team? <a style={{"paddingBottom": "1px", "borderBottom":"1px solid #23A6D5"}} href="https://docs.google.com/forms/d/e/1FAIpQLSfKcm7m6R5XDwqFMHPZCIT52Pry65of0kPO2dYkiWK6PHTtzA/viewform?usp=sf_link">Apply here!</a></p>
        <div className="header">
        <h1>Lecturers</h1>
        </div>
        <div className="cards-wrapper">
        {staffInfo.lecturers.map((staff) => <StaffCard content={staff}/>)}
        </div>
        <br/>

        <div className="header">
        <h1>Teaching Assistants</h1>
        </div>
        <div className="cards-wrapper">
        {staffInfo.tas.map((staff) => <StaffCard content={staff}/>)}
        </div>
        <br/>
      
        <div className="header">
        <h1>Past Leads</h1>
        </div>
        <div className="cards-wrapper">
        {staffInfo.archives.map((staff) => <StaffCard content={staff}/>)}
        </div>

        <Footer />
    </div>
    );
}

export default StaffPage;

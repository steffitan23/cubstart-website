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

import './staff.css'
import { useState, useEffect } from "react";
import StaffCard from "./StaffCard";
function StaffPage() {
    const [staffInfo, setStaffInfo] = useState({
        "lecturers": [
          {
            "name": "",
            "title": "",
            "description": "",
            "social": ""
          }
        ],
        "tas": [
          {
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
        <h1>Lecturers</h1>
        <div className="cards-wrapper">
        {staffInfo.lecturers.map((staff) => <StaffCard content={staff}/>)}
        </div>
        <h1>TAs</h1>
        <div className="cards-wrapper">
        {staffInfo.tas.map((staff) => <StaffCard content={staff}/>)}
        </div>
    </div>
    );
}

export default StaffPage;

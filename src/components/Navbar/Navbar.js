import "./Navbar.css";
import { useState } from "react";
import SchedulePage from "../SchedulePage/SchedulePage";
import CourseInfoPage  from "../CourseInfoPage/CourseInfo";
import EnrollmentInfoPage  from "../EnrollmentInfoPage/EnrollmentInfo";
import StaffPage from "../StaffPage/StaffPage";
import HomePage from "../HomePage/HomePage";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import HomeworkPage from "../HomeworkPage/HomeworkPage";
import LabPage from "../LabPage/LabPage";
import Sponsorship from "../Sponsorship";
import ProjectSpecPage from "../ProjectSpecPage/ProjectSpecPage";
import SolutionsPage from "../SolutionsPage/SolutionsPage";

function Navbar() {
  const [openMobileTab, setOpenMobileTab] = useState(false);

  return (
    <div className="Navbar">
      <div className="nav-wrapper">
        <div className="grad-bar"></div>
        <Router>
          <nav className="navbar">
            
           <div className="logo-wrapper">
            <a href="/"><img
                id="logo"
                src="assets/cubstart_logo.png"
                alt="Cubstart Logo"
              /></a>
              <a href="/">
              <h3>The <p className="nav-cubstart-text">Cubstart Decal</p><a href="https://hackberkeley.org"><h3 className="subheader"> by Hackathons @ Berkeley</h3></a></h3></a> 
              
              
  </div>
            <div
              className={
                openMobileTab ? "menu-toggle is-active" : "menu-toggle"
              }
              id="mobile-menu"
              onClick={() => setOpenMobileTab(!openMobileTab)}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>


            
            <ul className={openMobileTab ? "nav mobile-nav" : "nav"}>
            <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/schedule">Schedule</Link>
              </li>
              <li className="nav-item">
                <Link to="/staff">Staff</Link>
              </li>
              <li className="nav-item">
                <Link to="/info">Course Info</Link>
              </li>
             <li className="nav-item" style={{"marginTop":"-1px"}}>
              <a href="/#/enrollment-info"><button style={{"marginTop":"-20px", "borderRadius":"30px", "opacity":"1"}} className="nav-join-team-bttn">
                  FA24 Enrollment Info
            </button></a>
              </li>
              {/* <li className="nav-item">
                <Link to="/spec">Final Project</Link>
              </li> */}
            </ul>
          </nav>
          <Routes>
            <Route path = '/' element={ <HomePage/> } />
            <Route path = '/schedule' element={ <SchedulePage/> } />
            <Route path = '/staff' element={ <StaffPage/> } />
            <Route path = '/info' element={ <CourseInfoPage/> } />
            <Route path = '/enrollment-info' element={ <EnrollmentInfoPage/> } />
            <Route path = '/hw/:type/:id' element={ <HomeworkPage/> } />
            <Route path = '/lab/:type/:id' element={ <LabPage/> } />
            <Route path='/sponsorship' element={ <Sponsorship />}/>
            <Route path='/solutions' element={ <SolutionsPage />}/>
          </Routes>
        </Router>        
      </div>
    </div>
  );
}

export default Navbar;
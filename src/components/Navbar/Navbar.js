import "./Navbar.css";
import { useState } from "react";
import SchedulePage from "../SchedulePage/SchedulePage";
import CourseInfoPage  from "../CourseInfoPage/CourseInfo";
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
              <h3>Cubstart</h3></a>
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
              <li className="nav-item">
                <Link to="/spec">Final Project</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path = '/' element={ <HomePage/> } />
            <Route path = '/schedule' element={ <SchedulePage/> } />
            <Route path = '/staff' element={ <StaffPage/> } />
            <Route path = '/info' element={ <CourseInfoPage/> } />
            <Route path = '/hw/:type/:id' element={ <HomeworkPage/> } />
            <Route path = '/lab/:type/:id' element={ <LabPage/> } />
            <Route path = '/spec' element={ <ProjectSpecPage/> } />
            <Route path='/sponsorship' element={ <Sponsorship />}/>
          </Routes>
        </Router>        
      </div>
    </div>
  );
}

export default Navbar;

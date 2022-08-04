import "./Navbar.css";
import { useState } from "react";
import SchedulePage from "../SchedulePage/SchedulePage";
import CourseInfoPage  from "../CourseInfoPage/CourseInfo";
import StaffPage from "../StaffPage/StaffPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomeworkPage from "../HomeworkPage/HomeworkPage";

function Navbar() {
  const [openMobileTab, setOpenMobileTab] = useState(false);

  return (
    <div className="Navbar">
      <div className="nav-wrapper">
        <div className="grad-bar"></div>
        <Router>
          <nav className="navbar">
            <div className="logo-wrapper">
              <img
                id="logo"
                src="https://calhacks-sierra.s3-us-west-2.amazonaws.com/assets/branding/cubstart.png"
                alt="Cubstart Logo"
              />
              <h1>Cubstart</h1>
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
                <Link to="/">Schedule</Link>
              </li>
              <li className="nav-item">
                <Link to="/staff">Staff</Link>
              </li>
              <li className="nav-item">
                <Link to="/info">Course Info</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path = '/' element={ <SchedulePage/> } />
            <Route path = '/staff' element={ <StaffPage/> } />
            <Route path = '/info' element={ <CourseInfoPage/> } />
            <Route path = '/hw/:id' element={ <HomeworkPage/> } />
          </Routes>
        </Router>        
      </div>
    </div>
  );
}

export default Navbar;

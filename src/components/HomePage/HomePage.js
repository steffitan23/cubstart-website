import { useState, useEffect } from 'react';
import './HomePage.css';
import DescSection from './DescSection/DescSection';
import { TypeAnimation } from 'react-type-animation';
import FAQPage from './FAQ/FAQ';
import SponsorSection from './SponsorSection/SponsorSection';
import Footer from '../Footer/Footer';
import InfoSection from './InfoSection/InfoSection';

function HomePage(props) {

    return (
    <div>
        <div className="banner">
            <p>Enroll in Cubstart Sp24 NOW! Go to your CalCentral Enrollment Center and search 16666 for the Web Track OR 16649 for the iOS Track</p>
        </div>
    <div className="hero-wrapper">
        <div className="header">
            <div className='header-text'>
                <div className='hero-flex-wrapper'>
                    <div className='flex-item'>
                    <img src="assets/coding_ddoski.svg" className="ddoski-hero">{props.children}</img>
                    </div>
                    <div className='flex-item desc'>
                    <h1>Cubstart is <TypeAnimation
                        sequence={[
                            'lots of fun', // Types 'One'
                            2000, // Waits 1s
                            'the best decal', // Deletes 'One' and types 'Two'
                            2000, // Waits 2s
                            'pretty cool', // Types 'Three' without deleting 'Two'
                            2000,
                            () => {
                            }
                        ]}
                        speed={26}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        className="typing-text"
                        /></h1>
                    <p>Cubstart is a web/mobile development course for beginner to intermediate developers. Whether you need project experiences to kickstart your resume, or if you have a desire to build but don’t know where to start, Cubstart is the course for you.</p>
                    <p><em>While preprequisites are not enforced, prior coding experience is highly recommmended.</em></p>
                    <p>Cubstart is <u>open enrollment</u> for Spring 2024! Go to your CalCentral Enrollment Center and search <b>16666</b> for the Web Track (CS 198-750) OR <b>16649</b> for the iOS Track (CS 198-075).</p>
                    {/*
                    <div className='button-container'>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSco-puPnC9Se1k35ZDxzbOLbCqXUt2It2X23kLkFGkQ3F2snw/viewform" className="applybutton">APPLY NOW!</a>
                    </div>
                    
                    <b>Fall 2023 application have closed. See you next semester! </b>*/}
                    <br/>
                    <div className="stats-wrapper">
                        <div className="stats-item">
                            <img src="assets/stats-semester.svg"/>
                        </div>
                        <div className="stats-item">
                            <img src="assets/stats-female-nonbinary.svg"/>
                        </div>
                        <div className="stats-item">
                            <img src="assets/stats-partner-urm.svg"/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <InfoSection/>
            <SponsorSection/>
            <DescSection/>
            <FAQPage/>
        </div>
    </div>
    <Footer />
    </div>
    );
}

export default HomePage;

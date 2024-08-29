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
            <p>Enroll in Cubstart Fall 24 NOW! Go to your CalCentral Enrollment Center and search 29886 for the Web Track OR 29885 for the iOS Track.</p>
        </div>
    <div className="hero-wrapper">
        <div className="header">
            <div className='header-text'>
                <div className='hero-flex-wrapper'>
                    <div className='flex-item'>
                    <img src="assets/ddoski11.png" className="ddoski-hero">{props.children}</img>
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
                    <p><em>While preprequisites are not enforced, prior coding experience is recommmended.</em></p>
                    <p>Cubstart Fall 24 enrollment in open! Go to your CalCentral Enrollment Center and search <b>29886</b> for the Web Track (CS 198-750) OR <b>29885</b> for the iOS Track (CS 198-075).</p>
                    
                    <p >Got questions? Reach us at <a href="mailto:team@cubstart.com" style={{"color":"#3e9ec3", "fontWeight":"700"}}>team@cubstart.com</a></p>
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
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
                    <div className='button-container'>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1GzSg45wwQhyDKDZBpd9Oh6V7BH8QqIWIaFRe9ZgzxUaMnA/viewform" className="applybutton">Apply now!</a>
                    </div>
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

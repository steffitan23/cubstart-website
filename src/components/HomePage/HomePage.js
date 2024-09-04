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
        <div className="banner" style={{"paddingTop":"0px"}}>
            <p style={{}}>Enroll in Cubstart Fall 24 NOW!&nbsp;<a href="/#/enrollment-info" style={{"color":"#fff", "fontWeight":"900", "borderBottom":"1px solid #fff"}}>How do I Enroll?</a></p>
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
                    <p>Cubstart is a web/mobile development course for beginner to intermediate developers. Whether you need project experience, or don't know where to start, Cubstart is the course for you!</p>
                    <div style={{"height":"7px"}}></div>
                    <a href="/#/enrollment-info" style={{"color":"#3e9ec3", "borderBottom":"1px solid #3e9ec3", "fontWeight":"700", "letterSpacing":"0em", "fontSize":"1.15em"}}>How Do I Enroll?</a>
                    <div style={{"height":"4px"}}></div>
                    <p style={{"color":"#888", "fontSize":"0.97em"}}><em>While prerequisites are not enforced, prior coding experience is recommmended.</em></p>

                    {/*<p >Got questions? Reach us at <a href="mailto:team@cubstart.com" style={{"color":"#3e9ec3", "fontWeight":"700"}}>team@cubstart.com</a></p>*/}
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
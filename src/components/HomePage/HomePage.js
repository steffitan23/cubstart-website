import { useState, useEffect } from 'react';
import './HomePage.css';
import DescSection from './DescSection/DescSection';
import { TypeAnimation } from 'react-type-animation';
import FAQPage from './FAQ/FAQ';
import Footer from '../Footer/Footer';

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
                    <p>Cubstart is a web/mobile development course for beginner developers. Whether you need project experiences to kickstart your resume, or if you have a desire to build but don’t know where to start, Cubstart is the course for you.</p>
                    <div className='button-container'>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFPctypeWtFvdSxMjg34j-_Esq0z2lNP0Yew0b9V6-bnPoEg/viewform?usp=sf_link" className="applybutton">Apply now!</a>
                    </div>
                    </div>
                </div>
            </div>
            <DescSection/>
            <FAQPage/>
        </div>
    </div>
    <Footer />
    </div>
    );
}

export default HomePage;

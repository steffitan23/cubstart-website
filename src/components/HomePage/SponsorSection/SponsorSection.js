import '../HomePage.css';
  
function SponsorSection(props) {

    return (
        <div className="spons-section">
            <div className="desc-text">
            <h2>Our Sponsors</h2>
            <p>Thank you to our sponsors for helping us run Cubstart!</p>
            <p><i><a href="/#/sponsorship">Interested in sponsoring us?</a> Contact <a href="mailto:team@cubstart.com">team@cubstart.com</a>.</i></p>
            <img src="assets/digital_ocean_logo.png" className="support-logo digital-ocean">{props.children}</img>
            <img src="assets/optiver_logo.png" className="support-logo optiver">{props.children}</img>
            <img src="assets/ibm_logo.png" className="support-logo ibm">{props.children}</img>
            
            </div>
        </div>
    );
}

export default SponsorSection;
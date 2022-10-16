import '../HomePage.css';
  
function SponsorSection(props) {

    return (
        <div className="spons-section">
            <div className="desc-text">
            <h2>Our Sponsors</h2>
            <p>Thank you to our sponsors for helping us run Cubstart!</p>
            <p><i>Interested in sponsoring us? Contact <a href="mailto:cubstart@calhacks.io">cubstart@calhacks.io</a>.</i></p>
            <a href="https://www.digitalocean.com/"><img src="assets/digital_ocean_logo.png" className="sponsor-logo digital-ocean">{props.children}</img></a>
            </div>
        </div>
    );
}

export default SponsorSection;

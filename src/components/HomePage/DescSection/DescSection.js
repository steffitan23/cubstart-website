import '../HomePage.css';
  
function DescSection(props) {

    return (
        <div className="desc-section">
            <div className="desc-text">
            <h2>Our Partners</h2>
            <p>We are determined to support underrepresented minorities in STEM. This semester, we're grateful for our partner organisations who help us get closer to our mission of bridging the gaps in STEM.</p>
            <div className="sponsor-wrapper">
                <a href="https://hes.berkeley.edu/"><img src="assets/hes_logo.png" className="partner-logo hes">{props.children}</img></a>
                <a href="http://www.ucberkeleybessa.com/"><img src="assets/bessa_logo.png" className="partner-logo bessa">{props.children}</img></a>
                <a href="https://swe.berkeley.edu/"><img src="assets/swe_logo.png" className="partner-logo swe">{props.children}</img></a>
            </div>
            </div>
        </div>
    );
}

export default DescSection;
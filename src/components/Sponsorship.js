import { useEffect } from "react";
function Sponsorship() {
    useEffect(() => {
        document.querySelector('body').scrollTo(0, 0);
      });
    return (
        <div className="sponsor-packet">
            <iframe src="https://drive.google.com/file/d/1xp5_XQQzraUHhPUXspwv4PbBtrinWWvO/preview" allow="autoplay"></iframe>
        </div>
    );
}

export default Sponsorship;

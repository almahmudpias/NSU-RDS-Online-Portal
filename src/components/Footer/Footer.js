import react from "react";
import './footer.css'; // Import the CSS file for styling
function Footer() {
  return (
   <footer className="footer">
        <div className="footer-line"></div>
        <p className="footer-text">
          Developed and Maintained by <span className="glow">NSU IT</span>
        </p>
      </footer>
  );
}
export default Footer;
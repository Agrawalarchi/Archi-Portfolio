import { Link } from "react-scroll";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="profileInfo">
        <div className="info">
          <img src="/Archi2.jpg" alt="Profile" />
        </div>
        <h2 id="name">Archi Agrawal</h2>
      </div>
      <div className="buttons">
        <Link to="home" smooth={true} duration={500} className="button">Home</Link>
        <Link to="about" smooth={true} duration={500} className="button">About</Link>
        <Link to="projects" smooth={true} duration={500} className="button">Projects</Link>
        <Link to="contact" smooth={true} duration={500} className="button">Contact</Link>
      </div>
    </nav>
  );
}

import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={"navbar" + (isScrolled ? " sticky" : "") }>
      <div className="profileInfo">
        <div className="info">
          <img src="/Archi2.jpg" alt="Profile" />
        </div>
        <h2 id="name">Archi Agrawal</h2>
      </div>

      <button
        className={"hamburger" + (isMenuOpen ? " active" : "")}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={"buttons" + (isMenuOpen ? " open" : "")}>
        <Link to="home" smooth={true} duration={500} className="button" onClick={closeMenu}>Home</Link>
        <Link to="about" smooth={true} duration={500} className="button" onClick={closeMenu}>About</Link>
        <Link to="projects" smooth={true} duration={500} className="button" onClick={closeMenu}>Projects</Link>
        <Link to="contact" smooth={true} duration={500} className="button" onClick={closeMenu}>Contact</Link>
      </div>
    </nav>
  );
}

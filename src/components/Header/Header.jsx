import { useEffect, useState } from "react";
import banner from './baatdekha.png'
import './header.css'

function Header({ isMenuOpen, setIsMenuOpen, buttonRef }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <div className={`header-container ${scrolled ? 'scrolled' : ''}`}>
      <header>
        <button
          ref={buttonRef}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          className={`menu-button ${isMenuOpen ? 'menu-open' : ''}`}
          onClick={handleToggle}
        />
        <span>Your Smart Ways</span>
      </header>
      <div className="image-cover">
        <img src={banner} alt="baatdekha.com" />
      </div>
    </div>
  );
}

export default Header;

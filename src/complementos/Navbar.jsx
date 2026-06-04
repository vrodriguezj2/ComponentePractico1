import { Link, useLocation } from "react-router-dom";
import './Navbar.css';
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header>
      <nav className="main-nav">
        <Link to="/" className="nav-brand">
          <span className="dot" />
          My First landing page
        </Link>

        <div className="nav-links">
          <Link to="/" className={pathname === "/" ? "active" : ""}>Inicio</Link>
          <Link to="/About" className={pathname === "/About" ? "active" : ""}>Información</Link>
        </div>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" className={pathname === "/" ? "active" : ""} onClick={() => setMenuOpen(false)}>Inicio</Link>
          <Link to="/About" className={pathname === "/About" ? "active" : ""} onClick={() => setMenuOpen(false)}>Información</Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
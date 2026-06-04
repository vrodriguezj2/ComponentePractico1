import { Link } from "react-router-dom";
import "./Hero.css";
import fotoVictor from "../assets/imagen-victor.jpeg";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="hero-badge">Landing Page · React + Vite</span>

        <h1 className="hero-title">
          Explorando el desarrollo web con React
        </h1>

        <p className="hero-text">
          Esta landing page fue creada para demostrar el uso de componentes,
          rutas, eventos y estilos personalizados. El proyecto muestra cómo
          React permite construir interfaces modernas, organizadas y dinámicas.
        </p>

        <div className="hero-actions">
          <Link to="/About" className="hero-btn primary">
            Conocer más
          </Link>

          <a href="#cards" className="hero-btn secondary">
            Explorar secciones
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <img
          src={fotoVictor}
          alt="Foto de Víctor Rodríguez"
          className="hero-photo"
        />

        <p>React · JavaScript · CSS</p>
      </div>
    </section>
  );
}

export default Hero;
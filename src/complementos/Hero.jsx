import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="hero-badge">Proyecto React · UNEMI</span>

        <h1 className="hero-title">
          Mi primera landing page con React
        </h1>

        <p className="hero-text">
          Soy Víctor Rodríguez, estudiante de Ingeniería en Software. 
          Esta página fue desarrollada usando componentes, rutas, eventos 
          y estilos personalizados con React.
        </p>

        <div className="hero-actions">
          <Link to="/About" className="hero-btn primary">
            Ver información
          </Link>

          <a href="#cards" className="hero-btn secondary">
            Ver tarjetas
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-avatar">VR</div>
        <p>React · JavaScript · CSS</p>
      </div>
    </section>
  );
}

export default Hero;
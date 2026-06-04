import './About.css';
function About() {
  return (
    
    <div className="about-page">
      <div className="about-avatar">VR</div>

      <h1 className="about-nombre">Víctor Rodríguez</h1>
      <p className="about-rol">Ingeniería en Sistemas · UNEMI</p>

      <div className="about-divider" />

      <p className="about-desc">
        Tengo 19 años, soy de Milagro, Ecuador. Estudio en la Universidad
        Estatal de Milagro (UNEMI) y me apasiona el desarrollo web.
        Actualmente desarrollo una aplicación con React como parte de
        mi Componente Práctico.
      </p>

      <div className="about-tags">
        <span className="about-tag">UNEMI</span>
        <span className="about-tag">Ingeniería en Sistemas</span>
        <span className="about-tag">React</span>
        <span className="about-tag">JavaScript</span>
      </div>
    </div>
  );
}

export default About;
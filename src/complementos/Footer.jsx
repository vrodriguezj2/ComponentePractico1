import './Footer.css';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <p className="brand-sub">Proyecto académico · 2026</p>
            <div className="footer-badge">
              <span className="badge-dot" />
              UNEMI
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; 2026 · Desarrollado por <strong>Víctor Rodríguez</strong>
          </p>
          <div className="footer-unemi">
            Universidad Estatal de Milagro · UNEMI
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
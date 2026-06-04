import './Card.css';

function Card({ icono, titulo, descripcion, tags = [] }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-avatar">{icono}</div>
        <p className="card-title">{titulo}</p>
      </div>

      <div className="card-divider" />

      <p className="card-desc">{descripcion}</p>

      {tags.length > 0 && (
        <div className="card-footer">
          {tags.map((tag, i) => (
            <span className="card-tag" key={i}>{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default Card;
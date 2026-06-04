import Card from '../complementos/Card';

function Home() {
  return (
    
    <div className="cards-grid">
        
      <Card
        icono="👤"
        titulo="Sobre mí"
        descripcion="Me llamo Víctor Rodríguez, tengo 19 años y soy de Milagro, Ecuador."
        tags={['Milagro', 'Ecuador']}
      />

      <Card
        icono="🎓"
        titulo="Estudios"
        descripcion="Estudio Ingeniería en Software en la Universidad Estatal de Milagro (UNEMI)."
        tags={['UNEMI', 'Ingeniería en Software']}
      />

      <Card
        icono="💻"
        titulo="Proyecto"
        descripcion="Desarrollando una aplicación web con React como parte de mi Componente Práctico."
        tags={['React', 'JavaScript']}
      />
    </div>
  );
}

export default Home;
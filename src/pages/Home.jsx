import Card from '../complementos/Card';
import Hero from '../complementos/Hero';

function Home() {
  return (
    <>
      <Hero />

      <div className="cards-grid" id="cards">
        <Card
          icono="👤"
          titulo="Sobre mí"
          descripcion="Me llamo Víctor Rodríguez Jara, tengo 19 años y soy de Milagro, Ecuador."
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
    </>
  );
}

export default Home;
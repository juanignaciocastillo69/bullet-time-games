import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../firebase/db";

function ConsoleSection() {
  const [consoles, setConsoles] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        console.log("Consoles desde Firebase:", data);
        setConsoles(data);
      })
      .catch((error) => {
        console.error("Error getting consoles:", error);
      });
  }, []);

  return (
    <section className="console-section" id="consoles">
      <div className="console-grid">
        {consoles.map((consoleItem) => {
          const nombre = consoleItem.nombre;
          const descripcion =
            consoleItem.descripcion ||
            consoleItem.Descripcion ||
            consoleItem.description ||
            "No description available.";
          const precio = consoleItem.precio;
          const categoria = consoleItem.categoria;
          const imagen = consoleItem.url;

          return (
            <article className="console-card" key={consoleItem.id}>
              <img src={imagen} alt={nombre} className="console-image" />

              <div className="console-info">
                <h3>{nombre}</h3>

                <p className="console-description">{descripcion}</p>

                <p className="console-category">{categoria}</p>

                <p className="console-price">${precio}</p>

                <Link
                  to={`/detail/console/${consoleItem.id}`}
                  className="console-button"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  View console
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ConsoleSection;
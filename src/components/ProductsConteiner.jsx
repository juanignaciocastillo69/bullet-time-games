import { useEffect, useState } from "react";
import { getProducts } from "../firebase/db";

function ProductsConteiner() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        console.log("Productos desde Firebase:", data);
        setProductos(data);
      })
      .catch((error) => {
        console.error("Error getting products:", error);
      });
  }, []);

  return (
    <section className="products-section">
      <h2>Productos</h2>

      <div className="products-grid">
        {productos.map((producto) => {
          const nombre = producto.nombre;
          const descripcion = producto.descripcion || producto.Descripcion;
          const precio = producto.precio;
          const categoria = producto.categoria;
          const imagen = producto.url;

          return (
            <div className="product-card" key={producto.id}>
              <img src={imagen} alt={nombre} className="product-image" />

              <div className="product-info">
                <h3>{nombre}</h3>

                <p className="product-description">{descripcion}</p>

                <p className="product-category">{categoria}</p>

                <p className="product-price">${precio}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProductsConteiner;
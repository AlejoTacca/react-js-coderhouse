import "./styles.css"
import React, { useState } from 'react';

const ItemListContainer = () => {
  // Definir el arreglo de categorías
  const categorias = ["Electrónica", "Ropa", "Hogar", "Deportes", "Libros"];

  // Estado para mantener la categoría seleccionada
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  // Función para manejar el clic en una categoría
  const handleCategoriaClick = (categoria) => {
    setCategoriaSeleccionada(categoria);
    // Aquí puedes realizar acciones relacionadas con la categoría seleccionada, como cargar contenido específico, filtrar productos, etc.
  };

  return (
    <div className="item-list-container">
      <h2>Productos</h2>
      
      {/* Listado de categorías clickeables */}
      <div className="categorias">
        <h3>Categorías:</h3>
        <ul>
          {categorias.map((categoria, index) => (
            <li key={index}>
              <button
                onClick={() => handleCategoriaClick(categoria)}
                className={categoria === categoriaSeleccionada ? 'categoria-activa' : ''}
              >
                {categoria}
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      
    </div>
  );
};

export default ItemListContainer;


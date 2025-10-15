import React from 'react';
import './TitansLoader.css'; // Importa el archivo CSS para la animación

const TitansLoader = () => {
  return (
    <div className="titans-loader-container">
      {/* Este es el código SVG del casco "TITANS".
        En una implementación real, lo exportarías desde un archivo .svg 
        o lo generarías como un componente SVG en React.
        
        Las clases 'helmet-body' y 'helmet-outline' se usan para el estilo y la animación.
      */}
      <svg
        className="titans-helmet-svg"
        viewBox="0 0 350 550" // Ajusta el viewBox según tu SVG final
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Fondo del casco (negro) */}
        <path 
          className="helmet-body" 
          d="..." /* Aquí iría el path del cuerpo negro */ 
        />

        {/* Contorno (gris/plateado, para animar el parpadeo) */}
        <path 
          className="helmet-outline" 
          d="..." /* Aquí iría el path del contorno */ 
        />
        
        {/* Tipografía "TITANS" */}
        <text 
          className="titans-text" 
          x="175" y="50" 
          textAnchor="middle" 
          fontSize="35" 
          fill="#C0C0C0" 
          style={{ letterSpacing: '10px' }}
        >
          TITANS
        </text>
        
        {/* Nota: Necesitarías el SVG exacto para completar los 'd' paths. */}
      </svg>
    </div>
  );
};

export default TitansLoader;
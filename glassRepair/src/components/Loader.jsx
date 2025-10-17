import React from 'react';
// IMPORTANTE: Cambia la ruta según dónde tengas guardada tu imagen
import LoaderIcon from '../assets/logo.svg'; 

const Loader = () => {
  return (
    // Contenedor principal: cubre toda la pantalla (fixed) con fondo gris oscuro.
    // Clases ajustadas: 'bg-gray-900' para gris muy oscuro, 'bg-opacity-90' para transparencia leve.
<div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-50 bg-opacity-50 z-50">
      
      <img 
        src={LoaderIcon} // 2. Usa la variable importada como fuente.
        alt="Cargando..."
        className="w-12 h-12 object-contain animate-bounce" // Clases de Tailwind
      />

    </div>
  );
};

export default Loader;
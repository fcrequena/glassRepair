import React, { useState, useEffect } from 'react';
import Loader from './components/Loader'; // Importa el componente Loader

function App() {
  // 1. Estado para controlar si la página está cargando. Inicialmente 'true'.
  const [isLoading, setIsLoading] = useState(true);

  // 2. useEffect para simular el tiempo de carga de la página.
  useEffect(() => {
    // Simulamos una operación de carga (ej. una llamada a API) que tarda 3 segundos.
    const timer = setTimeout(() => {
      setIsLoading(false); // Cambia el estado a 'false' después del tiempo.
    }, 3000); // 3000 milisegundos = 3 segundos

    // Función de limpieza de useEffect: importante para evitar fugas de memoria.
    return () => clearTimeout(timer);
  }, []); // El array vacío [] asegura que esto solo se ejecute una vez al montar.

  // 3. Renderizado Condicional
  if (isLoading) {
    return <Loader />; // Muestra el Loader si isLoading es true
  }

  // 4. Contenido principal de la aplicación (solo se muestra cuando isLoading es false)
  return (
    <div className="p-10">
      <h2 className="text-4xl font-extrabold text-green-700 mb-6">
        ¡Contenido Cargado!
      </h2>
      <p className="text-gray-700 text-lg">
        Este contenido tardó 3 segundos en mostrarse. El loader ya se ocultó.
      </p>
      <h1 class="text-3xl font-bold underline">    Hello world!  </h1>
      <p class="font-sans ...">The quick brown fox ...</p><p class="font-serif ...">The quick brown fox ...</p><p class="font-mono ...">The quick brown fox ...</p>
      {/* Aquí va el resto de tu aplicación */}
    </div>
  );
}

export default App;
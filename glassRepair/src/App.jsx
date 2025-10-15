import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import './index.css'; // Estilos base y variables de color
import TitansLoader from './components/loader/TitansLoader';

function App() {
  return (
    <div className="App">
      <TitansLoader/>
      <Header />
      <main className="main-content">
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
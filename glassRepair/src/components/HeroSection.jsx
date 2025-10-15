import React from 'react';
import DestacadosGrid from './DestacadosGrid';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-grid">
                
                {/* Columna Izquierda: Título y Destacados */}
                <div className="main-area">
                    <h1 className="title-text">Explore Universos Anime Infinitos</h1>
                    <p className="subtitle-text">
                        Miles de títulos, desde classics esto a la latos estenes, a yiu plance.
                    </p>

                    <h2 className="section-heading">Our services, we replaced</h2>
                    <DestacadosGrid />
                </div>

                {/* Columna Derecha: Tarjetas de Imágenes y CTA */}
                <div className="sidebar-area">
                    
                    {/* Tarjeta Superior con Borde Vintage */}
                    <div className="vintage-card top-card">
                        {/* Aquí iría la imagen de la pareja de anime */}
                        <div className="image-placeholder top-image">
                            [Imagen de la Pareja]
                            {/* Botón central superpuesto */}
                            <div className="central-button">
                                <p>VER CATÁLOGO HOVA</p>
                                <p className="small-text">Generaton. Anime </p>
                            </div>
                        </div>
                    </div>

                    {/* Tarjeta Inferior con Borde Vintage */}
                    <div className="vintage-card bottom-card">
                        {/* Aquí iría la imagen del grupo de niños anime */}
                         <div className="image-placeholder bottom-image">
                            [Imagen del Grupo]
                        </div>
                    </div>

                    {/* Banner de Suscripción */}
                    <div className="promo-banner">
                        <h3>ÚNETE HOWA:</h3>
                        <p>Disfruta gruisa fratla ito de 30 días. ¡Cáncele in sontime.</p>
                        <button className="download-button">
                            DOWNLOAD
                            <span className="arrow">↓</span>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
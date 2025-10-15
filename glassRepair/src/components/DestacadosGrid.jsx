import React from 'react';
import windshield from '../assets/windshield.jpeg'
// Datos simulados de los animes
const animeData = [
    { title: "Widnshield", sub: "we replaced" },
    { title: "Doorglass", sub: "car" },
    // { title: "Blackglass", sub: "Boplarodis" },
    { title: "Backglass", sub: "car" },
    { title: "Corollglas", sub: "car" },
];

const DestacadosGrid = () => {
    return (
        <div className="destacados-grid">
            {animeData.map((anime, index) => (
                <div className="anime-item" key={index}>
                    <div className="vintage-poster-border">
                        {/* Placeholder para la imagen del anime */}
                        <div className="poster-image">
                            [Img {index + 1}]
                            <img src={windshield}   />
                        </div>
                    </div>
                    <p className="anime-title">{anime.title}</p>
                    {/* <p className="anime-title">{anime.sub}</p> */}
                </div>
            ))}
        </div>
    );
};

export default DestacadosGrid;
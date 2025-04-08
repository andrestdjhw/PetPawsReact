import { useState } from "react";
import { useNavigate } from "react-router";

export const Noticias = () => {
    // Estado para almacenar las noticias
    const [noticias, setNoticias] = useState([
        {
            id: 1,
            titulo: "Nueva campaña de adopción",
            contenido: "Este mes hemos lanzado una campaña para encontrar hogares para más de 50 animales en necesidad. ¡Únete y ayuda a cambiar vidas!",
        },
        {
            id: 2,
            titulo: "Evento de recaudación de fondos",
            contenido: "Organizamos un evento especial para recaudar fondos destinados a la alimentación y cuidado médico de nuestros rescatados.",
        },
        {
            id: 3,
            titulo: "Gracias a nuestros voluntarios",
            contenido: "Queremos agradecer a los voluntarios que hicieron posible el rescate de 20 animales este fin de semana.",
        },
    ]);

    return (
        <section className="container">
            <h1 className="title">Noticias</h1>
            <ul className="news-list">
                {noticias.map((noticia) => (
                    <li key={noticia.id} className="news-item">
                        <h2 className="news-title">{noticia.titulo}</h2>
                        <p className="news-content">{noticia.contenido}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};
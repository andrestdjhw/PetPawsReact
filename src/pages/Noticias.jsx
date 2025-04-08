import { useState } from "react";
import { useNavigate } from "react-router";

export const Noticias = () => {
  // Estado para almacenar las noticias
  const [noticias, setNoticias] = useState([
    {
      id: 1,
      titulo: "Nueva campaña de adopción",
      fecha: "10 de abril, 2025",
      contenido: "Este mes hemos lanzado una campaña para encontrar hogares para más de 50 animales en necesidad. ¡Únete y ayuda a cambiar vidas!",
    },
    {
      id: 2,
      titulo: "Evento de recaudación de fondos",
      fecha: "5 de abril, 2025",
      contenido: "Organizamos un evento especial para recaudar fondos destinados a la alimentación y cuidado médico de nuestros rescatados.",
    },
    {
      id: 3,
      titulo: "Gracias a nuestros voluntarios",
      fecha: "28 de marzo, 2025",
      contenido: "Queremos agradecer a los voluntarios que hicieron posible el rescate de 20 animales este fin de semana.",
    },
  ]);

  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 to-amber-100 p-4">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-amber-600 p-6 text-center rounded-t-xl shadow-lg">
          <h1 className="text-2xl font-bold text-white">Noticias</h1>
          <p className="text-amber-100 mt-1">Últimas novedades sobre nuestra organización</p>
        </div>
        
        <div className="bg-white p-6 rounded-b-xl shadow-xl mb-8">
          <ul className="space-y-6">
            {noticias.map((noticia) => (
              <li key={noticia.id} className="border-b border-amber-200 pb-6 last:border-0 last:pb-0">
                <div className="bg-amber-50 rounded-lg p-5 hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-xl font-semibold text-amber-800 mb-1">{noticia.titulo}</h2>
                  <p className="text-sm text-amber-600 mb-3">{noticia.fecha}</p>
                  <p className="text-amber-700">{noticia.contenido}</p>
                  
                  <div className="mt-4 flex justify-end">
                    <button className="text-sm text-amber-600 hover:text-amber-800 font-medium flex items-center transition-colors">
                      Leer más
                      <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 text-center">
            <button className="py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors">
              Ver todas las noticias
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


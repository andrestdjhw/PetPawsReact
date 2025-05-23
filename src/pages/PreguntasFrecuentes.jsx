import { useState } from "react"
import { useNavigate } from "react-router";


export const FAQ = () => {
  const navigate = useNavigate();
  const [preguntaActiva, setPreguntaActiva] = useState(null);
  const preguntas = [
    {
      id: 1,
      pregunta: "¿Cómo puedo adoptar una mascota?",
      respuesta:
        "Ve a la sección de Adopciones, elige una mascota y haz clic en 'Adoptar'. Luego te contactaremos para finalizar el proceso.",
    },
    {
      id: 2,
      pregunta: "¿Cuáles son los requisitos para adoptar?",
      respuesta:
        "Ser mayor de edad, contar con un espacio adecuado y firmar un compromiso de cuidado responsable.",
    },
    {
      id: 3,
      pregunta: "¿Las mascotas están vacunadas?",
      respuesta:
        "Sí, todas las mascotas son entregadas con su esquema de vacunación y desparasitación al día.",
    },
    {
      id: 4,
      pregunta: "¿Puedo visitar a la mascota antes de adoptarla?",
      respuesta:
        "Sí, puedes coordinar una visita previa para conocer a la mascota antes de tomar una decisión.",
    },
    {
      id: 5,
      pregunta: "¿Qué debo llevar el día de la adopción?",
      respuesta:
        "Una transportadora adecuada, identificación y, si es posible, una manta o juguete para ayudar a la mascota a adaptarse.",
    },
    {
      id: 6,
      pregunta: "¿Se puede adoptar más de una mascota?",
      respuesta:
        "Sí, siempre que cumplas con los requisitos y tengamos disponibilidad compatible.",
    },
    {
      id: 7,
      pregunta: "¿Qué sucede si la adopción no funciona?",
      respuesta:
        "Puedes contactarnos y, si es necesario, te ayudaremos a reubicar a la mascota. Siempre buscamos lo mejor para ellos.",
    },
    {
      id: 8,
      pregunta: "¿Tienen mascotas especiales o con necesidades médicas?",
      respuesta:
        "Sí, algunas mascotas requieren cuidados especiales. Se informa esto claramente en su perfil.",
    },
    {
      id: 9,
      pregunta: "¿Puedo ser voluntario en el refugio?",
      respuesta:
        "¡Por supuesto! Puedes escribirnos desde la sección de contacto y te daremos toda la información.",
    },
    {
      id: 10,
      pregunta: "¿Aceptan donaciones?",
      respuesta:
        "Sí, aceptamos donaciones de alimento, mantas, medicinas o apoyo económico. Todo suma para el bienestar animal.",
    },
  ];

  const togglePregunta = (id) => {
    setPreguntaActiva(preguntaActiva === id ? null : id);
  };

  // Custom chevron icons using SVG
  const ChevronDown = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );

  const ChevronUp = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  );

  return (
    <section className="faq-page">
      <div className="faq-card">
        <div className="faq-header">
          <h1 className="faq-title">Preguntas Frecuentes</h1>
          <p className="faq-subtitle">Todo lo que necesitas saber sobre adopciones</p>
        </div>
        
        <div className="faq-accordion-container">
          {preguntas.map((item) => (
            <div
              key={item.id}
              className={`border border-amber-200 rounded-lg overflow-hidden transition-all duration-300 ${
                preguntaActiva === item.id ? 'shadow-md bg-white' : 'bg-amber-50'
              }`}
            >
              <button
                className="faq-accordion-button"
                onClick={() => togglePregunta(item.id)}
                aria-expanded={preguntaActiva === item.id}
                aria-controls={`answer-${item.id}`}
              >
                <h3 className="faq-accordion-title">
                  {item.pregunta}
                </h3>
                <span className="faq-accordion-text">
                  {preguntaActiva === item.id ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>
              
              {preguntaActiva === item.id && (
                <div
                  id={`answer-${item.id}`}
                  className="p-4 pt-0 border-t border-amber-100"
                >
                  <p className="text-amber-800">{item.respuesta}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="px-6 pb-6">
          <div className="p-6 bg-amber-50 border border-amber-200 rounded-lg shadow-sm text-center">
            <h2 className="text-xl font-semibold text-amber-700 mb-2">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-amber-800 mb-4">
              Si tienes alguna otra pregunta, no dudes en contactarnos.
            </p>
            <button onClick={() => navigate('/contacto')} className="navigate-to-contact">
              Contactar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};



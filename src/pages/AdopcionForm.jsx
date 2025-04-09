import React, { useState } from 'react';
import { useNavigate } from "react-router";

export const AdopcionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    petPreference: '',
    homeType: '',
    experience: '',
    timeAvailable: '',
    hasAgreed: false
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Adoption form submitted with:", formData);
      setIsLoading(false);
      setFormSubmitted(true);
    }, 1000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 p-4">
      <div className="max-w-3xl mx-auto pt-8 pb-12">
        <div className="bg-amber-600 p-6 text-center rounded-t-xl">
          <h1 className="text-2xl font-bold text-white">Formulario de Adopción</h1>
          <p className="text-amber-100 mt-1">Ayúdanos a encontrar el compañero perfecto para ti</p>
        </div>
        
        <div className="bg-white rounded-b-xl shadow-xl p-6 md:p-8">
          {!formSubmitted ? (
            <>
              <p className="text-amber-700 mb-6">Por favor, completa este breve formulario para iniciar el proceso de adopción. Nos pondremos en contacto contigo pronto.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Personal Information */}
                <div>
                  <h2 className="text-lg font-medium text-amber-800 mb-4">Información Personal</h2>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-amber-900 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="bg-amber-50 border border-amber-300 text-amber-900 text-sm rounded-lg p-3 w-full focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-amber-900 mb-2">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="bg-amber-50 border border-amber-300 text-amber-900 text-sm rounded-lg p-3 w-full focus:ring-amber-500 focus:border-amber-500"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-amber-900 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="bg-amber-50 border border-amber-300 text-amber-900 text-sm rounded-lg p-3 w-full focus:ring-amber-500 focus:border-amber-500"
                      placeholder="123-456-7890"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-amber-900 mb-2">
                      Dirección *
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="bg-amber-50 border border-amber-300 text-amber-900 text-sm rounded-lg p-3 w-full focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Tu dirección"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                {/* Adoption Preferences */}
                <div>
                  <h2 className="text-lg font-medium text-amber-800 mb-4 mt-6">Preferencias de Adopción</h2>
                  
                  <div className="mb-5">
                    <label htmlFor="petPreference" className="block text-sm font-medium text-amber-900 mb-2">
                      ¿Qué tipo de mascota te interesa adoptar? *
                    </label>
                    <select
                      id="petPreference"
                      className="bg-amber-50 border border-amber-300 text-amber-900 text-sm rounded-lg p-3 w-full focus:ring-amber-500 focus:border-amber-500"
                      value={formData.petPreference}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="dog">Perro</option>
                      <option value="cat">Gato</option>
                      <option value="both">Ambos</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>
                  
                  <div className="mb-5">
                    <label htmlFor="homeType" className="block text-sm font-medium text-amber-900 mb-2">
                      Tipo de Vivienda *
                    </label>
                    <select
                      id="homeType"
                      className="bg-amber-50 border border-amber-300 text-amber-900 text-sm rounded-lg p-3 w-full focus:ring-amber-500 focus:border-amber-500"
                      value={formData.homeType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="house">Casa</option>
                      <option value="apartment">Apartamento</option>
                      <option value="rural">Finca/Rural</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>
                </div>
                
                {/* Experience & Availability */}
                <div>
                  <h2 className="text-lg font-medium text-amber-800 mb-4 mt-6">Experiencia y Disponibilidad</h2>
                  
                  <div className="mb-5">
                    <label htmlFor="experience" className="block text-sm font-medium text-amber-900 mb-2">
                      ¿Has tenido mascotas antes? *
                    </label>
                    <select
                      id="experience"
                      className="bg-amber-50 border border-amber-300 text-amber-900 text-sm rounded-lg p-3 w-full focus:ring-amber-500 focus:border-amber-500"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="none">No, nunca</option>
                      <option value="currently">Sí, tengo actualmente</option>
                      <option value="past">Sí, he tenido en el pasado</option>
                    </select>
                  </div>
                  
                  <div className="mb-5">
                    <label htmlFor="timeAvailable" className="block text-sm font-medium text-amber-900 mb-2">
                      ¿Cuánto tiempo disponible tienes para tu mascota por día? *
                    </label>
                    <select
                      id="timeAvailable"
                      className="bg-amber-50 border border-amber-300 text-amber-900 text-sm rounded-lg p-3 w-full focus:ring-amber-500 focus:border-amber-500"
                      value={formData.timeAvailable}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="minimal">Menos de 2 horas</option>
                      <option value="moderate">Entre 2 y 4 horas</option>
                      <option value="significant">Entre 4 y 8 horas</option>
                      <option value="fulltime">Más de 8 horas</option>
                    </select>
                  </div>
                </div>
                
                {/* Agreement */}
                <div className="mt-6">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="hasAgreed"
                        type="checkbox"
                        className="w-4 h-4 border-amber-300 rounded text-amber-600 focus:ring-amber-500"
                        checked={formData.hasAgreed}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <label htmlFor="hasAgreed" className="ml-3 text-sm text-amber-700">
                      Confirmo que toda la información proporcionada es verdadera y estoy dispuesto a participar en un proceso de verificación si es necesario. *
                    </label>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full md:w-auto flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      "Enviar Solicitud"
                    )}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-10">
              <div className="bg-amber-100 inline-flex p-3 rounded-full mb-4">
                <svg className="h-12 w-12 text-amber-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-amber-800 mb-2">¡Solicitud Enviada!</h2>
              <p className="text-amber-700 mb-6 max-w-md mx-auto">
                Gracias por tu interés en adoptar. Hemos recibido tu solicitud y nos pondremos en contacto contigo pronto para los siguientes pasos.
              </p>
              <button 
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    address: '',
                    petPreference: '',
                    homeType: '',
                    experience: '',
                    timeAvailable: '',
                    hasAgreed: false
                  });
                }}
                className="py-2 px-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                Enviar otra solicitud
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

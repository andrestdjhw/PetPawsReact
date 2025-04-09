import { useState } from "react"
import { useNavigate } from "react-router";

export const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    policy: false
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
      console.log("Contact form submitted with:", formData);
      setIsLoading(false);
      setFormSubmitted(true);
    }, 1000);
  };

  return (
    <section className="contact-page">
      <div className="contact-page-display">
        <div className="contact-header">
          <h1 className="page-title">Contáctanos</h1>
          <p className="page-subtitle">Estamos aquí para ayudarte con cualquier consulta</p>
        </div>
        
        <div className="contact-white-half">
          <div className="contact-form-display">
            {/* Contact Info Section - 2 columns on desktop */}
            <div className="contact-form-spliter">
              <h2 className="contact-info-title">Información de Contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-lg mr-4">
                    <svg className="h-6 w-6 text-amber-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="contact-info-subtitle">Dirección</h3>
                    <p className="text-amber-700 mt-1">Av. Principal 123, Ciudad</p>
                    <p className="text-amber-700">Código Postal 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-lg mr-4">
                    <svg className="h-6 w-6 text-amber-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="contact-info-subtitle">Teléfono</h3>
                    <p className="text-amber-700 mt-1">+123 456 7890</p>
                    <p className="text-amber-700">Lun - Vie: 9:00 - 18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-lg mr-4">
                    <svg className="h-6 w-6 text-amber-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="contact-info-subtitle">Email</h3>
                    <p className="text-amber-700 mt-1">info@adopciones.com</p>
                    <p className="text-amber-700">soporte@adopciones.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-lg mr-4">
                    <svg className="h-6 w-6 text-amber-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="contact-info-subtitle">Horario</h3>
                    <p className="text-amber-700 mt-1">Lunes a Viernes: 9:00 - 18:00</p>
                    <p className="text-amber-700">Sábados: 10:00 - 14:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="contact-info-subtitle mb-4">Síguenos</h3>
                <div className="flex space-x-4">
                  <a href="#" className="contact-social-links">
                    <svg className="h-5 w-5 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-amber-100 p-2 rounded-full hover:bg-amber-200 transition-colors">
                    <svg className="h-5 w-5 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-amber-100 p-2 rounded-full hover:bg-amber-200 transition-colors">
                    <svg className="h-5 w-5 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form Section - 3 columns on desktop */}
            <div className="md:col-span-3 p-6 md:p-8">
              {!formSubmitted ? (
                <>
                  <h2 className="contact-form-title">Envíanos un Mensaje</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="contact-form-grid">
                      <div>
                        <label htmlFor="name" className="contact-form-label">
                          Nombre Completo
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="contact-form-input"
                          placeholder="Tu nombre"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="contact-form-label">
                          Correo Electrónico
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="contact-form-input"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="contact-form-label">
                        Asunto
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="contact-form-input"
                        placeholder="¿Sobre qué quieres hablar?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="contact-form-label">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        rows="5"
                        className="contact-form-input"
                        placeholder="Escribe tu mensaje aquí..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="policy"
                          type="checkbox"
                          className="w-4 h-4 border-amber-300 rounded text-amber-600 focus:ring-amber-500"
                          checked={formData.policy}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <label htmlFor="policy" className="ml-3 text-sm text-amber-700">
                        He leído y acepto la <a href="#" className="text-amber-600 hover:underline">política de privacidad</a>
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="contact-form-button"
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
                        "Enviar Mensaje"
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="bg-amber-100 inline-flex p-3 rounded-full mb-4">
                    <svg className="h-12 w-12 text-amber-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-amber-800 mb-2">¡Mensaje Enviado!</h2>
                  <p className="text-amber-700 mb-6">
                    Gracias por contactarnos. Te responderemos lo antes posible.
                  </p>
                  <button 
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                        policy: false
                      });
                    }}
                    className="py-2 px-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="max-w-6xl mx-auto mt-8 bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="p-6 bg-amber-50">
          <h2 className="text-xl font-semibold text-amber-800 mb-1">Nuestra Ubicación</h2>
          <p className="text-amber-700">Visítanos en nuestras instalaciones</p>
        </div>
        <div className="h-64 bg-amber-100 flex items-center justify-center">
          <div className="text-center p-4">
            <svg className="h-12 w-12 text-amber-600 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-amber-800 font-medium">Mapa Interactivo</p>
            <p className="text-amber-700 text-sm">(Aquí se integraría un mapa real)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useNavigate } from "react-router";
import { useState } from "react";
import { Link } from 'react-router-dom';

export const QuienesSomos = () => {
  const navigate = useNavigate();
  return (
    <section className="about-page">
      <div className="container mx-auto px-4 py-8">
        <div className="about-header">
          <h1 className="page-title">¿Quiénes Somos?</h1>
          <p className="page-subtitle">Conoce nuestra organización</p>
        </div>

        <div className="about-card">
          <div className="prose max-w-none text-amber-900">
            <p className="about-paragraph">
              Somos una organización sin fines de lucro comprometida con encontrar hogares amorosos y
              seguros para animales sin hogar. Nuestra misión es rescatar, cuidar y reintegrar a estos
              maravillosos compañeros en familias que les brinden la calidad de vida que merecen.
            </p>

            <p className="about-paragraph">
              Nuestro equipo está compuesto por voluntarios apasionados, amantes de los animales y
              personas dedicadas a marcar la diferencia.
            </p>

            <p className="about-paragraph-short">
              ¡Únete a nosotros para construir un mundo donde ningún animal se quede sin un hogar!
            </p>
          </div>

          <div className="about-contact-section">
            <h2 className="about-contact-title">Contáctanos</h2>

            <p className="text-center text-amber-700 mb-2">
              Teléfono: <a href="tel:+50412345678" className="text-amber-600 hover:text-amber-800 transition-colors">
                +504 1234 5678
              </a>
            </p>

            <p className="text-center text-amber-700 mb-4">
              Síguenos en nuestras redes sociales:
            </p>

            <div className="flex justify-center gap-4 mb-4">
              <a
                href="https://facebook.com/NuestraOrganizacion"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </a>

              <a
                href="https://twitter.com/NuestraOrganizacion"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>

              <a
                href="https://instagram.com/NuestraOrganizacion"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>

            <div className="text-center mt-6">
              <Link to="/contacto">
                <a
                  href="#/contacto"
                  className="inline-block py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
                >
                  Contáctanos hoy
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

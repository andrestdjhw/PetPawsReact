import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import {FaSquareInstagram} from "react-icons/fa6";

export const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-columns">
                <div>
                    <h2 className="footer-title">
                        ¿Quienes somos?
                    </h2>
                    <p className="text-gray-300">
                    PetPawsHN es una organización dedicada al cuidado, rescate y bienestar de animales domésticos, promoviendo la adopción responsable y el respeto por todos los seres vivos.
                    </p>
                </div>
                <div>
                    <h2 className="footer-title">
                        Menu
                    </h2>
                    <ul>
                        <li><a href="#" className="footer-link">Inicio</a></li>
                        <li><a href="#" className="footer-link">Noticias</a></li>
                        <li><a href="#" className="footer-link">¿Quienes Somos?</a></li>
                        <li><a href="#" className="footer-link">Galeria</a></li>
                        <li><a href="#" className="footer-link">Adopciones</a></li>
                        <li><a href="#" className="footer-link">Contacto</a></li>
                        <li><a href="#" className="footer-link">Preguntas Frecuentes</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="footer-title">
                        Categoria Productos
                    </h2>
                    <ul>
                        <li><a href="#" className="footer-link">Concentrado</a></li>
                        <li><a href="#" className="footer-link">Adornos</a></li>
                        <li><a href="#" className="footer-link">Dispensadores</a></li>
                        <li><a href="#" className="footer-link">Medicamentos</a></li>
                        <li><a href="#" className="footer-link">Accesorios</a></li>
                        <li><a href="#" className="footer-link">Juguetes</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="footer-title">
                        ¡Siquenos en nuestras redes!
                    </h2>
                    <ul className="flex space-x-4">
                        <li><FaSquareFacebook className="footer-social-icon"/><a href="#" className="footer-social-link">Facebook</a></li>
                        <li><FaSquareTwitter className="footer-social-icon"/><a href="#" className="footer-social-link">Twitter</a></li>
                        <li><FaSquareInstagram className="footer-social-icon" /><a href="#" className="footer-social-link">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyright">
                <p> &copy; 2025: Todos los Derechos Reservados</p>
                <p>Desarrollo de Portales Web II</p>
            </div>
        </footer>
    )
}
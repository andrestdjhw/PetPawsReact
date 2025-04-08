import { useState } from "react";
import { useNavigate } from "react-router";

export const QuienesSomos = () => {
    const styles = {
        container: {
            maxWidth: "800px",
            margin: "0 auto",
            padding: "20px",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            fontFamily: "Arial, sans-serif"
        },
        title: {
            fontSize: "2rem",
            color: "#333333",
            textAlign: "center",
            marginBottom: "20px"
        },
        description: {
            fontSize: "1.1rem",
            color: "#555555",
            lineHeight: "1.6",
            marginBottom: "15px",
            textAlign: "justify"
        },
        contactInfo: {
            marginTop: "30px",
            paddingTop: "20px",
            borderTop: "1px solid #dddddd",
        },
        subtitle: {
            fontSize: "1.5rem",
            color: "#444444",
            marginBottom: "15px",
            textAlign: "center"
        },
        contact: {
            fontSize: "1rem",
            color: "#666666",
            marginBottom: "10px",
            textAlign: "center"
        },
        phoneLink: {
            color: "#007BFF",
            textDecoration: "none",
        },
        phoneLinkHover: {
            textDecoration: "underline",
        },
        socialLinks: {
            listStyle: "none",
            padding: 0,
            display: "flex",
            justifyContent: "center",
            gap: "15px",
        },
        socialLinksItem: {
            display: "inline",
        },
        socialLinksAnchor: {
            textDecoration: "none",
            color: "#007BFF",
            fontWeight: "bold",
        },
        socialLinksAnchorHover: {
            textDecoration: "underline",
        }
    };

    return (
        <section style={styles.container}>
            <h1 style={styles.title}>¿Quiénes Somos?</h1>
            <p style={styles.description}>
                Somos una organización sin fines de lucro comprometida con encontrar hogares amorosos y seguros para animales sin hogar. Nuestra misión es rescatar, cuidar y reintegrar a estos maravillosos compañeros en familias que les brinden la calidad de vida que merecen.
            </p>
            <p style={styles.description}>
                Nuestro equipo está compuesto por voluntarios apasionados, amantes de los animales y personas dedicadas a marcar la diferencia.
            </p>
            <p style={styles.description}>
                ¡Únete a nosotros para construir un mundo donde ningún animal se quede sin un hogar!
            </p>

            <section style={styles.contactInfo}>
                <h2 style={styles.subtitle}>Contáctanos</h2>
                <p style={styles.contact}>
                    Teléfono: <a href="tel:+50412345678" style={styles.phoneLink}>+504 1234 5678</a>
                </p>
                <p style={styles.contact}>
                    Síguenos en nuestras redes sociales:
                </p>
                <ul style={styles.socialLinks}>
                    <li style={styles.socialLinksItem}>
                        <a href="https://facebook.com/NuestraOrganizacion" target="_blank" rel="noopener noreferrer" style={styles.socialLinksAnchor}>Facebook</a>
                    </li>
                    <li style={styles.socialLinksItem}>
                        <a href="https://twitter.com/NuestraOrganizacion" target="_blank" rel="noopener noreferrer" style={styles.socialLinksAnchor}>Twitter</a>
                    </li>
                    <li style={styles.socialLinksItem}>
                        <a href="https://instagram.com/NuestraOrganizacion" target="_blank" rel="noopener noreferrer" style={styles.socialLinksAnchor}>Instagram</a>
                    </li>
                </ul>
            </section>
        </section>
    );
};
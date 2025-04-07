import { useState } from "react"
import { useNavigate } from "react-router";

export const Galeria = () => {
    return (
        <section className="container">
            <h1 className="title">Galeria</h1>

            <div class="gallery-container">
                <div>
                    <img class="gallery-item" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="Imagen 1"/>
                </div>
                <div>
                    <img class="gallery-item" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="Imagen 2"/>
                </div>
                <div>
                    <img class="gallery-item" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="Imagen 3"/>
                </div>
                <div>
                    <img class="gallery-item" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="Imagen 4"/>
                </div>
                <div>
                    <img class="gallery-item" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="Imagen 5"/>
                </div>
                <div>
                    <img class="gallery-item" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="Imagen 6"/>
                </div>
                <div>
                    <img class="gallery-item" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt="Imagen 7"/>
                </div>
                <div>
                    <img class="gallery-item" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt="Imagen 8"/>
                </div>
                <div>
                    <img class="gallery-item" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="Imagen 9"/>
                </div>
                <div>
                    <img class="gallery-item" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt="Imagen 10"/>
                </div>
                <div>
                    <img class="gallery-item" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt="Imagen 11"/>
                </div>
                <div>
                    <img class="gallery-item" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt="Imagen 12"/>
                </div>
            </div>
        </section>
    )
}
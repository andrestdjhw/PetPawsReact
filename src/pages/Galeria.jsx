import { useState } from "react"
import { useNavigate } from "react-router";

export const Galeria = () => {
    return (
        <section className="container">
            <h1 className="title">Galeria</h1>

            <div class="gallery-container">
                <div>
                    <img class="gallery-item" src="https://picsum.photos/id/837/600/400" alt="Imagen 1"/>
                </div>
                <div>
                    <img class="gallery-item" src="https://picsum.photos/id/659/600/400" alt="Imagen 2"/>
                </div>
                <div>
                    <img class="gallery-item" src="https://picsum.photos/id/237/600/400" alt="Imagen 3"/>
                </div>
                <div>
                    <img class="gallery-item" src="https://picsum.photos/id/169/600/400" alt="Imagen 4"/>
                </div>
                <div>
                    <img class="gallery-item" src="https://picsum.photos/id/40/600/400"/>
                </div>
                <div>
                    <img class="gallery-item" src="https://picsum.photos/id/200/600/400" alt="Imagen 6"/>
                </div>
                <div>
                    <img class="gallery-item" src="https://picsum.photos/id/219/600/400" alt="Imagen 7"/>
                </div>
                <div>
                    <img class="gallery-item" src="https://picsum.photos/id/244/600/400" alt="Imagen 8"/>
                </div>
                <div>
                    <img class="gallery-item" src="https://picsum.photos/id/258/600/400" alt="Imagen 9"/>
                </div>
                <div>
                    <img class="gallery-item" src="https://picsum.photos/id/582/600/400" alt="Imagen 10"/>
                </div>
                <div>
                    <img class="gallery-item" src="https://picsum.photos/id/584/600/400"/>
                </div>
                <div>
                    <img class="gallery-item" src="https://picsum.photos/id/699/600/400" alt="Imagen 12"/>
                </div>
            </div>
        </section>
    )
}
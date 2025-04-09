import { useParams } from "react-router";
import { obtenerMascotaPorNombre } from "../services/Mascotas";

export const Mascota = () => {
  const { id } = useParams();
  const mascotaData = obtenerMascotaPorNombre(id);
  return (
    <>
      <section className="seccion-detalle">

        <div className="img-content">
          <img
            src={mascotaData.imagen}
            alt={mascotaData.nombre}
            
          />
        </div>


        <div className="header">
          <h2>
            {mascotaData.nombre}
            {mascotaData.sexo === "hembra" && <span>♀️</span>}
            {mascotaData.sexo === "macho" && <span>♂️</span>}
          </h2>


          <div className="detalles">
            <p><strong>Especie:</strong> {mascotaData.tipo}</p>
            <p><strong>Edad:</strong> {mascotaData.edad}</p>
            <p><strong>Raza:</strong> {mascotaData.raza}</p>
            <p><strong>Peso:</strong> {mascotaData.peso}</p>
            <p><strong>Tamaño:</strong> {mascotaData.tamaño}</p>
            <p><strong>Actividad:</strong> {mascotaData.nivelActividad}</p>
          </div>


          <div>
            <h3>¿Cómo soy?</h3>
            <div className="comosoy">
              {mascotaData.comoSoy.map((cualidad, index) => (
                <span
                  key={index}
                  className="item"
                >
                  {cualidad}
                </span>
              ))}
            </div>
          </div>


          <div>
            <h3>Me entregan</h3>
            <ul className="meentregan">
              {mascotaData.meEntregan.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>


          <div>
            <h3 >Mi historia</h3>
            <p>{mascotaData.historia}</p>
          </div>
        </div>
      </section>

    </>
  )
}
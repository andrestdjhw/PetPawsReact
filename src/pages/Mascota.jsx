import { useParams } from "react-router";
import { obtenerMascotaPorNombre } from "../services/Mascotas";

export const Mascota = ()=>{
    const { id } = useParams();
    const mascotaData = obtenerMascotaPorNombre(id);
    return (
        <>
            <section className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-2xl shadow-lg">
      {/* Imagen principal */}
      <div className="col-span-1 flex flex-col items-center">
        <img
          src={mascotaData.imagen}
          alt={mascotaData.nombre}
          className="w-48 h-48 object-cover rounded-xl shadow-md"
        />
        {/* Miniaturas o imágenes extra */}
        <div className="flex gap-2 mt-4">
          {mascotaData.extraImages?.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Extra ${idx}`}
              className="w-14 h-14 object-cover rounded"
            />
          ))}
        </div>
      </div>

      {/* Información general */}
      <div className="col-span-2 space-y-4">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          {mascotaData.nombre}
          {mascotaData.sexo === "Hembra" && <span className="text-pink-500">♀️</span>}
          {mascotaData.sexo === "Macho" && <span className="text-blue-500">♂️</span>}
        </h2>

        {/* Datos */}
        <div className="grid grid-cols-2 gap-x-4 text-sm">
          <p><strong>Especie:</strong> {mascotaData.tipo}</p>
          <p><strong>Edad:</strong> {mascotaData.edad}</p>
          <p><strong>Raza:</strong> {mascotaData.raza}</p>
          <p><strong>Peso:</strong> {mascotaData.peso}</p>
          <p><strong>Tamaño:</strong> {mascotaData.tamaño}</p>
          <p><strong>Actividad:</strong> {mascotaData.nivelActividad}</p>
        </div>

        {/* ¿Cómo soy? */}
        <div>
          <h3 className="text-lg font-semibold mt-4">¿Cómo soy?</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {mascotaData.comoSoy.map((cualidad, index) => (
              <span
                key={index}
                className="bg-teal-200 text-teal-800 px-3 py-1 rounded-full text-sm"
              >
                {cualidad}
              </span>
            ))}
          </div>
        </div>

        {/* Me entregan */}
        <div>
          <h3 className="text-lg font-semibold mt-4">Me entregan</h3>
          <ul className="list-disc list-inside text-sm">
            {mascotaData.meEntregan.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Historia */}
        <div>
          <h3 className="text-lg font-semibold mt-4">Mi historia</h3>
          <p className="text-sm text-gray-700 mt-1">{mascotaData.historia}</p>
        </div>
      </div>
    </section>
  );
        </>
    )
}
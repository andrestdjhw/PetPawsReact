import { useParams } from "react-router"
import FilterPanel from "../components/FilterPanel";
import { getPetDetailById } from "../services/petServiceApi";
import { useEffect, useState } from "react";

export const PetDetail = () => {

    const applyFilters = (filters) => {
        console.log("Filtros aplicados:", filters);
    };

    const clearFilters = () => {
        console.log("Filtros limpiados");
    };

    const { id } = useParams();
    const [pet, setPet] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const petData = await getPetDetailById(id);
            setPet(petData);
            setLoading(false);
        };
        fetchData();
    }, [id]);

    if (loading) return <p className="text-center">Cargando detalles...</p>;
    if (!pet) return <p className="text-center text-red-600">Mascota no encontrada</p>;
    return (
        <>

            <section className="container mx-auto p-4 flex gap-6">
                <FilterPanel onApplyFilters={applyFilters} onClearFilters={clearFilters} />
                <section className="container mx-auto p-4 max-w-2xl">
                <h2 className="text-3xl font-bold mb-4 text-center">pet.name</h2>
                    <h2 className="text-3xl font-bold mb-4 text-center">{pet.breeds?.[0]?.name || "Mascota sin raza"}</h2>
                    <img
                        src={pet.url}
                        alt={pet.breeds?.[0]?.name}
                        className="mx-auto rounded-xl shadow-md max-h-[400px] object-contain"
                    />
                    <div className="mt-6">
                        
                        <p><strong>Tipo:</strong> {pet.type}</p>
                        <p><strong>Raza:</strong> {pet.breeds?.[0]?.name || "No especificado"}</p>
                        <p><strong>Origen:</strong> {pet.breeds?.[0]?.origin || "Desconocido"}</p>
                        <p><strong>Temperamento:</strong> {pet.breeds?.[0]?.temperament || "No especificado"}</p>
                    </div>
                </section>
            </section>
        </>
    )
}
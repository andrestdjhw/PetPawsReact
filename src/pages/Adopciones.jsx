import { useState,useEffect } from "react"
import { useNavigate } from "react-router";

import { getPetList } from "../services/petServiceApi";
import { PetList } from "../components/Pets/petList";
import FilterPanel from "../components/FilterPanel";

export const Adopciones = () =>{
    const [pets, setPets] = useState([]);

    useEffect(() => {
        getPetList().then(data => setPets(data));
    }, []);


        const applyFilters = (filters) => {
            console.log("Filtros aplicados:", filters);
        };
    
        const clearFilters = () => {
            console.log("Filtros limpiados");
        };
    

    return (
        <section className="container mx-auto p-4 flex gap-6">
            <FilterPanel onApplyFilters={applyFilters} onClearFilters={clearFilters} />
            <div className="flex-1">
                <h1 className="text-3xl font-bold text-center mb-6">Nuestras Mascotas</h1>
                <PetList pets={pets} onShowDetail={(pet) => console.log(pet)} />
            </div>
        </section>
    )
}



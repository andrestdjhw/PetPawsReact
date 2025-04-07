// src/pages/DashBoard.jsx
import { useState } from "react";
import { useNavigate } from "react-router";
import { useGetPokemons } from "../services/pokemonService";
import { PokemonList } from "../components/PokemonList/PokemonList";
import { Paging } from "../components/Paging/Paging";
import FilterPanel from "../components/FilterPanel";

export const DashBoard = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const navigate = useNavigate();

    const { pokemonData, isLoading } = useGetPokemons(page - 1, limit);

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
                <h1 className="text-3xl font-bold text-center mb-6">Nuestros Productos</h1>
                {isLoading && <p className="text-center">Cargando...</p>}
                {pokemonData?.results?.length > 0 && (
                    <>
                        <PokemonList pokemons={pokemonData.results} onShowDetail={(id) => navigate(`/detail/${id}`)} />
                        <Paging totalElements={pokemonData.count} limit={limit} page={page} onPageChange={setPage} onLimitChange={setLimit} />
                    </>
                )}
            </div>
        </section>
    );
};

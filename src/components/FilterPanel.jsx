import { useState } from "react";

const FilterPanel = ({ onApplyFilters, onClearFilters }) => {
    const [filters, setFilters] = useState({
        types: {
            concentrado: false,
            medicamentos: false,
            adornos: false,
            accesorios: false,
            dispensadores: false,
            juguetes: false,
        },
        priceRange: [0, 50],
        category: "",
        availability: "all",
    });

    const toggleTypeFilter = (type) => {
        setFilters({
            ...filters,
            types: {
                ...filters.types,
                [type]: !filters.types[type],
            },
        });
    };

    const handlePriceChange = (e, index) => {
        const newPriceRange = [...filters.priceRange];
        newPriceRange[index] = parseInt(e.target.value);
        setFilters({ ...filters, priceRange: newPriceRange });
    };

    const handleCategoryChange = (e) => {
        setFilters({ ...filters, category: e.target.value });
    };

    const handleAvailabilityChange = (e) => {
        setFilters({ ...filters, availability: e.target.value });
    };

    return (
        <aside className="filterpanel-container">
            <h2 className="filterpanel-title">
                Filtros
            </h2>
            
            {/* Filtro por Tipo (más compacto) */}
            <div className="mb-4">
                <h3 className="text-md font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Tipo
                </h3>
                <div className="grid grid-cols-2 gap-2">
                    {Object.keys(filters.types).map((type) => (
                        <label 
                            key={type} 
                            className={`flex items-center gap-2 p-1.5 rounded-md transition-all duration-200 cursor-pointer 
                                ${filters.types[type] ? 'bg-amber-50 border border-amber-200' : 'hover:bg-gray-50'}`}
                        >
                            <input 
                                type="checkbox" 
                                className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500" 
                                checked={filters.types[type]} 
                                onChange={() => toggleTypeFilter(type)} 
                            />
                            <span className="capitalize text-gray-700 text-sm">{type}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Filtro por Precio (margen reducido) */}
            <div className="mb-4">
                <h3 className="text-md font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Rango de Precio
                </h3>
                <div className="px-1">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={filters.priceRange[0]}
                        onChange={(e) => handlePriceChange(e, 0)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={filters.priceRange[1]}
                        onChange={(e) => handlePriceChange(e, 1)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-3"
                    />
                    <div className="flex justify-between mt-1 text-sm text-gray-600">
                        <span>${filters.priceRange[0]}</span>
                        <span>${filters.priceRange[1]}</span>
                    </div>
                </div>
            </div>

            {/* Filtro por Categoría (más pequeño) */}
            <div className="mb-4">
                <h3 className="text-md font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                    Categoría
                </h3>
                <select
                    value={filters.category}
                    onChange={handleCategoryChange}
                    className="w-full p-1.5 text-sm border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                >
                    <option value="">Todas las categorías</option>
                    <option value="pokebasicos">Perros</option>
                    <option value="evoluciones">Gatos</option>
                    <option value="legendarios">Aves</option>
                    <option value="miticos">Peces</option>
                </select>
            </div>

            {/* Filtro por Disponibilidad (más compacto) */}
            <div className="mb-4">
                <h3 className="text-md font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Disponibilidad
                </h3>
                <div className="space-y-1">
                    {['all', 'available', 'out-of-stock'].map((option) => (
                        <label key={option} className="flex items-center gap-2 text-gray-700 text-sm">
                            <input
                                type="radio"
                                name="availability"
                                value={option}
                                checked={filters.availability === option}
                                onChange={handleAvailabilityChange}
                                className="w-4 h-4 text-amber-600 focus:ring-amber-500"
                            />
                            <span>
                                {option === 'all' && 'Todos'}
                                {option === 'available' && 'Disponibles'}
                                {option === 'out-of-stock' && 'Agotados'}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Botones de Acción (margen reducido) */}
            <div className="flex flex-col gap-2">
                <button
                    className="applyfilter-button"
                    onClick={() => onApplyFilters(filters)}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                    Aplicar Filtros
                </button>
                <button
                    className="cleanfilter-button"
                    onClick={onClearFilters}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Limpiar Filtros
                </button>
            </div>
        </aside>
    );
};

export default FilterPanel;
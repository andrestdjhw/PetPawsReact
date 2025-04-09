import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterPanel from "../components/FilterPanel";

export const Productos = () => {
    const navigate = useNavigate();

    // Product data with real images
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Antialergias",
            price: 50.99,
            imageUrl: "https://images.unsplash.com/photo-1640967378141-763f6dc2f352?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 2,
            name: "Crema Pelaje",
            price: 59.99,
            imageUrl: "https://images.unsplash.com/photo-1623099148724-2b9b22ddc51a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 3,
            name: "Comida Roedores",
            price: 14.99,
            imageUrl: "https://images.unsplash.com/photo-1603805167397-892be3fc3090?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 4,
            name: "Concentrado Canino",
            price: 99.99,
            imageUrl: "https://images.unsplash.com/photo-1684882726821-2999db517441?q=80&w=2620&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 5,
            name: "Juguetes",
            price: 49.99,
            imageUrl: "https://images.unsplash.com/photo-1743652900778-0d5a4fb483a9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 6,
            name: "Ropa Canina",
            price: 89.99,
            imageUrl: "https://images.unsplash.com/photo-1681202200127-49eb9e02fa88?q=80&w=2657&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 7,
            name: "Croquetas",
            price: 59.99,
            imageUrl: "https://images.unsplash.com/photo-1602169376841-fc7c79742eb9?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 8,
            name: "Dispensadores",
            price: 99.99,
            imageUrl: "https://images.unsplash.com/photo-1651571435005-3379fbc89bab?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 9,
            name: "Dispensadores Premium",
            price: 129.99,
            imageUrl: "https://images.unsplash.com/photo-1714068691210-073dc52c6c1d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 10,
            name: "Concentrado Premium",
            price: 179.99,
            imageUrl: "https://images.unsplash.com/photo-1647350299221-531e12924a0d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 11,
            name: "Collares",
            price: 69.99,
            imageUrl: "https://images.unsplash.com/photo-1516748230650-de61d8b77545?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 12,
            name: "Collares Premium",
            price: 349.99,
            imageUrl: "https://images.unsplash.com/photo-1626653136079-13c09cfb2a4a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]);

    const handleBuy = (productId) => {
        console.log(`Producto comprado: ${productId}`);
        navigate(`/product/${productId}`);
    };

    const applyFilters = (filters) => {
        console.log("Filtros aplicados:", filters);
    };

    const clearFilters = () => {
        console.log("Filtros limpiados");
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center w-full mb-8">Nuestros Productos</h1>
            
            <div className="flex flex-col md:flex-row gap-6">
                {/* Filter Panel - Fixed width on desktop, full width on mobile */}
                <div className="md:w-64 w-full shrink-0">
                    <div className="sticky top-4">
                        <FilterPanel onApplyFilters={applyFilters} onClearFilters={clearFilters} />
                    </div>
                </div>
                
                {/* Product Grid - Responsive grid that adapts to available space */}
                <div className="flex-1 ml-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6">
                        {products.map((product) => (
                            <div 
                                key={product.id} 
                                className="w-full bg-white border-2 border-gray-200 rounded-xl shadow-lg 
                                         overflow-hidden transition-all duration-300 hover:shadow-xl 
                                         hover:scale-105 hover:border-yellow-400"
                            >
                                <div className="h-48 w-full bg-gray-50 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        className="w-full h-full object-cover p-2"
                                    />
                                </div>
                                <div className="p-4 flex flex-col items-center">
                                    <h2 className="text-lg font-bold text-gray-900 mb-2 text-center">{product.name}</h2>
                                    <p className="text-sm text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                                    <button
                                        className="py-2 px-6 rounded-full border-2 border-amber-600 
                                                 bg-gradient-to-r from-amber-500 to-amber-700 text-white 
                                                 font-semibold shadow-md transition-all hover:bg-amber-700 
                                                 hover:shadow-lg transform hover:-translate-y-1"
                                        onClick={() => handleBuy(product.id)}
                                    >
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
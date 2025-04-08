import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { getPetList } from "../services/petServiceApi";
import { PetList } from "../components/Pets/petList";


export const Adopciones = () => {
  const [pets, setPets] = useState([]);
  
  useEffect(() => {
    getPetList().then(data => setPets(data));
  }, []);
  
  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 p-4">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-amber-600 p-6 text-center rounded-t-xl shadow-lg">
          <h1 className="text-2xl font-bold text-white">Adopciones</h1>
          <p className="text-amber-100 mt-1">Encuentra a tu nuevo compañero</p>
        </div>
        
        <div className="bg-white p-6 rounded-b-xl shadow-xl mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pets.map((pet) => (
              <div key={pet.id} className="bg-amber-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pet.url} 
                    alt={pet.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-amber-800">{pet.name}</h3>
                    <div className="flex items-center text-sm text-amber-600">
                      <span>{pet.age}</span>
                      <span className="mx-1">•</span>
                      <span>{pet.gender}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-amber-700 mb-3">{pet.breed}</p>
                  <p className="text-sm text-amber-700 mb-4 line-clamp-2">{pet.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <button className="text-sm text-amber-600 hover:text-amber-800 font-medium flex items-center transition-colors">
                      Ver detalles
                      <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button className="py-1 px-3 border border-amber-600 rounded-lg text-xs font-medium text-amber-600 hover:bg-amber-600 hover:text-white transition-colors">
                      Adoptar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {pets.length === 0 && (
            <div className="bg-amber-50 rounded-lg p-8 text-center">
              <svg className="w-16 h-16 mx-auto text-amber-300 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-amber-800 text-lg">Cargando mascotas...</p>
              <p className="text-amber-600 mt-2">Por favor espera un momento mientras traemos a todos nuestros amigos.</p>
            </div>
          )}
          
          
        </div>
      </div>
    </section>
  );
};

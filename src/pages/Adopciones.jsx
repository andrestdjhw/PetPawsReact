import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { PetList } from "../components/Pets/petList";


export const Adopciones = () => {
  const [pets, setPets] = useState([]);

  const navigateTo = useNavigate();
  


  const viewPetdDetail = (nombre)=>{
    const url = `mascota/${nombre}`;
    navigateTo(url);
}
  
  return (
    <section className="adopciones">
      <div className="container">
        <div className="header">
          <h1 >Adopciones</h1>
          <p >Encuentra a tu nuevo compañero</p>
        </div>
        
        <div className="content">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <PetList pets={pets}  clickHandler={ viewPetdDetail}  />
          </div>
          
         {/*  {pets.length === 0 && (
            <div className="bg-amber-50 rounded-lg p-8 text-center">
              <svg className="w-16 h-16 mx-auto text-amber-300 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-amber-800 text-lg">Cargando mascotas...</p>
              <p className="text-amber-600 mt-2">Por favor espera un momento mientras traemos a todos nuestros amigos.</p>
            </div>
          )}
           */}
          
        </div>
      </div>
    </section>
  );
};

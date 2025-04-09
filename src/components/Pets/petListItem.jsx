import { useState } from "react"
import { useNavigate } from "react-router";

export const PetListItem = ({ name, img, tipo, raza, onClickHandler = (name) => { } }) => {
  const navigate = useNavigate();
  return (
    <div key={name} className="mascotas">
      <div className="img-content">
        <img
          src={img}
          alt={name}
        />
      </div>

      <div className="pet-body">
        <div className="content">
          <h3 >{name} . {tipo}</h3>
          <div className="raza">
            <span>{raza}</span>
          </div>
        </div>

        <div className="btn-section">
          <button onClick={() => { onClickHandler(name); }}
            className="detalle">
            Ver detalles
            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <button onClick={() => navigate('/adopcion-form')} className="adoptar">
            Adoptar
          </button>
        </div>
      </div>
    </div>
  );
};
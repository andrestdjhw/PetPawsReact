export const PetListItem = ({ name,  img, tipo, raza, onClickHandler= (name)=>{} }) => {
    return (
        <div key={name} className="bg-amber-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={img} 
                  alt={name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2">
                  
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-amber-800">{name} . {tipo}</h3>
                  <div className="flex items-center text-sm text-amber-600">
                    <span>{raza}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <button onClick={()=>{onClickHandler(cod);}}
                  className="text-sm text-amber-600 hover:text-amber-800 font-medium flex items-center transition-colors">
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
    );
};
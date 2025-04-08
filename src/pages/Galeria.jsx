import { useState } from "react";
import { useNavigate } from "react-router";


export const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    { id: 1, url: "https://picsum.photos/id/837/600/400", alt: "Imagen 1" },
    { id: 2, url: "https://picsum.photos/id/659/600/400", alt: "Imagen 2" },
    { id: 3, url: "https://picsum.photos/id/237/600/400", alt: "Imagen 3" },
    { id: 4, url: "https://picsum.photos/id/169/600/400", alt: "Imagen 4" },
    { id: 5, url: "https://picsum.photos/id/40/600/400", alt: "Imagen 5" },
    { id: 6, url: "https://picsum.photos/id/200/600/400", alt: "Imagen 6" },
    { id: 7, url: "https://picsum.photos/id/219/600/400", alt: "Imagen 7" },
    { id: 8, url: "https://picsum.photos/id/244/600/400", alt: "Imagen 8" },
    { id: 9, url: "https://picsum.photos/id/258/600/400", alt: "Imagen 9" },
    { id: 10, url: "https://picsum.photos/id/582/600/400", alt: "Imagen 10" },
    { id: 11, url: "https://picsum.photos/id/584/600/400", alt: "Imagen 11" },
    { id: 12, url: "https://picsum.photos/id/699/600/400", alt: "Imagen 12" }
  ];
  
  const openModal = (image) => {
    setSelectedImage(image);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };
  
  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 to-amber-100 p-4">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-amber-600 p-6 text-center rounded-t-xl shadow-lg">
          <h1 className="text-2xl font-bold text-white">Galería de Imágenes</h1>
          <p className="text-amber-100 mt-1">Nuestra colección de fotografías</p>
        </div>
        
        <div className="bg-white p-6 rounded-b-xl shadow-xl mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div 
                key={image.id} 
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-amber-200"
                onClick={() => openModal(image)}
              >
                <div className="relative">
                  <img 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" 
                    src={image.url}
                    alt={image.alt}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-3 font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {selectedImage && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full max-h-screen">
            <div className="bg-amber-600 p-4 flex justify-between items-center">
              <h3 className="text-lg font-medium text-white">{selectedImage.alt}</h3>
              <button 
                onClick={closeModal}
                className="text-amber-100 hover:text-white focus:outline-none transition-colors"
              >
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg shadow-md"
              />
              <div className="mt-4 text-amber-800">
                <h4 className="font-medium text-lg">{selectedImage.alt}</h4>
                <p className="text-amber-600 mt-1">Imagen ID: {selectedImage.id}</p>
              </div>
            </div>
            <div className="bg-amber-50 p-4 border-t border-amber-200 flex justify-end">
              <button 
                onClick={closeModal}
                className="py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Galeria;
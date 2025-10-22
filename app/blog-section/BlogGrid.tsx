import React from 'react';
import baco from '../../public/clients/baco.jpeg';
import inmo from '../../public/clients/inmo.jpeg';
// Array de datos de clientes de ejemplo con URLs de placeholder.
// Puedes reemplazar estas URLs con las rutas reales de las fotos de tus clientes.
const clientPhotos = [
  { id: 1, alt: "Cliente 1", imageUrl: baco.src },
  { id: 2, alt: "Cliente 2", imageUrl: inmo.src },
  { id: 3, alt: "Cliente 3", imageUrl: "https://placehold.co/600x400/1f2937/ffffff?text=Cliente+3" },
  { id: 4, alt: "Cliente 4", imageUrl: "https://placehold.co/600x400/1f2937/ffffff?text=Cliente+4" },
  { id: 5, alt: "Cliente 5", imageUrl: "https://placehold.co/600x400/1f2937/ffffff?text=Cliente+5" },
  { id: 6, alt: "Cliente 6", imageUrl: "https://placehold.co/600x400/1f2937/ffffff?text=Cliente+6" },
];

const Blog = () => {
  return (
    <section className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16 lg:pb-32">
      {/* Contenedor del Título y Descripción */} 
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10 text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        <h2
          className={`flex max-w-[500px] pr-5 flex-col items-start text-left font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,10vw,155.04px)]`}
        >
          socios y clientes
        </h2>
        <p
          className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]"
        >
          Un vistazo a las marcas y proyectos con los que hemos colaborado.
        </p>
      </div>
      
      {/* Contenedor de la Galería de Clientes (Reemplazo del Grid del Blog) */}
      <div className="grid w-[90%] max-w-[1200px] grid-cols-1 gap-6 place-content-center place-items-center sm:grid-cols-2 md:grid-cols-3">
        {clientPhotos.map((client) => (
          <div 
            key={client.id}
            className="w-full h-full transform transition duration-500 ease-in-out hover:scale-[1.03] 
                       bg-[#1d1d23] rounded-xl shadow-2xl overflow-hidden cursor-pointer group"
          >
            <img
              src={client.imageUrl}
              alt={client.alt}
              // Clases para que la imagen se vea bien y sea responsiva
              className="w-full h-auto object-cover rounded-t-xl"
            />
            {/* Pequeña tarjeta con el nombre del cliente */}
            <div className="p-4">
                <h3 className="text-xl font-bold text-[#e4ded7]">{client.alt}</h3>
                <p className="text-sm text-[#7e8790] mt-1">Proyecto destacado</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;

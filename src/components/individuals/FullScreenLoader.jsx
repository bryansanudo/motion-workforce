import React, { useEffect, useState } from "react";

const FullScreenLoader = ({ gifSrc, duration }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos el tiempo de carga con setTimeout
    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, duration);

    return () => {
      clearTimeout(loaderTimeout); // Limpiamos el timeout si el componente se desmonta antes de que termine la carga
    };
  }, [duration]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 hero-overlay bg-black opacity-50  ${
        loading ? "" : "hidden"
      }`}
    >
      <img src={gifSrc} alt="Loading" />
    </div>
  );
};

export default FullScreenLoader;

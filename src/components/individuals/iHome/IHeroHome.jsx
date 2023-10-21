import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const messages = [
  "The Better FREE Way To Connect With The Right Manpower For Your Business",
  "Unlock Your American Dream: Choose the EB-3 Visa Path Today!",
  "Why Settle for Less? Elevate Your Future with an EB-3 Visa.",
  "Open Doors in the U.S. – Make the EB-3 Visa Your Key.",
  "Step into a World of Opportunities: Get Your EB-3 Visa Now.",
  "EB-3 Visa: Your Gateway to Permanent Residency and Beyond.",
  "Discover the Fastest Path to Your American Life with an EB-3 Visa.",
  "Chart Your Course to Success: The EB-3 Visa Awaits.",
  "Be Part of America's Growth Story with an EB-3 Visa.",
  "Achieve the Unthinkable: U.S. Residency Through the EB-3 Visa.",
  "Your Journey to a Better Future Begins with an EB-3 Visa.",
  // Agrega más mensajes según tus necesidades
];

const IHeroHome = () => {
  const [randomMessage, setRandomMessage] = useState("");

  useEffect(() => {
    // Genera un índice aleatorio para seleccionar un mensaje de la lista
    const randomIndex = Math.floor(Math.random() * messages.length);
    setRandomMessage(messages[randomIndex]);
  }, []);

  return (
    <>
      <div
        className="hero min-h-[100vh]"
        style={{
          backgroundImage:
            "url(https://static.wixstatic.com/media/863055_797b59f1342445a19f07a0cee65d9812~mv2.jpg/v1/fill/w_1652,h_671,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/863055_797b59f1342445a19f07a0cee65d9812~mv2.jpg)",
        }}
      >
        <div className="hero-overlay bg-black opacity-50" />
        <div className="hero-content text-center text-white">
          <div className="max-w-5xl">
            <h1 className="my-5 lg:text-5xl md:text-3xl text-2xl font-bold tracking-wider">
              {randomMessage}
            </h1>

            <Link to="teach me" smooth duration={500}>
              <button className="btn hover:scale-105 capitalize btn-primary tracking-wider">
                Yes, teach me how!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default IHeroHome;

import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";

const messages = [
  "Harness Global Talent: The EB-3 Program connects you to an untapped pool of motivated workers.",
  "Cut Recruitment Costs: With EB-3, access a cost-effective pipeline to diligent, job-ready labor.",
  "Solve Labor Shortages: Where local talent falls short, EB-3 provides a dependable source of labor.",
  "Gain Competitive Advantage: Use EB-3 to bring in labor skills that are rare or lacking in the domestic workforce.",
  "Diversify Your Team: EB-3 introduces cultural richness and different perspectives into your workforce.",
  "Optimized Retention: Workers under EB-3 often demonstrate higher commitment levels, staying longer with your company.",
  "Fast-Track Hiring: The EB-3 Program offers a streamlined process to expedite your recruitment timeline.",
  " Minimize Training Costs: Many EB-3 candidates already possess the basic skills required, reducing your onboarding overheads. ",
  "Compliance Confidence: The EB-3 Program ensures all legal steps are covered for permanent residency, reducing your legal risk.",
  "Future-Proof Your Business: Secure a steady, reliable workforce for tomorrow by hiring through EB-3 today.",
  // Agrega más mensajes según tus necesidades
];

const CHeroHome = () => {
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
          backgroundImage: "url(/companies-home.jpg)",
        }}
      >
        <div className="hero-overlay bg-black opacity-50" />
        <div className="hero-content text-center text-white">
          <div className="max-w-5xl">
            <h1 className="my-5 lg:text-5xl md:text-3xl text-2xl font-bold">
              {randomMessage}
            </h1>

            <Link to="teach me s" smooth duration={500}>
              <button className="btn hover:scale-105 btn-secondary capitalize tracking-wider">
                Yes, teach me how!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CHeroHome;

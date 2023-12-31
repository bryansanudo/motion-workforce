import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const IHeroHome = ({ language }) => {
  const messages = {
    en: [
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
    ],
    es: [
      "Desbloquee su sueño americano: Elija hoy la vía del visado EB-3",
      "¿Por qué conformarse con menos? Eleve su futuro con un visado EB-3",
      "Puertas abiertas en EE.UU.: haga del visado EB-3 su llave",
      "Entre en un mundo de oportunidades: Obtenga Su Visa EB-3 Ahora",
      "Visa EB-3: Su Puerta a la Residencia Permanente y Más Allá",
      "Descubra el Camino más Rápido a su Vida Americana con una Visa EB-3",
      "Trace su curso hacia el éxito: El visado EB-3 le espera",
      "Forme parte de la historia de crecimiento de Estados Unidos con un visado EB-3",
      "Logre lo impensable: La residencia en EE.UU. a través del visado EB-3",
      "Su viaje hacia un futuro mejor comienza con un visado EB-3",
    ],
    por: [
      "Desbloqueie o seu sonho americano: Escolha o caminho do visto EB-3 hoje!",
      "Porquê contentar-se com menos? Eleve o seu futuro com um visto EB-3.",
      "Abra Portas nos EUA - Faça do Visto EB-3 a sua Chave.",
      "Entre num mundo de oportunidades: Obtenha já o seu visto EB-3.",
      "Visto EB-3: A sua porta de entrada para a residência permanente e mais além.",
      "Descubra o caminho mais rápido para a sua vida americana com um visto EB-3.",
      "Trace a sua rota para o sucesso: O visto EB-3 aguarda-o.",
      "Faça parte da história de crescimento da América com um visto EB-3.",
      "Alcance o impensável: Residência nos EUA através do Visto EB-3.",
      "A sua viagem para um futuro melhor começa com um visto EB-3",
    ],
    fr: [
      "Débloquez votre rêve américain : Choisissez la voie du visa EB-3 dès aujourd'hui",
      "Pourquoi se contenter de moins ? Améliorez votre avenir avec un visa EB-3",
      "Ouvrez les portes aux États-Unis - Faites du visa EB-3 votre clé",

      "Entrez dans un monde d'opportunités : Obtenez votre visa EB-3 maintenant",
      "Visa EB-3 : Votre porte d'entrée vers la résidence permanente et au-delà",
      "Découvrez le chemin le plus rapide vers votre vie américaine avec un visa EB-3",
      "Tracez votre route vers le succès : Le visa EB-3 vous attend",
      "Faites partie de l'histoire de la croissance de l'Amérique avec un visa EB-3",
      "Réalisez l'impensable : La résidence aux États-Unis grâce au visa EB-3",
      "Votre voyage vers un avenir meilleur commence avec un visa EB-3",
    ],
  };

  const btn = {
    en: {
      title: "Check if I'm elegible",
    },
    es: {
      title: "Comprobar si soy admisible",
    },
    por: {
      title: "Verificar se sou elegível",
    },
    fr: {
      title: "Vérifier si je suis éligible",
    },
  };
  const btnContent = btn[language];
  const [randomMessage, setRandomMessage] = useState("");

  useEffect(() => {
    const messagesForLanguage = messages[language];
    if (messagesForLanguage) {
      const randomIndex = Math.floor(
        Math.random() * messagesForLanguage.length
      );
      setRandomMessage(messagesForLanguage[randomIndex]);
    }
  }, [language]);

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

            <a
              href="https://form.jotform.com/EB3_Recruiter/eligibility-eb3wfs"
              target="_blank"
            >
              <button className="btn hover:scale-105 capitalize btn-primary tracking-wider">
                {btnContent.title}
              </button>
            </a>
          </div>
          <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center cursor-pointer">
            <Link
              to="teach me"
              smooth
              duration={500}
              className="hidden sm:flex"
            >
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-white mb-1"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default IHeroHome;

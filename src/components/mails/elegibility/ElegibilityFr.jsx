import Section from "@/components/individuals/ISection";
import esImg from "@/assets/icons/es.png";
import porImg from "@/assets/icons/por.png";
import frImg from "@/assets/icons/fr.png";
import enImg from "@/assets/icons/en.png";
import { NavLink } from "react-router-dom";

import { styles } from "@/styles";

const ElegibilityFr = () => {
  const activeLink = ({ isActive }) =>
    isActive ? " relative border border-primary rounded-full p-1" : "";

  const links = [
    {
      id: 1,
      link: "/mails/elegibility/pt",
      img: porImg,
    },
    {
      id: 2,
      link: "/mails/elegibility/es",
      img: esImg,
    },
    {
      id: 3,
      link: "/mails/elegibility/fr",
      img: frImg,
    },
    {
      id: 4,
      link: "/mails/elegibility/en",
      img: enImg,
    },
  ];
  return (
    <>
      <Section>
        <div className="mt-10 mx-10">
          <p className={`${styles.sectionText} mb-6 text-xl`}>
            Nous avons remarqué que vous êtes intéressé par le programme de la
            Carte Verte EB-3 en 2020/2021. Compte tenu de l'importance de ce
            programme pour votre avenir, nous vous proposons une offre
            exclusive,{" "}
            <span className="font-bold">
              pour une durée limitée, adaptée uniquement pour vous.
            </span>
          </p>
          <p className={`${styles.sectionText} mb-6 text-xl`}>
            Nous sommes heureux de vous offrir la possibilité de demander un{" "}
            <span className="font-bold">programme de Carte Verte EB-3</span>{" "}
            pour seulement 35% du tarif typique du marché qui vous a été coté en
            2020/2021.
          </p>
          <p className={`${styles.sectionText} mb-6 text-xl font-bold`}>
            Il s'agit d'une opportunité sans précédent pour garantir votre
            avenir aux États-Unis, et nous avons conçu cette offre en pensant à
            des candidats comme vous.
          </p>
          <p className={`${styles.sectionText} text-lg mb-10`}>
            Pour savoir si vous pouvez bénéficier de cette offre exceptionnelle,
            remplissez le formulaire ci-dessous, disponible en anglais,
            espagnol, portugais et français. Si vous remplissez les conditions
            requises, vous pourrez prendre rendez-vous avec nous pour commencer
            votre parcours vers la résidence permanente. commencer votre
            parcours vers la résidence permanente.
          </p>
          <a
            href="https://form.jotform.com/EB3_Recruiter/eligibility-eb3wfs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary btn-lg mb-6 capitalize text-xl">
              Vérifier mon éligibilité
            </button>
          </a>
          <p className={`${styles.sectionText} mt-6 mb-10 text-lg font-bold`}>
            Nous sommes là pour vous aider à chaque étape de ce voyage
            important.
          </p>
          <div className="flex items-center justify-center my-10 gap-10">
            {links.map(({ id, link, img }) => (
              <NavLink key={id} to={link} className={activeLink}>
                <img src={img} className="w-6" alt="" />
              </NavLink>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default ElegibilityFr;

import Section from "@/components/individuals/ISection";
import esImg from "@/assets/icons/es.png";
import porImg from "@/assets/icons/por.png";
import frImg from "@/assets/icons/fr.png";
import enImg from "@/assets/icons/en.png";
import { NavLink } from "react-router-dom";
import { styles } from "@/styles";

const ElegibilityEs = () => {
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
            Nos hemos dado cuenta de que estuvo interesado en el{" "}
            <span className="font-bold">programa de la Green Card EB-3 </span>
            en 2020/2021. Entendiendo la importancia de este programa para su
            futuro, estamos llegando con una oferta exclusiva,{" "}
            <span className="font-bold">
              por tiempo limitado adaptada sólo para usted.
            </span>
          </p>
          <p className={`${styles.sectionText} mb-6 text-xl`}>
            Nos complace ofrecerle la oportunidad de solicitar un{" "}
            <span className="font-bold">programa de Green Card EB3</span> a solo
            el 35% de la tarifa típica del mercado que le hayan cotizado en
            2020/2021.
          </p>
          <p className={`${styles.sectionText} mb-6 text-xl font-bold`}>
            Esta es una oportunidad sin precedentes para asegurar su futuro en
            los Estados Unidos, y hemos diseñado esta oferta con aspirantes como
            usted en mente.
          </p>
          <p className={`${styles.sectionText} text-xl mb-10`}>
            Para saber si cumples los requisitos para esta increíble oferta,
            rellena el siguiente formulario, disponible en Inglés, Español,
            Portugués y Frances. Si califica, podrá programar una cita con
            nosotros para iniciar su camino hacia la Residencia Permanente.
          </p>

          <a
            href="https://form.jotform.com/EB3_Recruiter/eligibility-eb3wfs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary btn-lg mb-6  capitalize text-xl">
              comprobar mi elegibilidad
            </button>
          </a>
          <p className={`${styles.sectionText} mt-6 mb-10 text-xl font-bold`}>
            Estamos aquí para ayudarle en cada paso de este importante viaje.
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

export default ElegibilityEs;

import Section from "@/components/individuals/ISection";
import esImg from "@/assets/icons/es.png";
import porImg from "@/assets/icons/por.png";
import frImg from "@/assets/icons/fr.png";
import enImg from "@/assets/icons/en.png";
import { NavLink } from "react-router-dom";

import { styles } from "@/styles";

const ElegibilityPt = () => {
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
            Notamos que você está interessado no programa do Green Card EB-3 em
            2020/2021. Compreendendo a importância deste programa para o seu
            futuro, estamos chegando com uma oferta exclusiva,{" "}
            <span className="font-bold">
              por tempo limitado, adaptada apenas para você.
            </span>
          </p>
          <p className={`${styles.sectionText} mb-6 text-xl`}>
            Temos o prazer de lhe oferecer a oportunidade de solicitar um{" "}
            <span className="font-bold">programa de Green Card EB-3</span> por
            apenas 35% da taxa de mercado que lhe foi cotada em 2020/2021.
          </p>
          <p className={`${styles.sectionText} mb-6 text-xl font-bold`}>
            Esta é uma oportunidade sem precedentes para garantir o seu futuro
            nos Estados Unidos, e projetamos esta oferta com candidatos como
            você em mente.
          </p>
          <p className={`${styles.sectionText} text-xl mb-10`}>
            Para saber se tem direito a esta fantástica oferta, preencha o
            formulário abaixo, disponível em iInglês, Espanhol, Português e
            Francês. Se se qualificar, poderá marcar uma consulta connosco para
            iniciar o seu iniciar o seu caminho para a Residência Permanente.
          </p>
          <a
            href="https://form.jotform.com/EB3_Recruiter/eligibility-eb3wfs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary btn-lg mb-6 capitalize text-xl">
              Verificar minha elegibilidade
            </button>
          </a>
          <p className={`${styles.sectionText} mt-6 mb-10 text-xl font-bold`}>
            Estamos aqui para ajudá-lo em cada passo desta jornada importante.
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

export default ElegibilityPt;

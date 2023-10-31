import React from "react";
import logoImg from "@/assets/logo.png";
import { motion } from "framer-motion";
import { staggerContainer, slideIn, zoomIn } from "@/utils/motion";
import { Link } from "react-router-dom";

const IFooter = ({ language }) => {
  const footer = {
    en: {
      p: "EB-3 Workforce Solutions is not a law firm and does not provide legal advice. Your communication with EB-3 Workforce Solutions does not create an attorney-client relationship and is not protected by attorney-client privilege.",
      h1: "QUICK LINKS",
      l1: "Home",
      l2: "About",
      l3: "Services",
      l4: "Resources",
      l5: "Contact",
      l6: "Vacancies",
      h2: "Contact Us",
      h3: "Legal",
      u1: "Copyright © 2023 All Right Reserved",
      u2: "Privacy policy",
      u3: "Terms of Services",
    },
    es: {
      p: "EB-3 Workforce Solutions no es un bufete de abogados y no proporciona asesoramiento jurídico. Su comunicación con EB-3 Workforce Solutions no crea una relación abogado-cliente y no está protegida por el privilegio abogado-cliente",
      h1: "ENLACES RÁPIDOS",
      l1: "Inicio",
      l2: "Acerca de",
      l3: "Servicios",
      l4: "Recursos",
      l5: "Contacto",
      l6: "Vacantes",
      h2: "Contacto",
      h3: "Aviso legal",
      u1: "Copyright © 2023 Todos los derechos reservados",
      u2: "Política de privacidad",
      u3: "Condiciones del servicio",
    },
    por: {
      p: "A EB-3 Workforce Solutions não é um escritório de advogados e não presta aconselhamento jurídico. A sua comunicação com a EB-3 Workforce Solutions não cria uma relação advogado-cliente e não está protegida pelo privilégio advogado-cliente.",
      h1: "LINKS RÁPIDOS",
      l1: "Início",
      l2: "Sobre",
      l3: "Serviços",
      l4: "Recursos",
      l5: "Contacto",
      l6: "Vagas",
      h2: "Contacte-nos",
      h3: "Legal",
      u1: "Direitos de autor © 2023 Todos os direitos reservados",
      u2: "Política de privacidade",
      u3: "Termos de serviços",
    },
    fr: {
      p: "A EB-3 Workforce Solutions não é um escritório de advogados e não presta aconselhamento jurídico. A sua comunicação com a EB-3 Workforce Solutions não cria uma relação advogado-cliente e não está protegida pelo privilégio advogado-cliente.",
      h1: "LINKS RÁPIDOS",
      l1: "Início",
      l2: "Sobre",
      l3: "Serviços",
      l4: "Recursos",
      l5: "Contacto",
      l6: "Vagas",
      h2: "Contacte-nos",
      h3: "Legal",
      u1: "Direitos de autor © 2023 Todos os direitos reservados",
      u2: "Política de privacidade",
      u3: "Termos de serviços",
    },
  };
  const footerContent = footer[language];

  return (
    <motion.div
    /* variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }} */
    >
      <motion.footer
        /* variants={slideIn("left", "tween", 0.2, 1)} */

        className="footer p-10 bg-base-200 text-base-content"
      >
        <aside>
          <img
            src={logoImg}
            width={300}
            height={300}
            alt="logo footer"
            className="rounded-3xl  object-contain  "
          />
          <p className="tracking-wider text-left max-w-[550px]">
            {footerContent.p}
          </p>
        </aside>

        <motion.nav variants={zoomIn(0, 1)}>
          <header className="footer-title text-black font-extrabold">
            {footerContent.h1}
          </header>
          <a className="link link-hover">{footerContent.l1}</a>
          <a className="link link-hover">{footerContent.l2}</a>
          <a className="link link-hover">{footerContent.l3}</a>
          <a className="link link-hover">{footerContent.l4}</a>
          <a className="link link-hover">{footerContent.l5}</a>
          <a className="link link-hover">{footerContent.l6}</a>
        </motion.nav>
        <motion.nav variants={zoomIn(0.5, 1)}>
          <header className="footer-title text-black font-extrabold">
            {footerContent.h2}
          </header>
          <p className="">(305) 564-1311</p>
          <p className="">recruiter@eb3wfs.com</p>
          <p className="">EB3WFS LLC</p>
          <p className="">777 Brickell Avenue Suite 500</p>
          <p className="">Miami, FL 33131</p>
        </motion.nav>
        <motion.nav variants={zoomIn(1, 1)}>
          <header className="footer-title text-black font-extrabold">
            {footerContent.h3}
          </header>
          <div className="">{footerContent.u1}</div>
          <Link to="/privacy-policy">
            <div className="link link-hover">{footerContent.u2}</div>
          </Link>
          <Link to="/terms-services">
            <div className="link link-hover">{footerContent.u3}</div>
          </Link>
        </motion.nav>
      </motion.footer>
    </motion.div>
  );
};

export default IFooter;

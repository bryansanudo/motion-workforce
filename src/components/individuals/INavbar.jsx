import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import enImg from "@/assets/icons/en.png";
import esImg from "@/assets/icons/es.png";
import porImg from "@/assets/icons/por.png";
import frImg from "@/assets/icons/fr.png";
import giphy from "@/assets/icons/giphy.gif";
import logo from "@/assets/logo.png";

const INavbar = ({ setLanguage, language }) => {
  const navbar = {
    en: {
      home: "home",
      about: "about",
      services: "services",
      resources: "resources",
      contact: "contact",
      vacancies: "vacancies",
      language: "Language",
      looking: "Looking For Employees",
    },
    es: {
      home: "Inicio",
      about: "acerca de",
      services: "servicios",
      resources: "recursos",
      contact: "contacto",
      vacancies: "vacantes",
      language: "Idioma",
      looking: "En busca de Empleados",
    },
    por: {
      home: "casa",
      about: "sobre",
      services: "serviços",
      resources: "recursos",
      contact: "contacto",
      vacancies: "vagas",
      language: "língua",
      looking: "à procura de empregados",
    },
    fr: {
      home: "Accueil",
      about: "A propos de",
      services: "Services",
      resources: "Ressources",
      contact: "Contact",
      vacancies: "Offres d'emploi",
      language: "langue",
      looking: "à la recherche d'employés",
    },
  };
  const navbarContent = navbar[language];

  const activeLink = ({ isActive }) =>
    isActive
      ? " relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-primary"
      : "";

  const [isMenuShown, setIsMenuShown] = useState(false);

  const links = [
    {
      id: 1,
      link: "/individuals/home",
      name: navbarContent.home,
    },
    {
      id: 2,
      link: "/individuals/about",
      name: navbarContent.about,
    },
    {
      id: 3,
      link: "/individuals/services",
      name: navbarContent.services,
    },
    {
      id: 5,
      link: "/individuals/resources",
      name: navbarContent.resources,
    },
    {
      id: 6,
      link: "/individuals/contact",
      name: navbarContent.contact,
    },
    {
      id: 7,
      link: "/individuals/vacancies",
      name: navbarContent.vacancies,
    },
  ];

  const [showLoader, setShowLoader] = useState(false);
  const [iconLoader, setIconLoader] = useState(giphy);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  let languageIcon;

  if (language === "en") {
    languageIcon = enImg;
  } else if (language === "es") {
    languageIcon = esImg;
  } else if (language === "por") {
    languageIcon = porImg;
  } else if (language === "fr") {
    languageIcon = frImg;
  }

  return (
    <>
      <div className="fixed w-full h-24 bg-gray-400 text-white z-20">
        <div className="flex justify-between gap-4 items-center lg:mx-10 px-3 h-full">
          <Link to="/individuals/home">
            <img
              src={logo}
              alt="logo navbar"
              className="object-contain hidden lg:block"
              width={250}
              height={300}
            />
          </Link>

          <div className="hidden lg:flex items-center mr-24 gap-20">
            <ul className="flex gap-6">
              {links.map(({ id, link, name }) => (
                <NavLink key={id} to={link} className={activeLink}>
                  <li className="capitalize duration-300 hover:text-primary hover:scale-110 cursor-pointer">
                    {name}
                  </li>
                </NavLink>
              ))}
            </ul>
          </div>
          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer"
          >
            {isMenuShown ? <FaTimes size={22} /> : <FaBars size={22} />}
          </div>
          <img
            src="/favicon.png"
            className="h-10 object-contain lg:hidden block"
          />
          <Link to="/companies/home">
            <button className="btn btn-secondary text-[12px] p-2 btn-outline capitalize hover:scale-105 duration-700">
              {navbarContent.looking}
            </button>
          </Link>
          <div className="flex  gap-2 md:flex-row items-center justify-center">
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="text-black rounded-xl p-1 "
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="por">Portuguese</option>
              <option value="fr">Frances</option>
            </select>
            <img src={languageIcon} className="w-6 h-6" alt="" />
          </div>
        </div>
      </div>
      <div
        className={`fixed w-full text-white z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown ? "top-16 rounded-b-2xl bg-gray-400 " : "top-[-100%]"
        }`}
      >
        <ul className="flex flex-col">
          {links.map(({ id, link, name }) => (
            <NavLink
              onClick={() => setIsMenuShown(!isMenuShown)}
              to={link}
              key={id}
            >
              <li className="px-4 capitalize text-left duration-300 hover:text-white hover:scale-110 cursor-pointer">
                {name}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
};

export default INavbar;

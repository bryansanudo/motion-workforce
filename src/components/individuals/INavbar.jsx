import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import enImg from "@/assets/icons/en.png";
import esImg from "@/assets/icons/es.png";
import porImg from "@/assets/icons/por.png";
import frImg from "@/assets/icons/fr.png";
import giphy from "@/assets/icons/giphy.gif";
import logo from "@/assets/logo.png";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

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
      looking: "Looking For Employees?",
    },
    es: {
      home: "Inicio",
      about: "acerca de",
      services: "servicios",
      resources: "recursos",
      contact: "contacto",
      vacancies: "vacantes",
      language: "Idioma",
      looking: "¿Buscando Empleados?",
    },
    por: {
      home: "casa",
      about: "sobre",
      services: "serviços",
      resources: "recursos",
      contact: "contacto",
      vacancies: "vagas",
      language: "língua",
      looking: "à procura de empregados?",
    },
    fr: {
      home: "Accueil",
      about: "A propos de",
      services: "Services",
      resources: "Ressources",
      contact: "Contact",
      vacancies: "Offres d'emploi",
      language: "langue",
      looking: "à la recherche d'employés?",
    },
  };
  const navbarContent = navbar[language];

  const menu = {
    en: {
      en: "English",
      es: "Spanish",
      por: "Português",
      fr: "French",
    },
    es: {
      en: "Ingles",
      es: "Español",
      por: "Português",
      fr: "Frances",
    },
    por: {
      en: "Inglês",
      es: "Espanhol",
      por: "Português",
      fr: "Francês",
    },
    fr: {
      en: "Anglais",
      es: "Espagnol",
      por: "Português",
      fr: "Français",
    },
  };
  const menuContent = menu[language];

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
  const [dropdown, setDropdown] = useState(true);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const closeMenu = () => {
    // Encuentra el elemento del menú de idiomas
    const dropdown = document.querySelector(".dropdown");

    if (dropdown) {
      // Elimina el atributo 'open' para cerrar el menú
      dropdown.removeAttribute("open");
    }
  };

  const en = () => {
    setLanguage("en");
    setDropdown(true);
  };

  const es = () => {
    setLanguage("es");
    setDropdown(true);
  };

  const por = () => {
    setLanguage("por");
    setDropdown(true);
  };

  const fr = () => {
    setLanguage("fr");
    setDropdown(true);
  };

  /*   const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  }; */

  let languageIcon;
  let languageText;

  if (language === "en") {
    languageIcon = enImg;
    languageText = "EN";
  } else if (language === "es") {
    languageIcon = esImg;
    languageText = "ES";
  } else if (language === "por") {
    languageIcon = porImg;
    languageText = "PT";
  } else if (language === "fr") {
    languageIcon = frImg;
    languageText = "FR";
  }

  return (
    <>
      <div className="fixed w-full h-24 bg-gray-400 text-white z-20">
        <div className="flex justify-between gap-[6px] items-center lg:mx-10   h-full">
          <Link to="/individuals/home">
            <img
              src={logo}
              alt="logo navbar"
              className="object-contain hidden lg:block"
              width={250}
              height={300}
            />
          </Link>

          {/* <div className="hidden lg:flex items-center mr-24 gap-20">
            <ul className="flex gap-6">
              {links.map(({ id, link, name }) => (
                <NavLink key={id} to={link} className={activeLink}>
                  <li className="capitalize duration-300 hover:text-primary hover:scale-110 cursor-pointer">
                    {name}
                  </li>
                </NavLink>
              ))}
            </ul>
          </div> */}
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
          <Link to="/individuals/companies">
            <button className="btn btn-secondary text-[12px] p-2 capitalize hover:scale-105 duration-700 mr-4 hover:animate-pulse">
              {navbarContent.looking}
            </button>
          </Link>
          <Link to="/individuals/companies">
            <button className="btn btn-secondary text-[12px] p-2 capitalize  duration-700 mr-4 hover:animate-bounce">
              {navbarContent.looking}
            </button>
          </Link>
          <Link to="/individuals/companies">
            <button className="btn btn-secondary text-[12px] p-2 capitalize hover:scale-105 duration-700 mr-4 hover:bg-gradient-to-r hover:to-secondary hover:from-gray-500">
              {navbarContent.looking}
            </button>
          </Link>
          <Link to="/individuals/companies">
            <button className="btn btn-secondary text-[12px] p-2 capitalize hover:scale-105 duration-700 mr-4 hover:bg-gradient-to-r hover:to-secondary hover:from-primary">
              {navbarContent.looking}
            </button>
          </Link>

          {/* <div className="flex  gap-2 md:flex-row items-center justify-center">
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
            
          </div> */}
          <details className="dropdown dropdown-end ">
            <summary
              onClick={handleDropdown}
              className="uppercase font-bold flex  items-center justify-center gap-1 cursor-pointer"
            >
              {languageText}
              <img src={languageIcon} className="w-6 h-6" alt="" />
              {dropdown ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
            </summary>

            <ul className="flex flex-col items-start dropdown-content text-black  bg-base-100 rounded-box w-36 ">
              <div className="w-full">
                <div
                  onClick={() => {
                    en();
                    closeMenu();
                  }}
                  className="flex items-center justify-start gap-4 hover:bg-primary rounded-box p-2 cursor-pointer"
                >
                  <img src={enImg} className="h-6 w-6" alt="" />
                  <button>English</button>
                </div>
              </div>
              <div className="w-full">
                <div
                  onClick={() => {
                    es();
                    closeMenu();
                  }}
                  className="flex items-center justify-start gap-4 hover:bg-primary rounded-box p-2 cursor-pointer"
                >
                  <img src={esImg} className="h-7 w-7" alt="" />
                  <button>Español</button>
                </div>
              </div>
              <div className="w-full">
                <div
                  onClick={() => {
                    por();
                    closeMenu();
                  }}
                  className="flex items-center justify-start gap-4 hover:bg-primary rounded-box p-2 cursor-pointer"
                >
                  <img src={porImg} className="h-6 w-6" alt="" />
                  <button>Português</button>
                </div>
              </div>
              <div className="w-full">
                <div
                  onClick={() => {
                    fr();
                    closeMenu();
                  }}
                  className="flex items-center justify-start gap-4 hover:bg-primary rounded-box p-2 cursor-pointer"
                >
                  <img src={frImg} className="h-6 w-6" alt="" />
                  <button>Français</button>
                </div>
              </div>
            </ul>
          </details>
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

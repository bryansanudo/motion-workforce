import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import enImg from "@/assets/icons/en.png";
import esImg from "@/assets/icons/es.png";
import porImg from "@/assets/icons/por.png";
import giphy from "@/assets/icons/giphy.gif";

import logo from "@/assets/logo.png";

import FullScreenLoader from "@/components/individuals/FullScreenLoader";

const INavbar = ({ setLanguage }) => {
  const activeLink = ({ isActive }) =>
    isActive
      ? " relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-primary"
      : ``;
  const [isMenuShown, setIsMenuShown] = useState(false);

  const links = [
    {
      id: 1,
      link: "/individuals/home",
      name: "Home",
    },
    {
      id: 2,
      link: "/individuals/about",
      name: "about",
    },
    {
      id: 3,
      link: "/individuals/services",
      name: "services",
    },
    /* {
      id: 4,
      link: "/individuals/histories",
      name: "success histories",
    }, */
    {
      id: 5,
      link: "/individuals/resources",
      name: "resources",
    },
    {
      id: 6,
      link: "/individuals/contact",
      name: "contact",
    },
    {
      id: 7,
      link: "/individuals/vacancies",
      name: "vacancies",
    },
  ];

  const [showLoader, setShowLoader] = useState(false);
  const [iconLoader, setIconLoader] = useState(giphy);

  const smoothScroll = () => {
    const currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
      window.requestAnimationFrame(smoothScroll);
      window.scrollTo(0, currentScroll - currentScroll / 35); // Ajusta la velocidad de desplazamiento dividiendo por un número mayor o menor
    }
  };

  const en = () => {
    setLanguage("en");
    /* setShowLoader(true); // Mostrar el loader al hacer clic en el botón

    // Simular una acción que toma tiempo (por ejemplo, una solicitud a una API)
    setTimeout(() => {
      setShowLoader(false); // Ocultar el loader cuando termine la acción
    }, 1000); */
    /* smoothScroll(); */
  };

  const es = () => {
    setLanguage("es");
    /*  smoothScroll(); */
  };

  const por = () => {
    setLanguage("por");
    /* smoothScroll(); */
  };

  return (
    <>
      {/* {showLoader && <FullScreenLoader gifSrc={iconLoader} duration={500} />} */}
      <div className="fixed w-full h-24 bg-gray-400 text-white z-20  ">
        <div className="flex justify-between gap-4 items-center  lg:mx-10  px-3 h-full">
          {/* <div className="hidden lg:flex items-center flex-row justify-center bg-white rounded-lg p-1 "></div> */}
          <Link to="/individuals/home">
            <img
              src={logo}
              alt="logo navbar"
              className="object-contain hidden lg:block "
              width={250}
              height={300}
            />
          </Link>
          <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
            <label tabIndex={0} className="">
              Language
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              <li>
                <button onClick={en}>
                  <img src={enImg} className="h-10 w-10" alt="usa" />
                  <span>English</span>
                </button>
              </li>
              <li>
                <button onClick={es}>
                  <img src={esImg} className="h-10 w-10 " alt="usa" />
                  <span>Español</span>
                </button>
              </li>
              <li>
                <button onClick={por}>
                  <img src={porImg} className="h-10 w-10" alt="usa" />
                  <span>Portuguese</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex items-center mr-24 gap-20">
            <ul className="flex gap-6 ">
              {links.map(({ id, link, name }) => (
                <NavLink key={id} to={link} className={activeLink}>
                  <li className=" capitalize  duration-300 hover:text-primary  hover:scale-110 cursor-pointer">
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

          {/* <div className="bg-white p-1 rounded-full block lg:hidden">
          </div> */}
          <img
            src="/favicon.png"
            className="h-10 object-contain lg:hidden block"
          />
          <Link to={"/companies/home"}>
            <button
              className="btn btn-secondary text-[12px] p-2 btn-outline capitalize hover:scale-105 duration-700 "
              /* onClick={btnCompanies} */
            >
              Looking For Employees?
            </button>
          </Link>
        </div>
      </div>

      <div
        className={`fixed w-full  text-white z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
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
              <li className="px-4 capitalize text-left duration-300 hover:text-white  hover:scale-110 cursor-pointer">
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

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

const MailNavbar = () => {
  return (
    <>
      <div className="fixed w-full h-24  text-white z-20">
        <div className="flex justify-center gap-[6px] items-center lg:mx-10   h-full">
          <a href="http://eb3wfs.com" target="_blank" rel="noopener noreferrer">
            <img
              src={logo}
              alt="logo navbar"
              className="object-contain w-60  lg:w-72  hover:scale-110 duration-700 "
              width={250}
              height={300}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default MailNavbar;

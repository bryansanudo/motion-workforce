import React from "react";
import attorney from "@/assets/icons/attorney.jpg";
import caseImg from "@/assets/icons/case.jpg";
import recruit from "@/assets/icons/recruit.jpg";
import relocation from "@/assets/icons/relocation.jpg";

import { motion } from "framer-motion";

import { staggerContainer } from "@/utils/motion";
import { fadeIn, zoomIn } from "@/utils/motion";

const FourIcons = ({ language }) => {
  const four = {
    en: {
      title1: "Recruit and vet employer sponsors",
      title2: "Case management services",
      title3: "Attorney pairing",
      title4: "Relocation services",
    },
    es: {
      title1: "Reclutar y examinar a los empleadores patrocinadores",
      title2: "Servicios de gestión de casos",
      title3: "Emparejamiento de abogados",
      title4: "Servicios de reubicación",
    },
    por: {
      title1: "Recrutar e examinar os empregadores patrocinadores",
      title2: "Serviços de gestão de processos",
      title3: "Emparelhamento de advogados",
      title4: "Serviços de relocalização",
    },
  };

  const fourContent = four[language];

  const icons = [
    {
      id: 1,
      title: fourContent.title1,
      icon: recruit,
    },
    {
      id: 2,
      title: fourContent.title2,
      icon: caseImg,
    },
    {
      id: 3,
      title: fourContent.title3,
      icon: attorney,
    },
    {
      id: 4,
      title: fourContent.title4,
      icon: relocation,
    },
  ];

  return (
    <motion.div
      /* variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }} */
      className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4  "
    >
      {icons.map(({ title, icon, id }) => (
        <motion.div
          key={id}
          variants={fadeIn("down", "spring", id * 0.5, 2)}
          className="shadow-md shadow-black rounded-3xl w-[200px] h-[200px] flex flex-col items-center justify-between py-10"
        >
          <p className="font-bold mb-4 tracking-wider">{title}</p>
          <img src={icon} className="object-contain " alt="" />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FourIcons;

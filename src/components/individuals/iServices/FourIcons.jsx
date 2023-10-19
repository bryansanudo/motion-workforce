import React from "react";
import attorney from "@/assets/attorney.webp";
import caseImg from "@/assets/case.webp";
import recruit from "@/assets/recruit.webp";
import relocation from "@/assets/relocation.webp";

import { motion } from "framer-motion";

import { staggerContainer } from "@/utils/motion";
import { fadeIn, zoomIn } from "@/utils/motion";

const FourIcons = () => {
  const icons = [
    {
      id: 1,
      title: "Recruit and vet employer sponsors",
      icon: recruit,
    },
    {
      id: 2,
      title: "Case management services",
      icon: caseImg,
    },
    {
      id: 3,
      title: "Attorney pairing",
      icon: attorney,
    },
    {
      id: 4,
      title: "Relocation services",
      icon: relocation,
    },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
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

import Section from "@/components/individuals/ISection";
import esImg from "@/assets/icons/es.png";
import porImg from "@/assets/icons/por.png";
import frImg from "@/assets/icons/fr.png";
import enImg from "@/assets/icons/en.png";

import { NavLink } from "react-router-dom";
import { styles } from "@/styles";

const ElegibilityEn = () => {
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
            We have noticed that you were interested in the{" "}
            <span className="font-bold">EB-3 Green Card program </span>
            in 2020/2021. Understanding the importance of this program for your
            future, we are coming with an exclusive offer,{" "}
            <span className="font-bold">
              for a limited time tailored just for you.
            </span>
          </p>
          <p className={`${styles.sectionText} mb-6 text-xl`}>
            We are pleased to offer you the opportunity to apply for an{" "}
            <span className="font-bold">EB-3 Green Card program</span> at only
            35% of the typical market fee you were quoted in 2020/2021.
          </p>
          <p className={`${styles.sectionText} mb-6 text-xl font-bold`}>
            This is an unprecedented opportunity to secure your future in the
            United States, and we have designed this offer with aspirants like
            you in mind.
          </p>
          <p className={`${styles.sectionText} text-xl mb-10`}>
            To find out if you meet the requirements for this incredible offer,
            fill out the form below, available in English, Spanish, Portuguese,
            and French. If you qualify, you can schedule an appointment with us
            to begin your journey to Permanent Residency.
          </p>

          <a
            href="https://form.jotform.com/EB3_Recruiter/eligibility-eb3wfs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary btn-lg mb-6  capitalize text-xl">
              check my eligibility
            </button>
          </a>
          <p className={`${styles.sectionText} mt-6 mb-10 text-xl font-bold`}>
            We are here to assist you at every step of this important journey.
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

export default ElegibilityEn;

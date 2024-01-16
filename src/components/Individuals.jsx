import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import INavbar from "@/components/individuals/INavbar";
import IFooter from "@/components/individuals/IFooter";

import IHome from "@/components/individuals/iHome/IHome";
import IAbout from "@/components/individuals/iAbout/IAbout";
import IServices from "@/components/individuals/iServices/IServices";
import IHistories from "@/components/individuals/iSuccessHistories/IHistories";
import IResources from "@/components/individuals/iResources/IResources";
import IContact from "@/components/individuals/iContact/IContact";
import IVacancies from "@/components/individuals/iVacancies/IVacancies";
import News from "@/components/individuals/News";

import CHome from "@/components/companies/cHome/CHome";
import PrivacyPolicy from "@/components/individuals/PrivacyPolicy";
import TermsOfService from "@/components/individuals/TermsOfServices";

const Individuals = ({ language, setLanguage }) => {
  return (
    <>
      <INavbar setLanguage={setLanguage} language={language} />
      <Routes>
        {/* <Route path="/" element={<IHome language={language} />} /> */}

        <Route path="*" element={<IHome language={language} />} />
        <Route path="home" element={<IHome language={language} />} />
        <Route path="companies" element={<CHome language={language} />} />
        <Route path="about" element={<IAbout language={language} />} />
        <Route path="services" element={<IServices language={language} />} />
        <Route path="histories" element={<IHistories />} />
        <Route path="resources" element={<IResources language={language} />} />
        <Route path="contact" element={<IContact language={language} />} />

        <Route path="vacancies" element={<IVacancies language={language} />} />
        <Route path="news" element={<News language={language} />} />

        <Route
          path="privacy-policy"
          element={<PrivacyPolicy language={language} />}
        />
        <Route
          path="terms-services"
          element={<TermsOfService language={language} />}
        />
      </Routes>
      <IFooter language={language} />
    </>
  );
};

export default Individuals;

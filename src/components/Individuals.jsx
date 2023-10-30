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

import CHome from "@/components/companies/cHome/CHome";
import PrivacyPolicy from "@/components/individuals/PrivacyPolicy";
import TermsOfService from "@/components/individuals/TermsOfServices";

const Individuals = ({ language, setLanguage }) => {
  return (
    <>
      <INavbar setLanguage={setLanguage} language={language} />
      <Routes>
        <Route path="/" element={<IHome language={language} />} />

        <Route
          path="/individuals/home"
          element={<IHome language={language} />}
        />
        <Route path="/companies/home" element={<CHome language={language} />} />
        <Route
          path="/individuals/about"
          element={<IAbout language={language} />}
        />
        <Route
          path="/individuals/services"
          element={<IServices language={language} />}
        />
        <Route path="/individuals/histories" element={<IHistories />} />
        <Route
          path="/individuals/resources"
          element={<IResources language={language} />}
        />
        <Route
          path="/individuals/contact"
          element={<IContact language={language} />}
        />

        <Route
          path="/individuals/vacancies"
          element={<IVacancies language={language} />}
        />

        {/*  <Route path="/individuals/vacancies/subway" element={<Subway />} />
        <Route path="/individuals/vacancies/chula" element={<Chula />} />
        <Route path="/individuals/vacancies/karst" element={<Karst />} />
        <Route path="/individuals/vacancies/kuz" element={<Kuz />} />
        <Route path="/individuals/vacancies/midnight" element={<Midnight />} />
        <Route path="/individuals/vacancies/mult" element={<Mult />} />
        <Route
          path="/individuals/vacancies/stoughton"
          element={<Stoughton />}
        />
        <Route
          path="/individuals/vacancies/wilderness"
          element={<Wilderness />}
        /> */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-services" element={<TermsOfService />} />
      </Routes>
      <IFooter language={language} />
    </>
  );
};

export default Individuals;

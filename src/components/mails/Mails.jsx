import { Route, Routes } from "react-router-dom";
import ElegibilityEs from "@/components/mails/elegibility/ElegibilityEs";
import ElegibilityPt from "@/components/mails/elegibility/ElegibilityPt";
import ElegibilityFr from "@/components/mails/elegibility/ElegibilityFr";
import MailNavbar from "@/components/mails/MailNavbar";
import { useState } from "react";

const Mails = () => {
  const [mail, setMail] = useState("en");
  return (
    <>
      <MailNavbar mail={mail} setMail={setMail} />
      <Routes>
        <Route path="elegibility/es" element={<ElegibilityEs />} />
        <Route path="elegibility/pt" element={<ElegibilityPt />} />
        <Route path="elegibility/fr" element={<ElegibilityFr />} />
      </Routes>
    </>
  );
};

export default Mails;

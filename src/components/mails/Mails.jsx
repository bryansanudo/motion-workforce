import { Route, Routes } from "react-router-dom";
import ElegibilityEs from "@/components/mails/elegibility/ElegibilityEs";
import ElegibilityPt from "@/components/mails/elegibility/ElegibilityPt";
import ElegibilityFr from "@/components/mails/elegibility/ElegibilityFr";
import MailNavbar from "@/components/mails/MailNavbar";

const Mails = () => {
  return (
    <>
      <MailNavbar />
      <Routes>
        <Route path="elegibility/es" element={<ElegibilityEs />} />
        <Route path="elegibility/pt" element={<ElegibilityPt />} />
        <Route path="elegibility/fr" element={<ElegibilityFr />} />
      </Routes>
    </>
  );
};

export default Mails;

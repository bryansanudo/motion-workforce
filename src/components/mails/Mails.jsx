import { Route, Routes } from "react-router-dom";
import Elegibility from "@/components/mails/Elegibility";
import MailNavbar from "@/components/mails/MailNavbar";
import { useState } from "react";

const Mails = () => {
  const [mail, setMail] = useState("en");
  return (
    <>
      <MailNavbar mail={mail} setMail={setMail} />
      <Routes>
        <Route
          path="elegibility"
          element={<Elegibility mail={mail} setMail={setMail} />}
        />
      </Routes>
    </>
  );
};

export default Mails;

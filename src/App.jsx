// App.js
import Individuals from "@/components/Individuals";
import Mails from "@/components/mails/Mails";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {
  const [language, setLanguage] = useState("en");
  const navigate = useNavigate();

  /*  useEffect(() => {
    navigate("/individuals/home");
  }, []); */

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Individuals language={language} setLanguage={setLanguage} />
          }
        />
        <Route
          path="/individuals/*"
          element={
            <Individuals language={language} setLanguage={setLanguage} />
          }
        />
        <Route path="/mails/*" element={<Mails />} />
      </Routes>
    </>
  );
};

export default App;

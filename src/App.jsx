import Individuals from "@/components/Individuals";
import { useState } from "react";

const App = () => {
  const [language, setLanguage] = useState("en");

  return (
    <>
      <Individuals language={language} setLanguage={setLanguage} />
    </>
  );
};

export default App;

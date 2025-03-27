import { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import Hello from "./Hello";

function App() {
  const [language, setLanguage] = useState("en");

  function handleSetlanguage(language) {
    setLanguage(language);
  }
  return (
    <div>
      <button onClick={() => handleSetlanguage("it")}>IT</button>
      <button onClick={() => handleSetlanguage("en")}>EN</button>
      <LanguageContext.Provider value={language}>
        <Hello />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;

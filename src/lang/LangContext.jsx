import { createContext, useContext, useState } from "react";
import i18n from "./i18n.jsx";
import { languages } from "./langs.jsx";

const LangContext = createContext();

const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const initialLanguage =
        localStorage.getItem("selectedLanguage") || languages[0].key; // Defolt o'zbek tili uchun languages[0].key ishlatildi
    return languages.find((lang) => lang.key === initialLanguage);
  });

  const handleLanguageChange = (value) => {
    setSelectedLanguage(languages[value.key]);
    const lang_code = languages[value.key].code;
    i18n.changeLanguage(lang_code);
    localStorage.setItem("selectedLanguage", languages[value.key].key);
  };

  return (
      <LangContext.Provider
          value={{
            selectedLanguage,
            setSelectedLanguage,
            handleLanguageChange,
          }}
      >
        {children}
      </LangContext.Provider>
  );
};


function useLanguage() {
  const context = useContext(LangContext);

  if (context === undefined) {
    throw new Error("Language context was used outside of LangProvider");
  }

  return context;
}

export { LanguageProvider, useLanguage };

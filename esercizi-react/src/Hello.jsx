import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function Hello() {
  const language = useContext(LanguageContext);
  return <h2>{language === "it" ? "Ciao Mondo!" : "Hello World!"}</h2>;
}

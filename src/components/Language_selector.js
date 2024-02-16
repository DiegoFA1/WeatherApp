import React from 'react'
import { useTranslation } from "react-i18next";

export default function Language_selector() {
    const [ t, i18n ] = useTranslation("global");
  
  return (
    <div>
        <button onClick={() => i18n.changeLanguage("en")}>en</button>
        <button onClick={() => i18n.changeLanguage("es")}>es</button>
    </div>
  )
}

import React from 'react';
import { useTranslation } from "react-i18next";

export default function Search() {
  const [ t, i18n ] = useTranslation("global");


  return (
    <div>
      <h1>{t("search.search-placeholder")}</h1>
    </div>
  )
}


import { useTranslation } from "react-i18next";

export function useLanguage() {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language;

  const toggleLanguage = async () => {
    const newLanguage = currentLanguage === "tr" ? "en" : "tr";

    await i18n.changeLanguage(newLanguage);
  };

  return {
    currentLanguage,
    toggleLanguage,
    isTurkish: currentLanguage === "tr",
    isEnglish: currentLanguage === "en",
    t
  };
}
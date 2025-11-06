const SUPPORT_LANGUAGES = Object.freeze({
  spanish: "es",
  english: "en",
});

export const LANGUAGE_LABEL = Object.freeze({
  es: "Spanish",
  en: "English",
});

export const DEFAULT_LANGUAGE = SUPPORT_LANGUAGES.spanish;
export default SUPPORT_LANGUAGES;

export type Language =
  (typeof SUPPORT_LANGUAGES)[keyof typeof SUPPORT_LANGUAGES];

import { create } from "zustand";
import SUPPORT_LANGUAGES, {
  DEFAULT_LANGUAGE,
  type Language,
} from "@/support-languages";

interface LanguageState {
  lang: Language;
  setLang: (l: Language) => void;
}

const getInitialLang = (): Language => {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;
  try {
    const stored = localStorage.getItem("lang") as Language | null;
    if (stored && Object.values(SUPPORT_LANGUAGES).includes(stored))
      return stored;
  } catch (e) {}
  return DEFAULT_LANGUAGE;
};

export const useLanguageStore = create<LanguageState>((set) => ({
  lang: getInitialLang(),
  setLang: (l: Language) => {
    if (!Object.values(SUPPORT_LANGUAGES).includes(l)) {
      throw new Error(`Unsupported language: ${l}`);
    }
    set({ lang: l });
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("lang", l);
      } catch (e) {}
    }
  },
}));

export default useLanguageStore;

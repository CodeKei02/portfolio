import React from "react";
import Header from "../../components/react/Header";
import { Experience } from "../../components/layouts/Experience";
import useLanguageStore from "@/store/useLanguageStore";
import { DEFAULT_LANGUAGE, type Language } from "@/support-languages";
import en from "../../content/en/en.json";
import es from "../../content/es/es.json";
import { Projects } from "@/components/layouts/Projects";
import { AboutMe } from "@/components/layouts/AboutMe";
import { Footer } from "@/components/layouts/Footer";
import navigation from "@/content/navigation.json";
import { Button } from "@/components/react/Button";
import { Download } from "lucide-react";

const CONTENT: Record<Language, any> = {
  en,
  es,
};

export default function HomePage() {
  const lang = useLanguageStore((s) => s.lang);
  const data = CONTENT[lang] ?? en;
  const currentLang = lang || DEFAULT_LANGUAGE;
  const navigationLinks = navigation.links[currentLang];

  return (
    <div className="relative">
      {/* Entry component disabled */}
      {/* <Entry /> */}
      <Header data={data} />
      <Button
        href={
          lang === "es"
            ? "/downloads/Keilin_Escobar_CV_ES.pdf"
            : "/downloads/Keilin_Escobar_CV_EN.pdf"
        }
        text="CV"
        download
        style={{
          width: "100px",
          position: "fixed",
          right: 10,
          bottom: 50,
          zIndex: 50,
        }}
      >
        <Download />
      </Button>
      <div className="bg-black/90 h-auto">
        <Experience data={data} title={data.titles.experience} />
        <Projects data={data} title={data.titles.projects} />
        <AboutMe title={data.titles.about} language={lang} />
        <hr className="w-[90%] mt-6 mx-auto opacity-20 text-white" />
        <Footer links={navigationLinks} />
      </div>
    </div>
  );
}

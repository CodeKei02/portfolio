import React, { useEffect, useState } from "react";
import { Entry } from "../../components/react/Entry";
import { useShowEntry } from "@/store/useShowEntry";
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

export default function HomePage({ duration = 1000 }: { duration?: number }) {
  const showEntry = useShowEntry((state) => state.showEntry);
  const setShowEntry = useShowEntry((state) => state.setShowEntry);
  const [isExiting, setIsExiting] = useState(false);
  const lang = useLanguageStore((s) => s.lang);
  const data = CONTENT[lang] ?? en;
  const currentLang = lang || DEFAULT_LANGUAGE;
  const navigationLinks = navigation.links[currentLang];

  useEffect(() => {
    const slideDuration = 1000;
    const startId = window.setTimeout(() => {
      setIsExiting(true);
      const doneId = window.setTimeout(() => {
        setShowEntry(false);
      }, slideDuration);
      const cleanup = () => clearTimeout(doneId);
    }, duration);

    return () => {
      window.clearTimeout(startId);
    };
  }, [duration]);

  return (
    <>
      {showEntry ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "absolute",
            inset: 0,
            zIndex: 20,
            background: "black",
            transition: "transform 1000ms ease",
            transform: isExiting ? "translateY(-100%)" : "translateY(0%)",
          }}
        >
          <Entry />
        </div>
      ) : (
        <div className="relative">
          <Header data={data} />
          <Button
            href={
              lang === "es"
                ? "/downloads/Keilin_CV_ES.pdf"
                : "/downloads/Keilin_CV_EN.pdf"
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
      )}
    </>
  );
}

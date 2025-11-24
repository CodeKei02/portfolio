import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SUPPORT_LANGUAGES, {
  DEFAULT_LANGUAGE,
  LANGUAGE_LABEL,
} from "@/support-languages";
import useLanguageStore from "@/store/useLanguageStore";
import { Earth, ChevronDown } from "lucide-react";
import Spain from "/public/es.jpg";
import USA from "/public/en.png";

export const Dropdown = () => {
  const setLang = useLanguageStore((s) => s.setLang);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-x-2 border p-1 rounded-lg items-center hover:bg-black/80 transition">
        <Earth className="w-5 h-5" />
        {LANGUAGE_LABEL[useLanguageStore((s) => s.lang) || DEFAULT_LANGUAGE]}
        <ChevronDown className="w-5 h-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black border-none box- mt-2 text-white">
        <DropdownMenuItem
          onClick={() => setLang(SUPPORT_LANGUAGES.spanish)}
          className={`mb-1 ${
            LANGUAGE_LABEL.es ===
            LANGUAGE_LABEL[useLanguageStore((s) => s.lang) || DEFAULT_LANGUAGE]
              ? "border"
              : ""
          }
            `}
        >
          <img
            src={Spain.src}
            alt="Spanish"
            className="w-6 h-4 mr-2 rounded-sm"
          />
          {LANGUAGE_LABEL.es}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setLang(SUPPORT_LANGUAGES.english)}
          className={
            LANGUAGE_LABEL.en ===
            LANGUAGE_LABEL[useLanguageStore((s) => s.lang) || DEFAULT_LANGUAGE]
              ? "border"
              : ""
          }
        >
          <img
            src={USA.src}
            alt="English"
            className="w-6 h-4 mr-2 rounded-sm"
          />
          {LANGUAGE_LABEL.en}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

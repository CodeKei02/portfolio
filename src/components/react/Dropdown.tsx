import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import SUPPORT_LANGUAGES, {
  DEFAULT_LANGUAGE,
  LANGUAGE_LABEL,
  type Language,
} from "@/support-languages";
import useLanguageStore from "@/store/useLanguageStore";

export const Dropdown = () => {
  const setLang = useLanguageStore((s) => s.setLang);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Languages className="w-5 h-5 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[var(--background)] border-none box- mt-2">
        <DropdownMenuItem onClick={() => setLang(SUPPORT_LANGUAGES.spanish)}>
          {LANGUAGE_LABEL.es}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setLang(SUPPORT_LANGUAGES.english)}>
          {LANGUAGE_LABEL.en}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

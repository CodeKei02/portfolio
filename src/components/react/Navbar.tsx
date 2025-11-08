import navigation from "../../content/navigation.json";
import SUPPORT_LANGUAGES, { DEFAULT_LANGUAGE } from "@/support-languages";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import useLanguageStore from "@/store/useLanguageStore";
import { Dropdown } from "./Dropdown";

export const Navbar = () => {
  const storeLang = useLanguageStore((s) => s.lang);
  const currentLang = storeLang || DEFAULT_LANGUAGE;

  if (!Object.values(SUPPORT_LANGUAGES).includes(currentLang)) {
    throw new Error(`Unsupported language: ${currentLang}`);
  }

  const links = navigation.links[currentLang];

  return (
    <NavigationMenu className="w-[90%] gap-5 m-auto max-w-none mt-5 bg-[var(--background)]/80 text-white text-[1rem] m-auto rounded-full py-1 px-5 mt-4 space-x-3 text-center">
      <NavigationMenuList className="flex flex-row justify-center items-center gap-6">
        {Object.keys(links).map((item: string) => (
          <NavigationMenuItem key={item}>
            <NavigationMenuLink href={`#${item}`}>
              {links[item]}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <Dropdown />
    </NavigationMenu>
  );
};

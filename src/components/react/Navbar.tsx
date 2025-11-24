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
    <NavigationMenu className="flex shadow-md gap-5 m-auto my-5 text-white py-1 px-5 rounded-full text-center backdrop-blur-md dark:bg-slate-900/20">
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

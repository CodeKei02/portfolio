import navigation from "../../content/navigation.json";
import SUPPORT_LANGUAGES, {
  DEFAULT_LANGUAGE,
  type Language,
} from "@/support-languages";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

interface Props {
  lang?: Language;
}

export const Navbar = ({ lang }: Props) => {
  const currentLang = lang || DEFAULT_LANGUAGE;

  if (!Object.values(SUPPORT_LANGUAGES).includes(currentLang)) {
    throw new Error(`Unsupported language: ${currentLang}`);
  }

  const links = navigation.links[currentLang];

  return (
    <NavigationMenu className="w-[90%] m-auto overflow-hidden max-w-none mt-5">
      <NavigationMenuList className="bg-[var(--background)]/80 text-white text-[1rem] m-auto rounded-full py-1 px-5 mt-4 space-x-3 text-center">
        {Object.keys(links).map((item: string) => (
          <NavigationMenuItem key={item}>
            <NavigationMenuLink href={`#${item}`}>
              {links[item]}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

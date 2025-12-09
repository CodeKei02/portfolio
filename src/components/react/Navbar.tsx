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
import { useState } from "react";

export const Navbar = () => {
  const storeLang = useLanguageStore((s) => s.lang);
  const currentLang = storeLang || DEFAULT_LANGUAGE;
  const [toggle, setToggle] = useState(false);

  if (!Object.values(SUPPORT_LANGUAGES).includes(currentLang)) {
    throw new Error(`Unsupported language: ${currentLang}`);
  }

  const links = navigation.links[currentLang];
  return (
    <NavigationMenu className="fixed z-[999] left-0 right-0 top-0 md:flex md:flex-wrap md:shadow-md md:gap-5 md:m-auto md:my-5 text-white md:py-1 md:px-5 md:rounded-full md:text-center md:backdrop-blur-md md:dark:bg-slate-900/20">
      <div
        className={`inset-y-0 left-0  sm:hidden ${
          toggle
            ? "absolute top-0 mx-4 mt-2 p-2"
            : "relative backdrop-blur-md dark:bg-slate-900/20 rounded-md flex justify-between w-[100vw] mx-4 mt-2 p-2"
        }`}
      >
        <button
          type="button"
          className="relative top-0 z-[999] flex rounded-md p-2 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
          onClick={() => setToggle(!toggle)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.5"
            data-slot="icon"
            aria-hidden="true"
            className="size-6 in-aria-expanded:hidden"
          >
            <path
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.5"
            data-slot="icon"
            aria-hidden="true"
            className="size-6 not-in-aria-expanded:hidden"
          >
            <path
              d="M6 18 18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <Dropdown />
      </div>
      <NavigationMenuList
        className={`${
          toggle
            ? "flex flex-col justify-start backdrop-blur-md dark:bg-slate-900/70 w-[100vw] h-[100vh]"
            : "hidden"
        } md:flex md:flex-row md:justify-center md:items-center md:gap-6`}
      >
        {Object.keys(links).map((item: string) => (
          <NavigationMenuItem key={item} className="mt-10 md:mt-0">
            <NavigationMenuLink href={`#${item}`}>
              {links[item]}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <div className="hidden md:block">
        <Dropdown />
      </div>
    </NavigationMenu>
  );
};

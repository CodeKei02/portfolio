import React from "react";

export const Button = ({
  text,
  href,
  children,
  external,
}: {
  text: string;
  href: string;
  children?: React.ReactNode;
  external?: boolean;
}) => {
  const isExternal =
    typeof external === "boolean" ? external : /^(https?:)?\/\//.test(href);

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="w-40 h-12 flex justify-center items-center bg-white cursor-pointer rounded-3xl border-2 border-[#000] shadow-[inset_0px_-2px_0px_1px_#000] group hover:bg-[#000] transition duration-300 ease-in-out"
    >
      <span className="font-medium text-[#333] group-hover:text-white flex items-center gap-2">
        {children}
        {text}
      </span>
    </a>
  );
};

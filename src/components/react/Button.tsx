import React from "react";

export const Button = ({
  text,
  href,
  children,
  external,
  style,
  download,
}: {
  text: string;
  href: string;
  children?: React.ReactNode;
  external?: boolean;
  style?: React.CSSProperties;
  download?: boolean | string;
}) => {
  const isExternal =
    typeof external === "boolean" ? external : /^(https?:)?\/\//.test(href);

  const downloadAttr = download
    ? typeof download === "string"
      ? download
      : true
    : undefined;

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      download={downloadAttr}
      className="w-40 h-12 flex justify-center items-center bg-white cursor-pointer rounded-3xl border-2 border-[#000] shadow-[inset_0px_-2px_0px_1px_#000] group hover:bg-[#000] transition duration-300 ease-in-out"
      style={style}
    >
      <span className="font-medium text-[#333] group-hover:text-white flex items-center gap-2">
        {children}
        {text}
      </span>
    </a>
  );
};

export const Title = ({ text }: { text: string }) => {
  return (
    <article className="flex flex-col gap-1 truncate" role="presentation">
      <a
        href={`#${text.toLowerCase().replace(/\s+/g, "-")}`}
        className=" text-2xl text-center md:text-3xl md:text-start font-bold leading-10 m-auto"
      >
        {text}
      </a>
      <span id="underline" className="h-2 rounded m-auto"></span>
    </article>
  );
};

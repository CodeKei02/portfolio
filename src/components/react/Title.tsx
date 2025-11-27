export const Title = ({ text, id }: { text: string; id?: string }) => {
  return (
    <article className="flex flex-col gap-1 truncate" role="presentation">
      <h1
        id={id}
        className=" text-2xl text-center md:text-3xl md:text-start font-bold leading-10 m-auto"
      >
        {text}
      </h1>
      <span id="underline" className="h-2 rounded m-auto"></span>
    </article>
  );
};

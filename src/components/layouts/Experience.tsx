import { Title } from "../react/Title";
import { Button } from "../react/Button";
import type Content from "@/types/content";

export const Experience = ({
  data,
  title = "Experiencia",
}: {
  data: Content;
  title: string;
}) => {
  return (
    <div className="h-auto py-20 px-4 text-white">
      <Title text={title} />
      <div className="w-[90%] mx-auto mt-10">
        {data.experiences.map((item, index) => (
          <div key={index} className="mb-10">
            {item.company_name && (
              <h1 className="text-2xl font-semibold text-center mb-5 text-white md:w-full">
                {item.company_name}
              </h1>
            )}
            <div className="md:flex md:gap-6">
              <div className="md:w-1/4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm italic">{item.date}</p>
              </div>

              {/* <div className="mt-2 md:w-3/4 md:max-w-[700px]">
                <p>{item.description}</p>
                <Button href={item?.url || ""} text="Demo" />
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

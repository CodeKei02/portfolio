import { Title } from "../react/Title";
import type ExperienceItem from "@/types/content";

export const Experience = ({
  data,
  title = "Experiencia",
}: {
  data: ExperienceItem;
  title: string;
}) => {
  return (
    <div className=" h-auto py-20 px-4 text-white relative">
      <Title text={title} id="experience" />
      <div className="w-[90%] mx-auto mt-10">
        {data.experiences.map((item, index) => (
          <div key={index} className="mb-10">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-sm italic">
              {item.company} - {item.date}
            </p>
            <p className="mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

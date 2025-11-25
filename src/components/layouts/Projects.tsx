import { Title } from "../react/Title";
import type ProjectItem from "@/types/content";
import { Button } from "../react/Button";
import { AstroIcon, TailwindCSSIcon } from "../icons/frameworks";
import { TypeScriptIcon, PythonIcon } from "../icons/languages";
import {
  ReactIcon,
  SupabaseIcon,
  FirebaseIcon,
  ReduxIcon,
  GitHubIcon,
} from "../icons/tools";
import { PreviewIcon } from "../icons/contact";

const images = [
  { src: "/projects/project-1.jpg", alt: "Project 1" },
  { src: "/projects/project-2.jpg", alt: "Project 2" },
  { src: "/projects/project-3.jpg", alt: "Project 3" },
  { src: "/projects/project-4.jpg", alt: "Project 4" },
];

function getIconByName(name: string) {
  if (name === "Astro") {
    return <AstroIcon className="w-6 h-6" />;
  }
  if (name === "Tailwind CSS" || name === "CSS") {
    return <TailwindCSSIcon className="w-6 h-6" />;
  }
  if (name === "TypeScript") {
    return <TypeScriptIcon className="w-6 h-6" />;
  }
  if (name === "Python") {
    return <PythonIcon className="w-6 h-6" />;
  }
  if (name === "React" || name === "React Router") {
    return <ReactIcon className="w-6 h-6" />;
  }
  if (name === "Supabase") {
    return <SupabaseIcon className="w-6 h-6" />;
  }
  if (name === "Firebase") {
    return <FirebaseIcon className="w-6 h-6" />;
  }
  if (name === "Redux Toolkit") {
    return <ReduxIcon className="w-6 h-6" />;
  }
}

export const Projects = ({
  data,
  title = "Proyectos",
}: {
  data: ProjectItem;
  title: string;
}) => {
  return (
    <div className="h-auto pb-20 pt-10 px-4 text-white relative">
      <Title text={title} />
      <ol className="w-[90%] mx-auto mt-10 flex flex-col gap-10">
        {data.projects.map((item, index) => (
          <div
            className="flex flex-col md:flex-row md:items-center md:gap-6 xl:gap-10"
            key={item.id}
          >
            <a
              href={item.url}
              target="_blank"
              className="w-full animated-header-bg mb-4 mx-auto xl:mx-0 md:max-w-[350px] lg:max-w-[600px] xl:max-w-[800px]  rounded-md px-3 py-6 mb-5"
            >
              <img
                src={images[index].src}
                alt={images[index].alt}
                className="md:object-cover rounded-lg mx-auto xl:max-w-[600px]"
                style={{
                  boxShadow: "inset 0px -2px 10px 10px #000",
                }}
              />
            </a>
            <li key={item.id} className="mb-10 mt-2">
              <h3 className="text-xl font-semibold my-2">{item.name}</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {item.tecnologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full px-3 py-1 text-sm bg-gray-700 text-white flex items-center gap-1"
                  >
                    {getIconByName(tech)}
                    {tech}
                  </li>
                ))}
              </ul>
              <p className="mt-4">{item.description}</p>
              <div className="flex gap-4">
                <Button
                  href={item.url}
                  text="Preview"
                  style={{
                    marginTop: "10px",
                    width: "120px",
                    borderColor: "#ff7ab6",
                    boxShadow: "inset 0px -2px 0px 1px #ff7ab6",
                  }}
                >
                  <PreviewIcon className="w-5 h-5" />
                </Button>
                {item.repository && (
                  <Button
                    href={item.repository}
                    text="Code"
                    style={{
                      marginTop: "10px",
                      width: "120px",
                      borderColor: "#ff7ab6",
                      boxShadow: "inset 0px -2px 0px 1px #ff7ab6",
                    }}
                  >
                    <GitHubIcon className="w-5 h-5" />
                  </Button>
                )}
              </div>
            </li>
          </div>
        ))}
      </ol>
    </div>
  );
};

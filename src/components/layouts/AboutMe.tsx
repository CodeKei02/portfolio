import { Title } from "../react/Title.tsx";
import Me from "../../../public/keilin-photo.png";
import { Button } from "../react/Button.tsx";
import { Mail } from "lucide-react";
import { LinkedInIcon } from "../icons/contact/index.tsx";
export const AboutMe = ({
  title,
  language,
}: {
  title: string;
  language: string;
}) => {
  return (
    <div className="w-[90%] mx-auto h-auto py-10 px-4 text-white">
      <Title text={title} id="aboutMe" />
      <div className="flex flex-col lg:flex-row lg:gap-5 lg:items-center">
        <div className="relative mx-auto mt-6 mb-6 w-52 h-52">
          <div className="absolute inset-0 rounded-full border-2 border-pink-500/80 animate-[spin_6s_linear_infinite]"></div>
          <img
            src={Me.src}
            alt="Keilin Escobar"
            className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full z-10 object-cover"
          />
        </div>
        <div className="lg:w-3/4 lg:mx-auto">
          {language === "es" ? (
            <p>
              <span className="font-bold text-[#ff7ab6]">
                Desarrolladora Front-end
              </span>{" "}
              autodidacta de Venezuela, tengo 2 años de experiencia en el área,
              mi enfoque combina diseño intuitivo y código limpio y escalable,
              utilizando tecnologías modernas cómo{" "}
              <span className="font-bold text-[#ff7ab6]">
                React, TypeScript, Next.js y Tailwind CSS
              </span>
              . También cuento con conocimientos en Python, lo que me permite
              tener una visión más completa del desarrollo web. Me gusta
              trabajar en proyectos que desafían mi creatividad y lógica, más
              allá del código, valoro la colaboración, la mejora continua y el
              impacto que una buena interfaz puede tener en la vida de las
              personas. Estoy en constante aprendizaje, buscando nuevas formas
              de optimizar procesos mejorar la experiencia del usuario y aportar
              soluciones prácticas
            </p>
          ) : (
            <p>
              Self-taught{" "}
              <span className="font-bold text-[#ff7ab6]">
                Front-end Developer
              </span>{" "}
              from Venezuela, with 1 year of experience in the field, my
              approach combines intuitive design and clean, scalable code, using
              modern technologies such as{" "}
              <span className="font-bold text-[#ff7ab6]">
                React, TypeScript, Next.js, and Tailwind CSS
              </span>
              . I also have knowledge of Python, which allows me to have a more
              comprehensive view of web development. I enjoy working on projects
              that challenge my creativity and logic; beyond code, I value
              collaboration, continuous improvement, and the impact a good
              interface can have on people's lives. I am constantly learning,
              seeking new ways to optimize processes, enhance user experience,
              and provide practical solutions
            </p>
          )}
          <div className="mt-5 flex gap-5">
            <Button
              style={{
                marginTop: "10px",
                width: "150px",
                borderColor: "#ff7ab6",
                boxShadow: "inset 0px -2px 0px 1px #ff7ab6",
              }}
              href="mailto:keicode.dev02@gmail.com"
              text={language === "es" ? "Contactame" : "Contact Me"}
            >
              <Mail className="w-5 h-5" />
            </Button>
            <Button
              style={{
                marginTop: "10px",
                width: "120px",
                borderColor: "#ff7ab6",
                boxShadow: "inset 0px -2px 0px 1px #ff7ab6",
              }}
              href="https://www.linkedin.com/in/keilin-escobar-01045032a/"
              text="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

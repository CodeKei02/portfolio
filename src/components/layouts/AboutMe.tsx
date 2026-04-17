import { Title } from "../react/Title.tsx";
import Me from "/public/keilin-photo.png";
import { LinkedInButton } from "./LinkedInButton.tsx";
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
      <div className="flex flex-col lg:flex-row lg:gap-5 lg:items-center mt-5">
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
                Desarrolladora Web
              </span>{" "}
              autodidacta de Venezuela, tengo más de 2 años de experiencia en el
              área, mi enfoque combina diseño intuitivo y código limpio y
              escalable, utilizando tecnologías modernas cómo{" "}
              <span className="font-bold text-[#ff7ab6]">
                React, TypeScript, Next.js, Node, Express y Tailwind CSS
              </span>
              . También cuento con conocimientos en{" "}
              <span className="font-bold text-[#ff7ab6]">Python</span>. Me gusta
              trabajar en proyectos que desafían mi creatividad y lógica, más
              allá del código, valoro la colaboración y la mejora continua. He
              trabajado en proyectos que han sido desafiantes, como el
              desarrollo de una arquitectura de monorepo con microfrontends para
              una plataforma de sorteos, y una aplicación de finanzas personales
              con automatización en Python. Estoy constantemente aprendiendo,
              buscando nuevas formas de optimizar procesos, mejorar la
              experiencia del usuario y brindar soluciones prácticas.
            </p>
          ) : (
            <p>
              Self-taught{" "}
              <span className="font-bold text-[#ff7ab6]">Web Developer</span>{" "}
              from Venezuela, with +2 years of experience in the field, my
              approach combines intuitive design and clean, scalable code, using
              modern technologies such as{" "}
              <span className="font-bold text-[#ff7ab6]">
                React, TypeScript, Next.js, Node, Express, and Tailwind CSS
              </span>
              . I also have knowledge in{" "}
              <span className="font-bold text-[#ff7ab6]">Python</span>. I enjoy
              working on projects that challenge my creativity and logic, beyond
              code, I value collaboration and continuous improvement. I've
              worked on projects that have been challenging, such as developing
              a monorepo architecture with microfrontends for a raffle platform,
              and a personal finance application with automation in Python. I'm
              constantly learning, seeking new ways to optimize processes,
              enhance user experience, and provide practical solutions.
            </p>
          )}
          <div className="mt-5 flex gap-5">
            <LinkedInButton style={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

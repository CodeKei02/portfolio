export const Footer = ({ links }: { links: { [key: string]: string } }) => {
  return (
    <footer className=" relative   ">
      <div className="w-[90%] h-60 mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 py-6">
        <div className="flex gap-5">
          {Object.keys(links).map((link, index) => (
            <a
              key={index}
              href={link}
              className="text-sm text-white hover:text-white mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>
        <div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Keilin Escobar.
          </p>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 w-full"
      >
        <path
          fill="#ff7ab6"
          fillOpacity="0.2"
          d="M0,320L48,320C96,320,192,320,288,277.3C384,235,480,149,576,149.3C672,149,768,235,864,266.7C960,299,1056,277,1152,245.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </footer>
  );
};

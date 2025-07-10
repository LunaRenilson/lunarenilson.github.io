import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bottom-0 left-0">
      <div className="w-full py-6 bg-gray-800 text-gray-300 flex justify-around items-center">
        <span className="text-sm mb-2">
          © {new Date().getFullYear()} Renilson de Luna. All rights reserved.
        </span>
        <div className="flex gap-4">
          <a
            href="https://github.com/lunarenilson"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors group flex items-center"
          >
            <FaGithub
              className="inline mr-2 opacity-0 group-hover:opacity-100 duration-200 bg-white rounded-full"
              size={20}
              color="black"
            />
            <span className="-translate-x-5 group-hover:translate-x-1 duration-200">
              GitHub
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/renilson-luna/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors group flex items-center"
          >
            <FaLinkedin
              className="inline mr-2 opacity-0 group-hover:opacity-100 duration-200 bg-white rounded-sm px-0.5"
              color="blue"
              size={20}
            />
            <span className="-translate-x-5 group-hover:translate-x-1 duration-200">
              LinkedIn
            </span>
          </a>
          <a
            href="mailto:renilson.c.luna@gmail.com"
            target="_blank"
            className="hover:text-white transition-colors group flex items-center"
          >
            <FaEnvelope
              className="inline mr-2 opacity-0 group-hover:opacity-100 duration-200 bg-white rounded-sm px-0.5"
              color="red"
              size={20}
            />
            <span className="-translate-x-5 group-hover:translate-x-1 duration-200">
              Email
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}


export default Footer;

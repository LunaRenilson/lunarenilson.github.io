import { Link } from "react-router-dom";
import { FiAtSign } from "react-icons/fi";
import { FaRegFolder } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import perfil from "@assets/perfil.jpeg";
import logoUnicamp from "@assets/logoUnicamp.png";
import { useEffect, useState } from "react";

function Navigator() {
  const iconSize = 30;

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); //
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [window.scrollY]);

  return (
    <nav
      className={`navigator gap-7 items-center p-3 bg-white shadow-md duration-300 left-0 top-0 fixed w-full ${
        isScrolled ? "opacity-95 h-18" : "h-25"
      } z-5`}
    >
      <div className="Icons flex gap-7 items-center font-bold w-fit">
        <img
          src={perfil}
          alt="Imagem de perfil"
          width={55}
          className="rounded-full"
        />
        <Link to="/" className="relative group items-center flex flex-col">
          <GrHomeRounded
            size={iconSize - 3}
            className="translate-y-3 group-hover:translate-0 duration-300"
          />
          <small className="opacity-0 group-hover:opacity-100 duration-300 text-[15px]">
            Home
          </small>
        </Link>

        <Link
          to="/projects"
          className="relative group items-center flex flex-col"
        >
          <FaRegFolder
            size={iconSize}
            className="translate-y-3 group-hover:translate-0 duration-300"
          />
          <small className="opacity-0 group-hover:opacity-100 duration-300 text-[15px]">
            Projects
          </small>
        </Link>

        <Link
          to="/contact"
          className="relative group items-center flex flex-col"
        >
          <FiAtSign
            size={iconSize}
            className="translate-y-3 group-hover:translate-0 duration-300"
          />
          <small className="opacity-0 group-hover:opacity-100 duration-300 text-[15px]">
            Contact
          </small>
        </Link>
      </div>

      <div className="formation w-fit absolute right-0 top-2 flex items-center gap-4">
        <div className={`text-right ${!isScrolled ? "translate-0" : "translate-x-15 -translate-y-3"} duration-400`}>
          <p className="font-bold text-2xl">Renilson Luna</p>
          <p className="text-sm text-gray-600">Computer Engineering </p>
        </div>
          <img
            src={logoUnicamp}
            alt="Logo da unicamp"
            width="75"
            className={`${!isScrolled ? "opacity-100" : "opacity-0 scale-0"} duration-400`}
          />

      </div>
    </nav>
  );
}

export default Navigator;

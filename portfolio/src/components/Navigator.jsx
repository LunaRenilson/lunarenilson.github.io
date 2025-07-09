import { Link } from "react-router-dom";
import { FiAtSign } from "react-icons/fi";
import { FaRegFolder } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import perfil from "@assets/perfil.jpeg";
import logoUnicamp from "@assets/logoUnicamp.png";

function Navigator() {
  const iconSize = 30;

  return (
    <nav className="navigator gap-7 items-center p-3">
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
          to="/portfolio/projects"
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
          to="/portfolio/contact"
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

      <hr className="h-0 w-1/3 border-gray-400 mt-3 bg-gray-300" />

      <div className="formation w-fit absolute right-0 top-2 flex items-center gap-4">
        <div className="text-right">
          <p className="font-bold text-2xl">Renilson de Luna</p>
          <p className="text-sm text-gray-600">Computer Engineering </p>
        </div>
        <img src={logoUnicamp} alt="Logo da unicamp" width="75" className="" />
      </div>
    </nav>
  );
}

export default Navigator;

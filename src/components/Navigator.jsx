import { Link } from "react-router-dom";
import { FiAtSign } from "react-icons/fi";
import { FaRegFolder } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import perfil from "@assets/perfil.jpeg";
import logoUnicamp from "@assets/logoUnicamp.png";
import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";

function Navigator() {
	const iconSize = 30;

	const [isScrolled, setIsScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false)

	// verifica se a tela é mobile (ex.: < 768px)
	const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 767px)").matches)


	// Atualiza o estado inicial e monitora redimensionamento
	useEffect(() => {
		// Fecha o menu se a tela for mobile no carregamento
		if (isMobile) {
			setMenuOpen(false);
		}

		// Atualiza o estado quando a janela for redimensionada
		const handleResize = () => {
			if (!isMobile) {
				setMenuOpen(false); // Fecha o menu se a tela aumentar
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Verifica scroll
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10); //
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [window.scrollY]);



	return (
		<header
			className={`navigator flex p-3 gap-x-3 bg-white shadow-md duration-300 left-0 top-0 fixed w-full ${isScrolled ? "opacity-95 h-18" : "h-25"
				} z-5`}
		>
			{/* Botão Mobile (sandwich) - visível em telas pequenas */}
			<button
				className="md:hidden focus:outline-none"
				onClick={() => setMenuOpen(prev => !prev)}
			>
				{/* Ícone do sandwich */}
				<div className="space-y-2">
					<IoMdMenu size={40} />
				</div>
			</button>
			
			<div className={`Icons gap-7 items-center font-bold w-fit ${menuOpen ? 'flex flex-row-reverse' : 'hidden'}`}>

				<img
					src={perfil}
					alt="Imagem de perfil"
					width={55}
					className={`rounded-full duration-300 ${isScrolled ? 'scale-0 sm:scale-100' : ''}`}
				/>

				<div className="links-items flex gap-x-3">
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
			</div>


			<div className={`formation w-fit absolute right-0 top-2 items-center justify-center h-full gap-4 ${menuOpen ? 'hidden' : 'flex'}`}>
				<div className={`text-right ${!isScrolled ? "sm:translate-0 " : "sm:translate-x-15 sm:-translate-y-3"} duration-400`}>
					<p className={`font-bold text-xl sm:text-2xl`}>Renilson Luna</p>
					<p className="text-[12px] sm:text-sm text-gray-600">Computer Engineering </p>
				</div>
				<img
					src={logoUnicamp}
					alt="Logo da unicamp"
					className={`w-[50px] lg:w-[75px] ${!isScrolled ? "opacity-100" : "sm:opacity-0 sm:scale-0"} duration-400`}
				/>

			</div>
		</header>
	);
}

export default Navigator;

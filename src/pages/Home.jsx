import softwareDevelopment from "@assets/software-development.png";
import softwareEngineering from "@assets/software-engineering.png";
import Blockchain from "@assets/blockchain.png";
import brainstorm from "@assets/brainstorm.png";
import Carousel from "@components/Carousel";
import Footer from "../components/Footer";
import { BiRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Home() {
  const iconSize = 35;
  return (
    <div className="w-full bg-gray-800">
      <section className="Introducing relative flex flex-col items-center justify-center p-8 ">
        <article className="lg:w-2/3 text-white mt-5 relative justify-center flex flex-col items-center">
          <h1 className="font-bold text-3xl mb-3 text-lef w-full">
            Hello, I'm Renilson Luna!
          </h1>
          <p className="text-lg flex flex-row w-full text-justify">
            I’m Blockchain Developer at CPQD and computer engineer student at UNICAMP
            where I apply my skills to build innovative decentralized solutions, in private and public blockchain networks. </p>
            <br />
          <p className="text-lg mt-3 text-justify">
            I have experience in projects across Blockchain, Web Development, Web3, Machine Learning, and Image Processing, 
            exploring everything from application design and implementation to intelligent models that extract value from complex data. 
            I’m driven by challenges that combine technology and real-world impact, always striving to learn and create solutions that make a difference.
          </p>
        </article>

        <div className=" mt-5 gap-y-5 flex flex-col-reverse lg:flex-row  w-full lg:w-2/3 text-white relative justify-around lg:mt-25 lg:p-5">

          <section className="interests lg:w-1/2 ">
            <h2 className="text-2xl font-bold mb-3">Interests</h2>
            <ul className="flex flex-col gap-y-4">

              <li>
                <div className="flex items-center gap-5 font-medium">
                  <img
                    src={Blockchain}
                    alt="Icon blockchain"
                    width={iconSize}
                  />
                  Blockchain Development & Web3
                </div>
              </li>
              <li className="flex items-center gap-5 font-medium">
                <img src={brainstorm} alt="Icon brainstorm" width={iconSize} />
                Machine Learning & LLM Models
              </li>
              <li className="flex items-center gap-5 font-medium">
                <img
                  src={softwareDevelopment}
                  alt="Icon software development"
                  width={iconSize}
                />
                Software Development
              </li>
              <li className="flex items-center gap-5 font-medium">
                <img
                  src={softwareEngineering}
                  alt="Icon software engineering"
                  width={iconSize}
                />
                Software Engineering
              </li>
            </ul>
          </section>

          <section className="Objectives lg:w-1/2 mt-2">
            <h2 className="text-2xl font-bold mb-3">Objectives</h2>
            <p className="text-justify">
              As a computer engineer, my goal is work on develop scalable,
              sustainable and efficient tools and features that optimize
              funcionalities, processes and workflow accross multidisciplinary
              areas.
            </p>
          </section>
        </div>
      </section>

      <section className="mt-10 w-full mx-auto lg:p-5">
        <article className="featured-projects flex flex-col items-center justify-center w-full mx-auto">
          <div className="flex items-baseline gap-2">
            <h2 className="font-bold text-white text-xl lg:text-4xl mt-5">
              FEATURED PROJECTS
            </h2>
            <Link to="/projects">
              <small className="flex items-center text-xl text-blue-300">
                (and more <BiRightArrow size={15} />)
              </small>
            </Link>
          </div>
          
          <div className="w-full mx-auto">
            <Carousel />
          </div>
        </article>
      </section>
    </div>
  );
}

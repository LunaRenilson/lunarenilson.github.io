import softwareDevelopment from "@assets/software-development.png";
import softwareEngineering from "@assets/software-engineering.png";
import brainstorm from "@assets/brainstorm.png";
import Carousel from "@components/Carousel";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const iconSize = 35;
  return (
    <div className="w-full">
      <section className="Introducing relative flex flex-col items-center justify-center p-8 bg-gray-900 shadow-lg">
        <article className="w-2/3 text-white mt-5 relative justify-center flex flex-col items-center">
          <h1 className="font-bold text-3xl mb-3 text-lef w-full">
            Hello, I'm Renilson de Luna!
          </h1>
          <p className="text-lg flex w-full text-justify">
            I'm a Computer Engineer student passionate about Software, Machine
            Learning, and Algorithms. I currently study at UNICAMP, where I
            develop projects ranging from Web Development to applied artificial
            intelligence.
          </p>
        </article>

        <div className="flex w-2/3 text-white relative justify-around mt-25 p-5">
          <section className="interests w-1/2">
            <h2 className="text-2xl font-bold mb-3">Interests</h2>
            <ul className="flex flex-col gap-y-4">
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

          <section className="Objectives w-1/2">
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

      <section>
        <article className="featured-projects w-fit mt-10">
          <fieldset className="border-1 w-2/3 mx-auto shadow-md p-4 border-gray-200 rounded-md">
            <legend className="text-3xl">Featured Projects</legend>
            <Carousel />
          </fieldset>
        </article>
      </section>

      <footer>
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
                className="inline mr-2 opacity-0 group-hover:opacity-100 duration-200 bg-white rounded-full"
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
                className="inline mr-2 opacity-0 group-hover:opacity-100 duration-200"
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
    </div>
  );
}

import softwareDevelopment from "@assets/software-development.png";
import softwareEngineering from "@assets/software-engineering.png";
import brainstorm from "@assets/brainstorm.png";
import Carousel from "@components/Carousel";
import Footer from "../components/Footer";

export default function Home() {
  const iconSize = 35;
  return (
    <div className="w-full bg-gray-900">
      <section className="Introducing relative flex flex-col items-center justify-center p-8 ">
        <article className="w-2/3 text-white mt-5 relative justify-center flex flex-col items-center">
          <h1 className="font-bold text-3xl mb-3 text-lef w-full">
            Hello, I'm Renilson Luna!
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

      <section className="mt-10 bg-white">
        <article className="featured-projects flex flex-col items-center justify-center w-full mx-auto">
          <h2 className="font-bold text-4xl mt-5">FEATURED PROJECTS</h2>
          <div className="w-full mx-auto shadow-md p-4">
            <Carousel />
          </div>
        </article>
      </section>
    </div>
  );
}

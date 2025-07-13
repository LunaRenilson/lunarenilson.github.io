import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Slide = ({ project, projectImage, addStyle }) => {
  const icons = import.meta.glob("@assets/icons/*", {
    eager: true,
    import: "default",
  });

  function getFeaturedIcon(icon) {
    return icons[`/src/assets/icons/${icon}`] || null;
  }

  return (
    <div className={addStyle}>
      <section className="project-image flex flex-col gap-y-3">
        <figure className="rounded-2xl h-full p-4 shadow-sm">
          <img src={projectImage} alt={project.title} width="500" className="rounded" />
          <figcaption className="text-center text-gray-700 text-sm mt-2">
            {project.imgFigcaption}
          </figcaption>
        </figure>
      </section>

      <section className="project-details flex flex-col gap-y-8 w-1/2 h-full">
        {project.tags && (
          <ul className="tags-list flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <li
                key={idx}
                className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="title-container">
          <h2 className="font-bold text-xl mb-2">{project.title}</h2>
          <p className="text-[15px]">{project.summary}</p>
        </div>

        <div className="details-container flex justify-between w-full ">
          <div>
            <h3 className="font-bold text-xl">Results</h3>
            <ul className="list-disc list-inside text-[15px]">
              {project.results &&
                project.results.map((result, idx) => <li key={idx}>{result}</li>)}
            </ul>
          </div>

          <div className="tools-container h-full">
            <h3 className="font-bold text-xl mb-1">Tools Used</h3>
            <ul className="list-inside grid-cols-4 grid text-[15px] rounded-md gap-2 items-center">
              {project.tools &&
                project.tools.map((tool, idx) => (
                  <li key={idx} className="w-fit shadow-lg bg-white">
                    <img
                      src={getFeaturedIcon(tool)}
                      alt={"image of " + tool}
                      className="h-[60px] w-[60px] bg-white border-white border-1"
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <Link to={project.viewMore} className=" w-fit">
          <button className="left-0 my-5 flex items-center hover:cursor-pointer gap-2 text-[16px] border-b-1 border-gray-600 w-fit hover:text-blue-500">
            Acess Project
            <FaArrowRight className="" />
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Slide;

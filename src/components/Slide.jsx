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
      <section className="project-image flex flex-col sm:flex-col w-full lg:h-full">
        {project.tags && (
          <ul className="tags-list flex flex-wrap gap-2 w-full items-center justify-center">
            {project.tags.slice(0,3).map((tag, idx) => (
              <li
                key={idx}
                className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-[8px] sm:text-[12px]"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <figure className="rounded-2xl h-full p-1 flex flex-col items-center">
          <img
            src={projectImage}
            alt={project.title}
            className="rounded sm:w-[90%] lg:w-[500px]"
          />
          <figcaption className="text-center text-gray-700 text-[10px] sm:text-sm mt-2">
            {project.imgFigcaption}
          </figcaption>
        </figure>
      </section>

      <section className="project-details flex px-3 flex-col gap-y-3 sm:gap-y-8 lg w-full h-full">
        <div className="title-container w-full items-center">
          <h2 className="font-bold text-[14px] sm:text-lg  mb-2">{project.title}</h2>
          <p className="text-[10px] sm:text-md sm:text-[14px] 2xl:text-lg">{project.summary}</p>
        </div>

        <div className="details-container flex flex-row gap-3 sm:justify-around sm:w-full md:w-fit">
          <div className="">
            <h3 className="font-bold text-sm sm:text-md 2xl:text-lg">Results</h3>
            <ul className="list-disc list-inside text-[10px] sm:text-[14px] 2xl:text-lg">
              {project.results &&
                project.results.map((result, idx) => (
                  <li key={idx}>{result}</li>
                ))}
            </ul>
          </div>

          <div className="tools-container h-full hidden sm:block">
            <h3 className="font-bold text-sm sm:text-md 2xl:text-lg mb-1">Tools Used</h3>
            <ul className="list-inside flex text-[15px] rounded-md gap-2 w-full items-center">
              {project.tools &&
                project.tools.map((tool, idx) => (
                  <li key={idx} className="w-fit shadow-lg bg-white">
                    <img
                      src={getFeaturedIcon(tool)}
                      alt={"image of " + tool}
                      className="h-[40px] w-[40px xl:h-[60px] xl:w-[60px] bg-white border-white border-1"
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <Link
          to={project.viewMore}
          className="left-0 my-5 flex items-center hover:cursor-pointer gap-2 text-sm sm:text-[16px] w-fit hover:text-blue-500"
        >
          <button className="">
            Acess Project
          </button>
          <FaArrowRight className="w-[15px] sm:w-[30px]" />
        </Link>
      </section>
    </div>
  );
};

export default Slide;

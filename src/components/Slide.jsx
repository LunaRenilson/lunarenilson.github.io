import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Slide = ({
  tags,
  image,
  imgFigcaption,
  title,
  summary,
  results,
  tools,
  viewMoreId,
}) => {
  return (
    <div className="slide-container flex items-center justify-center p-4 gap-10 h-full w-full bg-gray-100 border-1 border-gray-300 shadow-2xl rounded-2xl py-10">
      <section className="project-image flex flex-col gap-y-3">

        <figure className="rounded-2xl h-full p-4 shadow-sm">
          <img src={image} alt={title} width="500" className="rounded" />
          <figcaption className="text-center text-sm text-gray-100 mt-2">
            {imgFigcaption}
          </figcaption>
        </figure>

      </section>

      <section className="project-details flex flex-col gap-y-8 h-3/4 w-1/2">
        {tags && (
          <ul className="tags-list flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
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
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          <p className="text-[15px]">{summary}</p>
        </div>

        <div className="details-container flex justify-between w-full ">
          <div>
            <h3 className="font-bold text-xl">Results</h3>
            <ul className="list-disc list-inside text-[15px]">
              {results &&
                results.map((result, idx) => <li key={idx}>{result}</li>)}
            </ul>
          </div>

          <div className="tools-container h-full">
            <h3 className="font-bold text-xl">Tools Used</h3>
            <ul className="list-inside flex gap-3 text-[15px]">
              {tools && tools.map((tool, idx) => <li key={idx}>{tool}</li>)}
            </ul>
          </div>
        </div>

        <Link to={`/projects/${viewMoreId}`} className=" w-fit">
          <button className="left-0 my-5 flex items-center hover:cursor-pointer gap-2 text-[16px] border-b-1 border-gray-600 w-fit hover:text-blue-500">
            View More
            <FaArrowRight className="" />
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Slide;

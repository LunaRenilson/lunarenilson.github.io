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
    <div className="slide-container flex items-center justify-center p-4 gap-10 h-full w-full text-white bg-slate-900 border-1 border-gray-300 shadow-2xl rounded-2xl py-10">
      <section className="project-image flex flex-col gap-y-3">
        {tags && (
          <ul className="tags-list flex flex-wrap gap-2 mt-2">
            {tags.map((tag, idx) => (
              <li
                key={idx}
                className="bg-red-200 text-red-800 px-2 py-1 rounded-full text-sm"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <figure className="rounded-2xl h-full p-4 shadow-sm">
          <img src={image} alt={title} width="500" className="rounded" />
          <figcaption className="text-center text-sm text-gray-100 mt-2">
            {imgFigcaption}
          </figcaption>
        </figure>
      </section>

      <section className="project-details flex flex-col h-3/4 gap-y-20 w-1/2">
        <div className="title-container">
          <h2 className="font-bold text-4xl">{title}</h2>
          <p className="text-[18px]">{summary}</p>
        </div>

        <div className="details-container flex justify-between w-2/3 items-center">
          <div>
            <h3 className="font-bold text-4xl">Results</h3>
            <ul className="list-disc list-inside text-[18px]">
              {results &&
                results.map((result, idx) => <li key={idx}>{result}</li>)}
            </ul>
          </div>

          <div className="tools-container h-full">
            <h3 className="font-bold text-4xl">Tools Used</h3>
            <ul className="list-inside flex gap-3 text-[18px]">
              {tools && tools.map((tool, idx) => <li key={idx}>{tool}</li>)}
            </ul>
          </div>
        </div>

        <Link to={`/projects/${viewMoreId}`} className=" w-fit">
          <button className="left-0 my-5 flex items-center hover:cursor-pointer gap-2 text-[18px] border-b-1 border-gray-600 w-fit hover:text-blue-500">
            View More
            <FaArrowRight className="" />
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Slide;

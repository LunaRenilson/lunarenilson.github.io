import { useState } from "react";
import projectTags from "@data/tagsProject.json";
import projects from "@data/projects.json";
import CardProject from "@components/CardProject.jsx";

export default function Projects() {
  const [tags, setTags] = useState(projectTags.slice(0, 15));

  return (
    <div className="flex flex-col mt-10 justify-center">
      <h1 className="text-4xl ml-10 font-bold mb-4">Projects</h1>
      <section className="ml-10 pb-5 w-1/2 flex flex-col border-b-1 border-gray-500">
        <div className="flex gap-2 items-baseline mb-4">
          <p className="mb-2">Search by Tag</p>
          <input
            type="text"
            className="border-1 h-7 border-gray-300 rounded-sm outline-none p-5"
            placeholder="Search tag"
          />
        </div>

        <ul className="flex flex-wrap gap-2 justify-start">
          {tags.map(({ id, tag }, idx) => (
            <li
              key={idx}
              className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-md"
            >
              {tag}
            </li>
          ))}
        </ul>
      </section>

      <section className=" pl-10 mt-10 mb-10 bg-gray-100">
        <div className="flex gap-10 flex-wrap justify-start mt-20">
          {projects.map((project, idx) => (
              <CardProject key={idx} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

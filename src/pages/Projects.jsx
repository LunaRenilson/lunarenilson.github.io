import { useEffect, useState } from "react";
// import projectTags from "@data/tagsProject.json";
import projects from "@data/projects.json";
import CardProject from "@components/CardProject.jsx";
import Slide from "../components/Slide";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(null)

  const handleSearch = e => {
    const search = e.target.value.toLowerCase();
    const filtered = projects.filter(project => {
      const filter = 
      project.title.toLowerCase().includes(search)
      || project.summary.toLowerCase().includes(search)
      || project.tags.some(tag => tag.toLowerCase().includes(search))

      return filter
    });
    setFilteredProjects(filtered)
  }

  const images = import.meta.glob("@assets/project_images/*", {
    eager: true,
    import: "default",
  });

  const image = selectedProject
    ? images[`/src/assets/project_images/${selectedProject.image}`]
    : "";

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <div>
      <div
        className={`flex flex-col mt-10 justify-center ${
          selectedProject ? "blur-md" : ""
        }`}
        onClick={() => (selectedProject ? setSelectedProject(null) : "")}
      >
        <h1 className="text-4xl ml-10 font-bold mb-4">Projects</h1>
        <section className="ml-10 pb-5 w-1/2 flex flex-col border-b-1 border-gray-500">
          <div className="flex gap-4 items-baseline mb-4">
            <p className="mb-2">Search Project</p>
            <input
              type="text"
              className="border-1 h-7 border-gray-500 rounded-sm outline-none shadow-lg p-5"
              placeholder="Search tag, title or description"
              onChange={handleSearch}
            />
          </div>
        </section>

        <section className=" pl-10  bg-gray-300 pb-5 w-full">
          <div className="flex gap-10 flex-wrap justify-start mt-10">
            {(filteredProjects ?? projects).map((project, idx) => (
              <CardProject
                key={idx}
                project={project}
                projectImage={image}
                onClickEvent={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </section>
      </div>
      {selectedProject && (
        <div className="w-full flex justify-center absolute items-center top-1/4">
          <div className="w-fit">
            <button
              className="text-4xl z-10 top-0 bg-red-400 text-red-800 px-2 rounded-md mb-1 w-fit hover:cursor-pointer hover:bg-red-500"
              onClick={() => setSelectedProject(null)}
            >
              X
            </button>

            <Slide
              project={selectedProject}
              projectImage={image}
              addStyle="bg-white p-10 rounded-lg shadow-2xl border-1 gap-5 xl:w-200 2xl:w-300 mx-auto flex bg-gray-300"
            />
          </div>
        </div>
      )}
    </div>
  );
}

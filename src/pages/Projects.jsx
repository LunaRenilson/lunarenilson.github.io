import { useEffect, useState } from "react";
// import projectTags from "@data/tagsProject.json";
import projects from "@data/projects.json";
import CardProject from "@components/CardProject.jsx";
import Slide from "../components/Slide";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(null);

  const handleSearch = (e) => {
    const search = e.target.value.toLowerCase();
    const filtered = projects.filter((project) => {
      const filter =
        project.title.toLowerCase().includes(search) ||
        project.summary.toLowerCase().includes(search) ||
        project.tags.some((tag) => tag.toLowerCase().includes(search));

      return filter;
    });
    setFilteredProjects(filtered);
  };

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
        className={`flex flex-col mt-10 justify-center ${selectedProject ? "blur-md" : ""
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

        {/* Project Cards */}
        <section className="bg-gray-300 pb-5 flex items-center justify-center">
          <div className="
          grid grid-cols-1 p-3 gap-y-5
          sm:grid-cols-2 sm:gap-x-10 sm:gap-y-4 justify-start sm:max-w-11/12 sm:mt-10
          md:grid-cols-2
          lg:grid-cols-4
          ">
            {(filteredProjects ?? projects).map((project, idx) => (
              <CardProject
                key={idx}
                project={project}
                projectImage={image}
                className="border border-gray-200 rounded-lg w-full flex-wrap shadow-md hover:shadow-2xl overflow-hidden bg-white flex flex-col"
                onClickEvent={() => {
                  setSelectedProject(project);
                }}
              />
            ))}
          </div>
        </section>
        {/* Project Cards */}
      </div>

      {selectedProject && (
        <div className="w-full flex justify-center fixed items-center h-[50%] top-[25%] z-10">
          <div className="">
            <button
              className="flex justify-center items-center align-start w-10 h-10 text-xl z-10 translate-y-10
              bg-red-400 text-red-800 rounded-[10%] hover:cursor-pointer hover:bg-red-500"
              onClick={() => setSelectedProject(null)}
            >
              X
            </button>

            <Slide
              project={selectedProject}
              projectImage={image}
              addStyle="bg-white p-10 xl:p-10 rounded-lg shadow-2xl xl:border-1 gap-5 xl:w-200 2xl:w-300 mx-auto flex flex-col bg-gray-300"
            />
          </div>
        </div>
      )}
    </div>
  );
}

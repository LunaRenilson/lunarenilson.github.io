import { Link } from "react-router-dom";

const CardProject = ({ project, onClickEvent }) => {
  const images = import.meta.glob("@assets/project_images/*", {
    eager: true,
    import: "default",
  });

  const image =
    images[`/src/assets/project_images/${project.image}`] ||
    images[`@assets/default.png`];

  return (
    <div className="border border-gray-200 rounded-lg w-1/5 flex-wrap shadow-md hover:shadow-2xl hover:border-blue-600 active:scale-95 overflow-hidden bg-white flex flex-col">
      <div className="flex flex-col h-full hover:cursor-pointer" onClick={onClickEvent}>
        <div className="flex-grow items-center flex bg-black">
          <img
            src={image}
            alt={project.title}
            className="w-full bg-cover object-cover bg-no-repeat pointer-events-none"
          />
        </div>
        <div className="p-4 flex-grow flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-2 ">{project.title}</h3>
          <p className="mb-3 text-gray-600">{project.summary}</p>
          <ul className="inline-block text-gray-800 rounded px-2 py-1 text-xs h-full">
            {project.tags.map((tag, idx) => (
              <li
                key={idx}
                className="inline-block mr-2 mb-1 bg-blue-200 text-blue-800 px-2 py-1 rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardProject;

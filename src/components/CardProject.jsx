import tags from "@data/tagsProject.json";
import { Link } from "react-router-dom";
const CardProject = ({ project }) => {
  const images = import.meta.glob("@assets/*", {
    eager: true,
    import: "default",
  });

  const image =
    images[`/src/assets/${project.images[0]}`] || images[`@assets/default.png`];

  return (
    <div className="border border-gray-200 rounded-lg w-1/5 flex-wrap shadow-md hover:shadow-2xl hover:border-blue-300 active:scale-95 overflow-hidden bg-white">
      <Link to={`/projects/${project.id}`} className="block">
        <img
          src={image}
          alt={project.titulo}
          className="w-full object-cover bg-no-repeat pointer-events-none"
        />
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
          <p className="mb-3 text-gray-600">{project.summary}</p>
          <ul className="inline-block text-gray-800 rounded px-2 py-1 text-xs">
            {project.tags.map((tagId, idx) => (
              <li
                key={idx}
                className="inline-block mr-2 mb-1 bg-blue-200 text-blue-800 px-2 py-1 rounded-full"
              >
                {tags[tagId] ? tags[tagId].tag : `Tag ${tagId}`}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default CardProject;

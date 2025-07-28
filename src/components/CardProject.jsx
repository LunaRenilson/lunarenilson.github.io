
const CardProject = ({ project, onClickEvent, className }) => {
  const images = import.meta.glob("@assets/project_images/*", {
    eager: true,
    import: "default",
  });

  const image =
    images[`/src/assets/project_images/${project.image}`] ||
    images[`@assets/default.png`];

  return (
    <div className={className}>
      <div className="flex flex-col h-full">
        <div className="flex-grow items-center flex bg-black">
          <img
            src={image}
            alt={project.title}
            className="w-full bg-cover object-cover bg-no-repeat pointer-events-none"
          />
        </div>
        <div className="flex-grow flex flex-col justify-center">
          <div className="details p-4 flex-grow flex flex-col justify-center">
            <h3 className="text-[14px] 2xl:text-xl font-semibold mb-2 ">{project.title}</h3>
            <p className="mb-3 text-[12px] xl:text-lg text-gray-600">{project.summary}</p>
            <ul className="inline-block text-gray-800 px-2 py-1 text-xs h-full border-b-1 border-gray-300">
              {project.tags.map((tag, idx) => (
                <li
                  key={idx}
                  className="text-[10px] 2xl:text-sm  inline-block mr-2 mb-1 bg-blue-200 text-blue-800 px-2 py-1 rounded-full"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="bottons text-[14px] 2xl:text-lg mb-3 text-center font-bold flex w-full justify-around items-center bottom-0">
            <button
              className="flex  justify-center w-1/3 hover:cursor-pointer hover:text-emerald-700 border-b-1 border-transparent hover:border-emerald-200"
              onClick={onClickEvent}
            >
              Details
            </button>

            <button className="flex justify-center w-1/3 hover:text-blue-600 border-b-1 border-transparent hover:border-blue-200">
              <a href={project.viewMore}>See project</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;

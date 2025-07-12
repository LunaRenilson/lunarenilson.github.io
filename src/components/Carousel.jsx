import Slide from "./Slide";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import featuredProjects from "@data/featuredProjects.json";

function Carousel() {
  const autoplay = Autoplay({
    delay: 5000,
    stopOnMouseEnter: true, // pausa quando mouse estiver em cima
  });
  const wheelGestures = WheelGesturesPlugin();
  const [emblaRef, embla] = useEmblaCarousel(
    {
      align: "center",
      loop: true,
    },
    [autoplay, wheelGestures]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  useEffect(() => {
    if (!embla) return;

    const onSelect = () => {
      setSelectedIndex(embla.selectedScrollSnap());
    };

    embla.on("select", onSelect);
    setSlideCount(embla.scrollSnapList().length);
    onSelect();
  }, [embla]);
  
  const images = import.meta.glob("@assets/project_images/*", {
    eager: true,
    import: "default",
  });

  function getFeaturedImage(img) {
    return images[`/src/assets/project_images/${img}`] || null;
  }

  return (
    <div
      className="embla w-full relative justify-center items-center flex flex-col overflow-hidden bg-gradient-to-b from-transparent py-2 to-gray-700 border-gray-500 border rounded-4xl shadow-gray-600 shadow-2xl"
      ref={emblaRef}
    >
      <div className="flex w-10/12">
        {featuredProjects.map((project, index) => (
          <div className={"min-w-[90%] p-3"} key={index}>
            <Slide
              tags={project.tags}
              image={getFeaturedImage(project.image)}
              imgFigcaption={project.imgFigcaption || "Project Image"}
              title={project.title || "Project Title"}
              results={project.results || ["Result 1", "Result 2"]}
              tools={project.tools || ["Tool 1", "Tool 2"]}
              viewMoreId={project.viewMoreId}
              summary={project.summary || "Project summary goes here."}
            />
          </div>
        ))}
      </div>

      <div className="embla__buttons relative flex justify-center mt-4 ">
        <div className="p-5 gap-15 rounded-full flex">
          <button
            onClick={() => embla && embla.scrollPrev()}
            className="border-1 p-3 flex items-center hover:gap-2 duration-200 w-1/3 gap-1 rounded-full hover:cursor-pointer hover:opacity-100 hover:bg-blue-800 bg-blue-600 text-white font-bold opacity-70"
          >
            <FaArrowRight className="rotate-180" />
            Previous
          </button>

          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: slideCount }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-md transition-all ${
                  index === selectedIndex
                    ? "bg-blue-500 scale-125"
                    : "bg-gray-600"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => embla && embla.scrollNext()}
            className="border-1 p-3 flex items-center hover:gap-2 gap-1 duration-200 rounded-full hover:opacity-100 bg-blue-600 hover:bg-blue-800 hover:cursor-pointer text-white font-bold opacity-70"
          >
            Next <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;

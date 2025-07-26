import Slide from "./Slide";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import featuredProjects from "@data/featuredProjects.json";


function Carousel() {
  const autoplay = Autoplay({
    delay: 4000,
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
          <div className="min-w-[80%] p-3" key={index}>
            <Slide
              project={project}
              projectImage={getFeaturedImage(project.image)}
              addStyle={"slide-container flex items-center justify-center p-4 gap-5 w-full h-full bg-gray-100 border-1 border-gray-300 shadow-2xl rounded-2xl py-10"}
            />
          </div>
        ))}
      </div>

      <div className="embla__buttons absolute flex justify-center mt-4 w-full h-full">
        <div className="p-5 gap-15 rounded-full flex">
          <button
            onClick={() => embla && embla.scrollPrev()}
            className="absolute h-1/3 top-1/3 left-0 p-3 flex items-center hover:gap-2 duration-200 gap-1 w-fit 
             bg-blue-600 opacity-30 hover:opacity-100 hover:cursor-pointer"
          >
            <FaArrowRight className="rotate-180" color="white"/>
          </button>

          <div className="flex justify-center gap-2 mt-4 absolute bottom-3">
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
            className="absolute h-1/3 top-1/3 right-0 p-3 flex items-center hover:gap-2 duration-200 gap-1 w-fit 
             bg-blue-600 opacity-30 hover:opacity-100 hover:cursor-pointer"
          >
            <FaArrowRight color="white"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;

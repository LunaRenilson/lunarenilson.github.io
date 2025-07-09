import useEmblaCarousel from "embla-carousel-react";
import Slide from "./Slide";
import softwareDevelopment from "@assets/software-development.png";
import softwareEngineering from "@assets/software-engineering.png";
import { useEffect, useState } from "react";

function Carousel() {
  const [emblaRef, embla] = useEmblaCarousel();
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

  return (
    <div
      className="embla w-full relative justify-center flex flex-col overflow-hidden"
      ref={emblaRef}
    >
      <div className="flex">
        <div className="min-w-full">
          <Slide
            tags={["tag1", "tag2", "tag3"]}
            image={softwareEngineering}
            imgFigcaption="Software development model"
            title="titulo 1"
            results={["bola", "bolinha", "cavalo"]}
            tools={["python", "c", "java"]}
            onViewMore="Ver mais"
            summary="This slide presents a software engineering project, highlighting key tags, results, and tools used. Explore the development process and outcomes achieved with modern technologies."
          />
        </div>

        <div className="min-w-full">
          <Slide
            tags={["tag4", "tag5"]}
            image={softwareDevelopment}
            imgFigcaption="Software development model"
            title="titulo 2"
            results={["item1", "item2"]}
            tools={["js", "react"]}
            onViewMore="Ver mais"
            summary="Discover a software development case study, featuring important tags, achieved results, and utilized tools. Gain insights into the workflow and methodologies applied throughout the project."
          />
        </div>

        <div className="min-w-full">
          <Slide
            tags={["tag6"]}
            image={softwareEngineering}
            imgFigcaption="Software development model"
            title="titulo 3"
            results={["foo", "bar"]}
            tools={["go", "rust"]}
            onViewMore="Ver mais"
            summary="Explore this slide to learn about a unique software engineering initiative, including relevant tags, project outcomes, and the programming languages that powered the successful implementation."
          />
        </div>
      </div>

      <div className="embla__buttons relative flex justify-center gap-15 mt-4 ">
        <button
          onClick={() => embla && embla.scrollPrev()}
          className="border-1 p-2 rounded-sm bg-blue-600 text-white font-bold"
        >
          Previous
        </button>

        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: slideCount }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === selectedIndex
                  ? "bg-blue-500 scale-125"
                  : "bg-gray-600"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => embla && embla.scrollNext()}
          className="border-1 p-2 rounded-sm bg-blue-600 hover:bg-blue-800 text-white font-bold"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Carousel;

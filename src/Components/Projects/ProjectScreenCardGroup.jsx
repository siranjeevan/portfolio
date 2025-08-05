import { useRef } from "react";
function ProjectsCardGroup({children}) {
    const scrollRef = useRef(null);
    
      const scroll = (direction) => {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({
            left: direction === "left" ? -300 : 300,
            behavior: "smooth",
          });
        }
      };
    
      return (
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center justify-center mt-10">
            <div className="relative w-[100%] max-w-[1200px]">
              {/* Scrollable row */}
              <div
                ref={scrollRef}
                className="flex flex-row overflow-x-auto gap-10 snap-x snap-mandatory scroll-smooth px-10 scroll-hide mb-10"
              >
                {children}
              </div>
    
              {/* Navigation controls */}
              <div className="flex justify-center items-center gap-10 mt-4">
                <button
                  onClick={() => scroll("left")}
                  className="bg-[rgba(10,4,10,0.47)] text-white p-2 w-10 h-10 rounded-full shadow-md hover:scale-110 transition"
                >
                  ◀
                </button>
    
                <div className="text-white text-xl font-bold tracking-widest flex gap-2">
                  <span className="text-[rgba(102,75,102,0.55)]">●</span>
                  <span className="text-[rgba(143,55,143,0.73)]">●</span>
                  <span className="text-[rgba(102,75,102,0.55)]">●</span>
                </div>
    
                <button
                  onClick={() => scroll("right")}
                  className="bg-[rgba(10,4,10,0.47)] text-white p-2 w-10 h-10 rounded-full shadow-md hover:scale-110 transition"
                >
                  ▶
                </button>
              </div>
            </div>
          </div>
        </div>
      );
}
export default ProjectsCardGroup;
import { useRef } from "react";

function ServicesCardGroup({ children }) {
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
        <div className="flex items-center justify-center mt-10 ">
    
        <div className="relative w-300">
            <div
                ref={scrollRef}
                className="flex flex-row overflow-x-auto  gap-10 snap-x snap-mandatory scroll-smooth px-10 scroll-hide mb-10"
            >
                {children}
            </div>
            <div className="flex justify-center gap-10">
                <button onClick={() => scroll("left")} className=" bg-white p-2 w-10 h-10 rounded-full shadow-md hover:scale-110" >
                    ◀
                </button>
                {/* <p className="text-white text-[32px] font-bold -mx-5">
                    . . .
                </p> */}
                <button onClick={() => scroll("right")} className="bg-white p-2 w-10 h-10 rounded-full shadow-md hover:scale-110 " >
                    ▶
                </button>
            </div>
            </div>
        </div>
    </div>
  );
}

export default ServicesCardGroup;

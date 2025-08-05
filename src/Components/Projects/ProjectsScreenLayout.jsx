function ProjectsScreenLayout({ children }) {
  return (
    <div className="w-auto h-190 bg-radial-[at_-300%_50%] from-[#e302ef] to-[#15001b]">
             <div className="relative w-full h-screen overflow-hidden">

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.1,
          }}
        />

        <div className="relative z-10">
            <div className="flex justify-center items-center py-5 text-white flex-col gap-2 mt-5">
                    <h1 className="flex justify-center text-4xl font-bold">My Projects</h1>
                    <h3 className= "text-[17px] mt-5 tracking-[1px] font-bold" >Discover the projects that 
                        showcase my passion design and innovation</h3>
                </div>
                  {children}
            </div>
        </div>

      </div>
  );
}
export default ProjectsScreenLayout;
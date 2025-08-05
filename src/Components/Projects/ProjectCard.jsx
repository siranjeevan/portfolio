function ProjectsCard({ path, ProjectTitle = "Project Title" , ProjectText = "" }){
    return(
        <>
            <div className="flex min-w-90 h-100 flex-col items-center justify-center bg-radial-[at_140%_10%] from-[#ffffff] via-[rgba(62,24,62,0.47)] to-[rgba(10,4,10,0.47)]  hover:bg-[rgb(255,255,255)] rounded-[22px] shadow-lg snap-center duration-300">
                <img src={path} className="h-16 mb-4" alt={ProjectTitle} />
                <h2 className="text-white text-[20px] font-semibold">{ProjectTitle}</h2>

                <div className=" text-white p-4 flex items-center justify-center">
                    <p className="text-[15px] w-85 text-center font-extralight">{ProjectText}</p>
                </div>
            </div>
        </>
    )
}
export default ProjectsCard;
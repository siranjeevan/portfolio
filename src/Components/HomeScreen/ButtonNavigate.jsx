function ButtonNavigate(){
    return(
        <>
            <div className="flex flex-row gap-5 mt-5">
                <button className="bg-white  text-black font-bold rounded-4xl   w-30 text-[12px] p-1
                sm:w-35 sm:text-[15px]
                md:w-37 md:text-[15px]
                lg:w-45 lg:text-[18px] lg:p-2
                xl:w-55 xl:text-[18px] 
                2xl:w-70 2xl:text-[25px] 2xl:px-3
                hover:bg-[#f98eff] transition duration-300">My Project</button>
                <a href="/Siranjeevan_CV.pdf" download>
                <button className=" text-white font-bold rounded-4xl 
                w-30 text-[12px] p-1
                sm:w-35 sm:text-[15px]
                md:w-37 md:text-[15px]
                lg:w-45 lg:text-[18px] lg:p-2
                xl:w-55 xl:text-[18px] 
                2xl:w-70 2xl:text-[25px] 2xl:px-3
                hover:bg-[#f98eff] transition duration-300" style={{ backgroundColor: 'rgba(0, 0, 0 , 0.3)' }}>
                    Download CV
                </button>
                </a>


            </div>
        </>
    );
}
export default ButtonNavigate;
function Layout({children}) {
    return (
    <div className="w-auto h-auto bg-radial-[at_300%_55%] from-[#e302ef] to-[#15001b] p-10">
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
                    <h1 className="flex justify-center text-3xl font-bold"> Awesome Minds Behind My Journey</h1>
                    <h3 className= "text-[15px] mt-5 tracking-[0.5px] w-180 text-center text-gray-300 font-light" >I’m grateful to be guided by inspiring mentors who shaped my skills, thinking, and passion for tech. Their guidance turned my curiosity
                         into confidence, and my passion into purpose. </h3>
                </div>
                  {children}
            </div>
        </div>

      </div>
  );
}
export default Layout;
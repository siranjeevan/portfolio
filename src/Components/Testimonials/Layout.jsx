function Layout({children})
{
    return(
        <div className="w-auto h-180 bg-radial-[at_-50%_55%] from-[#ad48b2] via-[#15001b]  to-[#15001b]">
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

        {/* Content on top */}
        <div className="relative z-10">
            <div className="flex justify-center items-center py-5 mt-5">
                    <h1 className="flex justify-center text-white text-4xl tracking-[3px] font-bold">Testimonials</h1>
                </div>
                
                {children}
            </div>
        </div>

      </div>
    )
}
export default Layout;
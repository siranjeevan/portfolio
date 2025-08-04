function AboutScreenLayout({children}) {
    return (
        <div className="w-auto h-auto bg-radial-[at_-50%_55%] from-[#ad48b2] via-[#15001b]  to-[#15001b]">
            <div className="flex justify-center items-center py-10">
                <h1 className="flex justify-center text-white text-4xl font-bold">About Me</h1>
            </div>
            
            {children}
         </div>
    );
}
export default AboutScreenLayout;
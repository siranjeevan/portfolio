function HeaderLayout({children}){
    return(
        <div className="w-screen flex justify-center items-center">
            <div className="
                    w-80 h-13 mt-3 rounded-[20px] 
                    sm:w-150 sm:h-15 sm:rounded-[25px]
                    md:w-180 md:h-13 md:rounded-[25px]
                    lg:w-220 lg:h-15 lg:mt-5 lg:rounded-[25px]
                    xl:w-320 xl:h-17 xl:mt-7 xl:rounded-[30px]
                    2xl:w-530 2xl:h-30 2xl:mt-10 2xl:rounded-[60px]
                    flex items-center flex-row
                    shadow-lg
                    text-black font-semibold
                    bg-[rgba(173,72,178,0.3)] " >

                    {children}
                </div>

        </div>


    );
}

export default HeaderLayout;
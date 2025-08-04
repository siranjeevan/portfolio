function DownButton(){
    return(
        <>
            <div className=" flex justify-center
            sm:ml-50 sm:mt-10
            md:ml-70 md:mt-10
            lg:ml-100 lg:mt-15
            xl:ml-0 xl:-mt-10">
                <button className="bg-gradient-to-b from-white to-[#a12eab] rounded-full p-1">
                    <img src="/DownArrow.png" className=" sm:h-7 md:h-7 lg:h-10 xl:h-11" />
                </button>
            </div>
        </>
    );
}
export default DownButton;
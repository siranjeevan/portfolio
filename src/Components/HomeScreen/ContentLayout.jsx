function ContentLayout({children}){
    return(
        <>
            <div className="text-white sm:ml-10 sm:mt-10 md:ml-10 md:mt-10 lg:ml-15 lg:mt-10 xl:ml-20 xl:mt-20">
                {children}
            </div>
        </>
    );
}
export default ContentLayout;
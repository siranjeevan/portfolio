function TestimonialsCards({ path, testimonialText = "Testimonial Text", authorName = "Author Name" , Post = "Post" }) {
  return (
    <div className="flex min-w-120 h-70 flex-col bg-[rgba(10,4,10,0.47)] hover:bg-[rgba(232,92,239,0.63)] rounded-[22px] shadow-lg snap-center duration-300">
        <div className="flex flex-col items-center justify-center p-4 h-150">
            <h1 className="text-white text-[30px] mr-100">❝</h1>
            <p className="text-white text-[14px] font-semibold px-5 ml-5"> {testimonialText}</p>
            <h1 className="text-white text-[30px] ml-100">❞</h1>
        </div>
        <div className=" flex flex-row p-3 gap-3">
            <img src={path} alt="" className="h-10 rounded-full object-cover " />
            <div className="flex flex-col -mt-2">
                <h2 className="text-white text-[15px] font-medium mt-2">{authorName}</h2>
                <p className="text-[rgba(255,255,255,0.6)] text-[12px]">{Post}</p>
            </div>
        </div>
       
        
    </div>
  );
}
export default TestimonialsCards;
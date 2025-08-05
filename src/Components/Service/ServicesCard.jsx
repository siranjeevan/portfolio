function ServicesCard({ path, ServiceTitle = "Service Title" , ServiceText }) {
  return (
    <div className="flex min-w-70 h-70 flex-col items-center justify-center bg-[rgba(10,4,10,0.47)] hover:bg-[rgba(232,92,239,0.63)] rounded-lg   shadow-lg snap-center duration-300">
      {/* <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/CardBg.png')",
            backgroundSize: "cover" ,
            // backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            opacity: 0.02,
          }}
        /> */}
        <img src={path} className="h-16 mb-4" alt={ServiceTitle} />
        <h2 className="text-white text-[17px] font-semibold">{ServiceTitle}</h2>
        <div className=" text-white p-4 flex items-center justify-center">
          <p className="text-[15px] w-65 text-center font-extralight">{ServiceText}</p>
        </div>
      </div>
  );
}

export default ServicesCard;

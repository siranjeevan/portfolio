function Navigation() {
  return (
    <div className="text-white flex flex-row
      text-[5px] gap-7
      sm:text-[12px]  sm:gap-7
      md:text-[12px] md:gap-10 md:ml-10
      lg:text-[15px] lg:gap-13 lg:ml-10
      xl:text-[17px] xl:gap-17  xl:ml-70
      2xl:text-[30px] 2xl:gap-30 2xl:ml-120
     ">
      <button className=" p-2 rounded-[10px]" >Home </button>
      <button> Services</button>
      <button >My Projects </button>
      <button >Review </button>
      <button >Contact</button>
    </div>
  );
}
export default Navigation;
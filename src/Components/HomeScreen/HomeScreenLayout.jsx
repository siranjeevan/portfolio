function HomeScreenLayout({ children }) {
  return (
    <div className="w-auto h-175 bg-gradient-to-br from-[#15001b] via-[#15001b] to-[#ad48b2]">
      <div className="relative w-full h-screen overflow-hidden">

        {/* Background with inline style */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/bg1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.1,
          }}
        />

        {/* Content on top */}
        <div className="relative z-10">
          {children}
        </div>

      </div>
    </div>
  );
}
export default HomeScreenLayout;
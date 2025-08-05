function ServicesCard({ path, ServiceTitle = "Service Title" }) {
  return (
    <div className="flex min-w-70 h-80 flex-col items-center justify-center bg-[rgba(10,4,10,0.47)] hover:bg-[rgba(232,92,239,0.63)] rounded-lg shadow-lg snap-center transition duration-300">
        <img src={path} className="h-16 mb-4" alt={ServiceTitle} />
    </div>
  );
}

export default ServicesCard;

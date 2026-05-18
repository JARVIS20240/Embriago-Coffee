export default function Marquee() {
  const items = [
    "Locally Roasted",
    "LES Favorite",
    "Artisan Pastries",
    "Jazz Evenings",
    "Community Focused"
  ];
  
  return (
    <div className="relative flex overflow-hidden bg-[#F9F6F0] py-8">
      {/* Left Fade Overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F9F6F0] to-transparent z-10 pointer-events-none"></div>
      
      {/* Right Fade Overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F9F6F0] to-transparent z-10 pointer-events-none"></div>

      <div className="flex space-x-4 animate-marquee whitespace-nowrap pr-4">
        {items.map((item, index) => (
          <span 
            key={`orig-${index}`} 
            className="px-6 py-2.5 bg-[#efe7dd] border border-[#3B2B20]/5 rounded-full text-[#3B2B20] font-sans text-sm md:text-base font-medium flex-shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex space-x-4 animate-marquee whitespace-nowrap pr-4">
        {items.map((item, index) => (
          <span 
            key={`dup-${index}`} 
            className="px-6 py-2.5 bg-[#efe7dd] border border-[#3B2B20]/5 rounded-full text-[#3B2B20] font-sans text-sm md:text-base font-medium flex-shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex space-x-4 animate-marquee whitespace-nowrap pr-4">
        {items.map((item, index) => (
          <span 
            key={`dup2-${index}`} 
            className="px-6 py-2.5 bg-[#efe7dd] border border-[#3B2B20]/5 rounded-full text-[#3B2B20] font-sans text-sm md:text-base font-medium flex-shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

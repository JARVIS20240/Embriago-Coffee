import businessData from "@/data/business.json";

export default function HeroSection() {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces"
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden bg-[#F9F6F0]">
      {/* Soft Background Stripes (mimicking folds) */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(59, 43, 32, 0.02) 80px, rgba(59, 43, 32, 0.02) 160px)"
        }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Avatars */}
        <div className="flex items-center justify-center -space-x-3 mb-8">
          {avatars.map((src, idx) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img 
              key={idx}
              src={src}
              alt={`Customer ${idx + 1}`}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full border-[3px] border-[#F9F6F0] object-cover shadow-sm"
              loading="lazy"
            />
          ))}
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-[5.5rem] font-serif text-[#3B2B20] font-bold mb-6 leading-[1.05] tracking-tight">
          Your Cozy Corner <br /> on Rivington.
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[#3B2B20]/80 font-sans max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
          Serving exceptional coffee and warm vibes in the Lower East Side. Rated 4.9 stars by our community.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a 
            href="#menu" 
            className="px-8 py-4 bg-[#3B2B20] text-[#F9F6F0] rounded-full font-medium text-[15px] hover:bg-[#3B2B20]/90 transition-colors shadow-sm"
          >
            View Menu
          </a>
          <a 
            href="#location" 
            className="px-8 py-4 bg-transparent border border-[#3B2B20]/15 text-[#3B2B20] rounded-full font-medium text-[15px] hover:bg-[#3B2B20]/5 transition-colors"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}

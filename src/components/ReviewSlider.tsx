import { Star } from "lucide-react";

export default function ReviewSlider() {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces"
  ];

  return (
    <section id="reviews" className="py-24 bg-[#3B2B20] px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#a69b8d] rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center">
          
          {/* Pill Badge */}
          <div className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full flex items-center gap-2 mb-8 shadow-sm">
            <Star className="w-5 h-5 fill-[#D4A373] text-[#D4A373]" />
            <span className="font-bold text-[#3B2B20]">4.9/5 Average Rating</span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-7xl font-serif text-[#F9F6F0] font-bold mb-12 max-w-3xl leading-tight">
            Loved by Locals and Travelers Alike
          </h2>

          {/* Overlapping Avatars */}
          <div className="flex items-center justify-center -space-x-4 mb-8">
            {avatars.map((src, idx) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img 
                key={idx}
                src={src}
                alt={`Customer ${idx + 1}`}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-[#a69b8d] object-cover"
                loading="lazy"
              />
            ))}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-[#a69b8d] bg-[#F9F6F0] flex items-center justify-center text-[#3B2B20] font-bold text-lg z-10">
              1k+
            </div>
          </div>

          <p className="text-[#F9F6F0]/90 font-sans text-lg md:text-xl max-w-2xl">
            "The best coffee experience in the Lower East Side. Every cup is brewed to perfection, and the pastries are out of this world."
          </p>

        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight, Star } from "lucide-react";
import menuData from "@/data/menu.json";

export default function MenuList() {
  // Flatten items for the horizontal scroll
  const allItems = menuData.categories.flatMap(cat =>
    cat.items.map(item => ({ ...item, category: cat.name }))
  );

  // Fallback images
  const defaultImages = [
    "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop"
  ];

  return (
    <section id="menu" className="py-24 bg-[#F9F6F0] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-12 flex justify-between items-end">
          <h2 className="text-5xl font-serif text-[#3B2B20] font-bold">Our Coffee & Bites</h2>
          <div className="hidden md:flex gap-4">
            <button className="w-12 h-12 rounded-full border border-[#3B2B20]/20 flex items-center justify-center text-[#3B2B20] hover:bg-[#3B2B20] hover:text-[#F9F6F0] transition-colors" aria-label="Previous">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button className="w-12 h-12 rounded-full border border-[#3B2B20]/20 flex items-center justify-center text-[#3B2B20] hover:bg-[#3B2B20] hover:text-[#F9F6F0] transition-colors" aria-label="Next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
          {allItems.map((item, index) => (
            <div
              key={item.id}
              className="w-[280px] min-w-[280px] sm:w-[320px] sm:min-w-[320px] md:w-[400px] md:min-w-[400px] h-auto flex flex-col bg-[#efe7dd] rounded-[2.5rem] p-4 flex-shrink-0 snap-start"
            >
              {/* Image Container */}
              <div className="relative h-64 mb-6 rounded-[2rem] overflow-hidden flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={defaultImages[index % defaultImages.length]}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Action Button */}
                <button className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#3B2B20] hover:bg-[#D4A373] transition-colors">
                  <ArrowUpRight className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="px-4 pb-4 flex flex-col flex-grow">
                <div>
                  <span className="inline-block px-4 py-1.5 bg-white/60 rounded-full text-xs font-bold uppercase tracking-wider text-[#3B2B20] mb-4">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-serif text-3xl font-bold text-[#3B2B20] mb-3">{item.name}</h3>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4A373] text-[#D4A373]" />
                  ))}
                  <span className="text-sm text-[#3B2B20]/60 ml-2 font-medium">(120)</span>
                </div>

                <div className="flex justify-between items-center mt-auto pt-4 border-t border-[#3B2B20]/10">
                  <span className="text-[#3B2B20]/70 text-sm truncate max-w-[150px] md:max-w-[200px]" title={item.description}>{item.description}</span>
                  <span className="text-2xl font-bold text-[#3B2B20]">${item.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

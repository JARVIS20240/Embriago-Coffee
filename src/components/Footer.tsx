import businessData from "@/data/business.json";
import FooterHours from "./FooterHours";
export default function Footer() {
  return (
    <footer id="location" className="bg-[#F9F6F0] text-[#3B2B20] pt-24 px-4 overflow-hidden">

      {/* Stay Connected Card */}
      <div className="max-w-5xl mx-auto bg-[#a69b8d] rounded-[3rem] p-12 md:p-20 text-center mb-24 shadow-sm">
        <h2 className="text-4xl md:text-6xl font-serif text-[#F9F6F0] font-bold mb-8">Stay Connected</h2>
        <div className="max-w-md mx-auto flex gap-2 bg-[#F9F6F0]/20 p-2 rounded-full backdrop-blur-sm border border-[#F9F6F0]/30">
          <input
            type="email"
            placeholder="Enter your email..."
            className="flex-grow bg-transparent px-6 py-3 text-[#F9F6F0] placeholder-[#F9F6F0]/70 outline-none rounded-full"
          />
          <button className="bg-[#3B2B20] text-[#F9F6F0] px-8 py-3 rounded-full font-bold hover:bg-[#3B2B20]/80 transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* 3-Column Visit Us Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-24">
        {/* Column 1: Header */}
        <div>
          <h2 className="font-serif text-5xl font-bold mb-4">Visit Us</h2>
          <p className="text-[#3B2B20]/70 text-base font-sans">We'd love to serve you the perfect cup.</p>
        </div>

        {/* Column 2: Address */}
        <div>
          <h3 className="font-bold text-lg mb-3 font-sans uppercase tracking-wider text-[#D4A373]">Location</h3>
          <p className="font-sans text-xl font-medium mb-6 leading-relaxed">
            {businessData.address.street},<br />
            {businessData.address.city}, {businessData.address.state} {businessData.address.zip}
          </p>
          <a
            href={businessData.address.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#D4A373] text-[#3B2B20] rounded-full font-medium text-sm hover:bg-[#D4A373]/90 transition-colors shadow-sm"
          >
            Get Directions
          </a>
        </div>

        {/* Column 3: Hours */}
        <FooterHours />
      </div>

      {/* Massive Bottom Branding */}
      <div className="border-t border-[#3B2B20]/10 pt-12 pb-6 flex flex-col items-center">
        <h1 className="text-[12vw] font-serif font-bold tracking-tight leading-[1.15] text-[#3B2B20] whitespace-nowrap text-center w-full pb-4">
          {businessData.name}
        </h1>
        <div className="w-full max-w-6xl flex justify-between items-center mt-8 px-4">
          <p className="text-[#3B2B20]/50 text-sm font-sans">
            &copy; {new Date().getFullYear()} {businessData.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/embriagocoffee/" target="_blank" rel="noopener noreferrer" className="text-[#3B2B20]/50 hover:text-[#3B2B20] text-sm">Instagram</a>
            <a href="#" className="text-[#3B2B20]/50 hover:text-[#3B2B20] text-sm">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

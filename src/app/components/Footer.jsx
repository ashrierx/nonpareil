// Footer.jsx
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <div className="border-t-4 border-[#0066cc] bg-linear-to-r from-[#6699cc] to-[#336699] py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white text-sm">
            © 2026 Nonpareil • Made with <Heart className="inline h-4 w-4 text-[#ff3366] fill-[#ff3366]" /> • Thanks for visiting!
          </p>
          {/* <div className="flex justify-center gap-3 mt-2">
            <button onClick={() => setCurrentPage('home')} className="text-[#d4e1f0] text-xs hover:text-white">Home</button>
            <span className="text-[#d4e1f0] text-xs">•</span>
            <button onClick={() => setCurrentPage('about')} className="text-[#d4e1f0] text-xs hover:text-white">About</button>
            <span className="text-[#d4e1f0] text-xs">•</span>
            <span className="text-[#d4e1f0] text-xs">Help</span>
          </div> */}
        </div>
      </div>
  )
}
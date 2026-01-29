// app/about/page.tsx

import { Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white border-4 border-[#0066cc] shadow-[4px_4px_0px_0px_rgba(0,102,204,0.3)]">
        <div className="bg-linear-to-r from-[#6699cc] to-[#336699] p-4 border-b-2 border-[#0066cc]">
          <div className="flex items-center gap-3">
            <Award className="h-8 w-8 text-[#ffcc00] fill-[#ffcc00]" />
            <div>
              <h1 className="text-white font-bold text-2xl">About Nonpareil</h1>
              <p className="text-[#d4e1f0] text-sm">Having no equal; peerless</p>
            </div>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <h2 className="text-[#0066cc] font-bold text-xl mb-3">What is Nonpareil?</h2>
            <p className="text-[#333333] mb-3">
              <span className="font-bold text-[#0066cc]">Nonpareil</span> means "having no equal" or "peerless" - 
              a person or thing that has no match. We believe everyone's favorites are unique and incomparable, 
              which is why we created this platform to help you organize and share what matters most to you.
            </p>
            <p className="text-[#333333]">
              In a world full of rankings and recommendations, your Top 5 lists represent what truly resonates 
              with <span className="italic">you</span>. Whether it's movies that made you cry, songs that get 
              you moving, or places that took your breath away - your lists are nonpareil.
            </p>
          </div>

          <div className="border-t-2 border-[#0066cc] pt-6">
            <h2 className="text-[#0066cc] font-bold text-xl mb-3">Our Mission</h2>
            <p className="text-[#333333] mb-3">
              We're bringing back the joy of personal expression from the golden age of social media. 
              Remember when profiles were colorful, creativity was encouraged, and your Top 8 friends 
              actually meant something?
            </p>
            <p className="text-[#333333]">
              Nonpareil is here to help you curate, organize, and celebrate your favorite things - 
              with a nostalgic twist and modern AI-powered suggestions to discover new favorites.
            </p>
          </div>

          <div className="border-t-2 border-[#0066cc] pt-6">
            <h2 className="text-[#0066cc] font-bold text-xl mb-3">Features</h2>
            <ul className="space-y-2 text-[#333333]">
              <li className="flex items-start gap-2">
                <span className="text-[#0066cc] font-bold">✓</span>
                <span>Create unlimited Top 5 lists for any category you can imagine</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0066cc] font-bold">✓</span>
                <span>AI-powered suggestions to help you discover new favorites</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0066cc] font-bold">✓</span>
                <span>Customize your profile with your own style and personality</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0066cc] font-bold">✓</span>
                <span>Nostalgic design that brings back the best of early social media</span>
              </li>
            </ul>
          </div>

          <div className="border-t-2 border-[#0066cc] pt-6 bg-gradient-to-r from-[#e8f0ff] to-[#d4e1f0] p-4 border-2 border-[#0066cc]">
            <h3 className="text-[#0066cc] font-bold text-lg mb-2">Get Started</h3>
            <p className="text-[#333333]">
              Ready to create your nonpareil lists? Head back to the home page and start adding 
              your favorite categories. Don't forget to customize your profile and make it truly yours!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

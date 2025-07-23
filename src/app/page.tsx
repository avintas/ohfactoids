"use client";

import { useState } from "react";
import { Home as HomeIcon, Archive, Info } from "lucide-react";
import { Factoid } from "@/components/Factoid";
import { LiveUpdatesBanner } from "@/components/LiveUpdatesBanner";
import { PrivacyModal } from "@/components/PrivacyModal";
import { TermsModal } from "@/components/TermsModal";
import { ContactModal } from "@/components/ContactModal";
import { factoids } from "@/data/factoids";

export default function Home() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPrivacyModalOpen(true);
  };

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsTermsModalOpen(true);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Container - 60% width, centered */}
      <div className="w-3/5 mx-auto max-w-4xl">
        
        {/* Header */}
        <header className="text-center py-4">
          <h1 className="text-3xl font-bold text-blue-600 mb-4 tracking-wider">
            ONLY HOCKEY
          </h1>
          
          {/* Navigation */}
          <nav className="flex justify-center gap-8">
            <a href="#home" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
              <HomeIcon size={16} />
              Home
            </a>
            <a href="#about" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
              <Info size={16} />
              About
            </a>
            <a href="#archive" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
              <Archive size={16} />
              Archive
            </a>
          </nav>
        </header>

        {/* Live Updates Banner */}
        <div className="mb-4">
          <LiveUpdatesBanner />
        </div>

        {/* Today's Lineup Section */}
        <section className="py-2">
          <h2 className="text-2xl text-purple-600 text-center mb-4 font-normal">
            Today&apos;s Lineup
          </h2>
          
          {/* Factoids List */}
          <div className="space-y-1">
            {factoids.map((factoid) => (
              <Factoid key={factoid.id} factoid={factoid} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-navy-900 text-white py-6 mt-6 rounded-lg">
          <div className="text-center">
            <div className="mb-3">
              <h3 className="text-lg font-bold text-orange-400 mb-2">ONLY HOCKEY</h3>
              <p className="text-gray-300 text-sm">Your daily dose of hockey wisdom</p>
            </div>
            
            <div className="flex justify-center gap-6 text-sm text-gray-400">
              <a 
                href="#privacy" 
                onClick={handlePrivacyClick}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy
              </a>
              <a 
                href="#terms" 
                onClick={handleTermsClick}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Terms
              </a>
              <a 
                href="#contact" 
                onClick={handleContactClick}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Contact
              </a>
            </div>
            
            <div className="mt-4 text-xs text-gray-500">
              © 2025 Only Hockey. All rights reserved.
            </div>
          </div>
        </footer>
      </div>

      {/* Privacy Modal */}
      <PrivacyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />

      {/* Terms Modal */}
      <TermsModal 
        isOpen={isTermsModalOpen} 
        onClose={() => setIsTermsModalOpen(false)} 
      />

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}

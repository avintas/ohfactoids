"use client";

import { useState } from "react";
import { Home as HomeIcon, Archive, Info } from "lucide-react";
import { Factoid } from "@/components/Factoid";
import { EcommerceFactoid } from "@/components/EcommerceFactoid";
import { LiveUpdatesBanner } from "@/components/LiveUpdatesBanner";
import { PrivacyModal } from "@/components/PrivacyModal";
import { TermsModal } from "@/components/TermsModal";
import { ContactModal } from "@/components/ContactModal";
import { factoids } from "@/data/factoids";
import { FactoidData } from "@/types";

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

  const renderFactoid = (factoid: FactoidData) => {
    if (factoid.badge.text === "SHOP") {
      return <EcommerceFactoid key={factoid.id} {...factoid} />;
    }
    return <Factoid key={factoid.id} factoid={factoid} />;
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
        </header>

        {/* Live Updates Banner */}
        <div className="mb-4">
          <LiveUpdatesBanner />
        </div>

        {/* Factoids List */}
        <div className="space-y-1">
          {factoids.map((factoid) => renderFactoid(factoid))}
        </div>

        {/* Footer */}
        <footer className="bg-navy-900 text-white py-8 mt-6 rounded-lg">
          <div className="text-center">
            {/* Brand Section */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-orange-400 mb-2">ONLY HOCKEY</h3>
              <p className="text-gray-300 text-sm">Your daily dose of hockey wisdom</p>
            </div>
            
            {/* Navigation and Legal Links */}
            <div className="mb-4">
              <div className="flex justify-center gap-8 text-sm">
                <a href="#home" className="footer-link flex items-center gap-2">
                  <HomeIcon size={16} />
                  Home
                </a>
                <a href="#about" className="footer-link flex items-center gap-2">
                  <Info size={16} />
                  About
                </a>
                <a href="#archive" className="footer-link flex items-center gap-2">
                  <Archive size={16} />
                  Archive
                </a>
                <span className="text-gray-600">|</span>
                <a 
                  href="#privacy" 
                  onClick={handlePrivacyClick}
                  className="footer-link cursor-pointer"
                >
                  Privacy
                </a>
                <a 
                  href="#terms" 
                  onClick={handleTermsClick}
                  className="footer-link cursor-pointer"
                >
                  Terms
                </a>
                <a 
                  href="#contact" 
                  onClick={handleContactClick}
                  className="footer-link cursor-pointer"
                >
                  Contact
                </a>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-xs text-gray-500 border-t border-gray-700 pt-4">
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

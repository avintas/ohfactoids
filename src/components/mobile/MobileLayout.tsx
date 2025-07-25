import { useState } from "react";
import { Home as HomeIcon, Archive, Info, Search, User, ShoppingBag, Ticket, Globe, Menu } from "lucide-react";
import { Factoid } from "@/components/Factoid";
import { EcommerceFactoid } from "@/components/EcommerceFactoid";
import { FactoidCard } from "@/components/FactoidCard";

import { PrivacyModal } from "@/components/PrivacyModal";
import { TermsModal } from "@/components/TermsModal";
import { ContactModal } from "@/components/ContactModal";
import { factoids } from "@/data/factoids";
import { FactoidData } from "@/types";

export function MobileLayout() {
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
    return <FactoidCard key={factoid.id} {...factoid} />;
  };

  return (
    <div className="min-h-screen bg-gray-100">
        {/* Mobile Header - Compact */}
        <header className="text-center py-2">
          <h1 className="text-2xl font-bold text-navy-900 mb-2 tracking-wider font-inter">
            ONLYHOCKEY
          </h1>
        </header>

      {/* Mobile Container - Full width */}
      <div className="w-full px-4 py-2">
        


        {/* Mobile Factoids List - Tighter spacing */}
        <div className="space-y-2">
          {factoids.map((factoid) => renderFactoid(factoid))}
        </div>

        {/* Mobile Footer - Compact */}
        <footer className="bg-navy-900 text-white py-6 mt-4 rounded-lg">
          <div className="text-center">
            {/* Brand Section */}
            <div className="mb-4">
              <h3 className="text-lg font-bold text-orange-400 mb-1">ONLY HOCKEY</h3>
              <p className="text-gray-300 text-xs">Your daily dose of hockey wisdom</p>
            </div>
            
            {/* Navigation and Legal Links - Stacked for mobile */}
            <div className="mb-3">
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex justify-center gap-4">
                  <a href="#home" className="footer-link flex items-center gap-1">
                    <HomeIcon size={14} />
                    Home
                  </a>
                  <a href="#about" className="footer-link flex items-center gap-1">
                    <Info size={14} />
                    About
                  </a>
                  <a href="#archive" className="footer-link flex items-center gap-1">
                    <Archive size={14} />
                    Archive
                  </a>
                </div>
                <div className="flex justify-center gap-4">
                  <a 
                    href="#privacy" 
                    onClick={handlePrivacyClick}
                    className="footer-link-legal text-xs"
                  >
                    Privacy
                  </a>
                  <a 
                    href="#terms" 
                    onClick={handleTermsClick}
                    className="footer-link-legal text-xs"
                  >
                    Terms
                  </a>
                  <a 
                    href="#contact" 
                    onClick={handleContactClick}
                    className="footer-link-legal text-xs"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-xs text-gray-500 border-t border-gray-700 pt-3">
              © 2025 Only Hockey. All rights reserved.
            </div>
          </div>
        </footer>
      </div>

      {/* Modals */}
      <PrivacyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
      <TermsModal 
        isOpen={isTermsModalOpen} 
        onClose={() => setIsTermsModalOpen(false)} 
      />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
} 
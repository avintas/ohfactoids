import { useState } from "react";
import { Home as HomeIcon, Archive, Info, Search, Filter, User, ShoppingBag, Ticket, Globe, Menu } from "lucide-react";
import { Factoid } from "@/components/Factoid";
import { EcommerceFactoid } from "@/components/EcommerceFactoid";
import { FactoidCard } from "@/components/FactoidCard";

import { PrivacyModal } from "@/components/PrivacyModal";
import { TermsModal } from "@/components/TermsModal";
import { ContactModal } from "@/components/ContactModal";
import { factoids } from "@/data/factoids";
import { FactoidData } from "@/types";

export function DesktopLayout() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

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
        {/* Desktop Header - Enhanced */}
        <header className="text-center py-6">
          <h1 className="text-4xl font-bold text-navy-900 mb-2 tracking-wider font-inter">
            ONLYHOCKEY
          </h1>
          <p className="text-gray-600 text-lg">Your daily dose of hockey wisdom</p>
        </header>

      {/* Desktop Container - 60% width with max-width */}
      <div className="w-full md:w-3/5 mx-auto max-w-4xl px-4 md:px-0">
        
        {/* Desktop Search and Filter Bar */}
        <div className="mb-6 flex gap-4 items-center justify-center mt-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search factoids..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="all">All Categories</option>
              <option value="philosophy">Philosophy</option>
              <option value="travel">Travel</option>
              <option value="geography">Geography</option>
              <option value="calendar">Calendar</option>
              <option value="shop">Shop</option>
            </select>
          </div>
        </div>



        {/* Desktop Factoids List - Enhanced spacing */}
        <div className="space-y-3">
          {factoids.map((factoid) => renderFactoid(factoid))}
        </div>

        {/* Desktop Footer - Enhanced */}
        <footer className="bg-navy-900 text-white py-10 mt-8 rounded-lg">
          <div className="text-center">
            {/* Brand Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-orange-400 mb-3">ONLY HOCKEY</h3>
              <p className="text-gray-300 text-base">Your daily dose of hockey wisdom</p>
            </div>
            
            {/* Navigation and Legal Links - Horizontal layout */}
            <div className="mb-6">
              <div className="flex justify-center gap-8 text-base">
                <a href="#home" className="footer-link flex items-center gap-2 hover:text-orange-400 transition-colors">
                  <HomeIcon size={18} />
                  Home
                </a>
                <a href="#about" className="footer-link flex items-center gap-2 hover:text-orange-400 transition-colors">
                  <Info size={18} />
                  About
                </a>
                <a href="#archive" className="footer-link flex items-center gap-2 hover:text-orange-400 transition-colors">
                  <Archive size={18} />
                  Archive
                </a>
                <span className="text-gray-600">|</span>
                <a 
                  href="#privacy" 
                  onClick={handlePrivacyClick}
                  className="footer-link-legal hover:text-orange-400 transition-colors"
                >
                  Privacy
                </a>
                <a 
                  href="#terms" 
                  onClick={handleTermsClick}
                  className="footer-link-legal hover:text-orange-400 transition-colors"
                >
                  Terms
                </a>
                <a 
                  href="#contact" 
                  onClick={handleContactClick}
                  className="footer-link-legal hover:text-orange-400 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-sm text-gray-500 border-t border-gray-700 pt-6">
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
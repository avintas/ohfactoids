"use client";

import { X, Mail, Phone, MapPin } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Contact Us</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="text-sm text-gray-600 space-y-4">
          <p>
            <strong>Get in Touch</strong>
          </p>
          <p>
            Have questions about hockey facts, want to contribute content, or just want to say hello? We'd love to hear from you!
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-blue-600" />
              <span>hello@onlyhockey.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-blue-600" />
              <span>+1 (555) HOCKEY-1</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-blue-600" />
              <span>Hockey Town, USA</span>
            </div>
          </div>
          
          <div className="border-t pt-4">
            <p className="font-semibold mb-2">Quick Contact Form:</p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm resize-none"
              ></textarea>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            We typically respond within 24 hours during business days.
          </p>
        </div>
      </div>
    </div>
  );
} 
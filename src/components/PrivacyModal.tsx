"use client";

import { X } from "lucide-react";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Privacy Policy</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="text-sm text-gray-600 space-y-3">
          <p>
            <strong>Only Hockey Privacy Policy</strong>
          </p>
          <p>
            This privacy policy describes how Only Hockey (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects your information when you visit our website.
          </p>
          <p>
            <strong>Information We Collect:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Usage data and analytics</li>
            <li>Device information</li>
            <li>Cookies and similar technologies</li>
          </ul>
          <p>
            <strong>How We Use Your Information:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>To provide and maintain our service</li>
            <li>To improve user experience</li>
            <li>To analyze usage patterns</li>
          </ul>
          <p>
            <strong>Data Protection:</strong>
          </p>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
          <p>
            <strong>Contact Us:</strong>
          </p>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@onlyhockey.com
          </p>
          <p className="text-xs text-gray-500 mt-4">
            Last updated: January 2025
          </p>
        </div>
      </div>
    </div>
  );
} 
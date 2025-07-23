"use client";

import { X } from "lucide-react";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Terms of Service</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="text-sm text-gray-600 space-y-3">
          <p>
            <strong>Only Hockey Terms of Service</strong>
          </p>
          <p>
            By accessing and using Only Hockey (&quot;the Service&quot;), you accept and agree to be bound by the terms and provision of this agreement.
          </p>
          <p>
            <strong>Use License:</strong>
          </p>
          <p>
            Permission is granted to temporarily access the materials on Only Hockey&apos;s website for personal, non-commercial transitory viewing only.
          </p>
          <p>
            <strong>Restrictions:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Modify or copy the materials</li>
            <li>Use for commercial purposes</li>
            <li>Remove any copyright or proprietary notations</li>
            <li>Transfer materials to another person</li>
          </ul>
          <p>
            <strong>Disclaimer:</strong>
          </p>
          <p>
            The materials on Only Hockey&apos;s website are provided on an &apos;as is&apos; basis. Only Hockey makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p>
            <strong>Limitations:</strong>
          </p>
          <p>
            In no event shall Only Hockey or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Only Hockey&apos;s website.
          </p>
          <p className="text-xs text-gray-500 mt-4">
            Last updated: January 2025
          </p>
        </div>
      </div>
    </div>
  );
} 
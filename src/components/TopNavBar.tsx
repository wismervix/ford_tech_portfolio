import React, { useState } from "react";
import { Mail, Phone, Heart, Send, ShareIcon } from 'lucide-react';


export const TopNavBar: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Bedrock Human Development Foundation",
          text: "Empowering youth and transforming communities in West Africa.",
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-[#8c2623] text-white py-2 px-4 md:px-8 text-xs font-medium border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">

        <div className="flex items-center gap-6">
          <a
            href="mailto:info@bedrockgroup.org"
            className="flex items-center gap-1.5 hover:text-slate-200 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>info@bedrockgroup.org</span>
          </a>
          <a
            href="tel:+2347088613998"
            className="flex items-center gap-1.5 hover:text-slate-200 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>(+234) 708 861 3998</span>
          </a>
        </div>

        <div className="flex items-center gap-5">
          <button className="flex items-center gap-1 hover:underline font-semibold cursor-pointer">
            <Heart className="w-3.5 h-3.5 text-white fill-white/20" />
            <span>Donate</span>
          </button>
          <button className="flex items-center gap-1 hover:underline cursor-pointer">
            <Send className="w-3.5 h-3.5" />
            <span>Contact Us</span>
          </button>

          <div className="h-3 w-px bg-white/30 my-auto" />

          <div className="flex items-center gap-2 ml-2 border-l border-white/20 pl-4">
            <button
              onClick={handleShare}
              title="Share Website"
              className="hover:text-amber-200 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ShareIcon className="w-3.5 h-3.5" />
              {copied && (
                <span className="text-[10px] bg-white text-[#8c2623] px-1.5 py-0.5 rounded font-bold">
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

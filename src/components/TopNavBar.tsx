import { Mail } from 'lucide-react';
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaXTwitter 
} from "react-icons/fa6";



export const TopNavBar = () => {

  return (
    <div className="bg-primary text-white py-2 px-4 md:px-20 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-5 sm:gap-2">
        <div className="flex items-center gap-8">
          <p className="text-xs">Visit Our Social Pages</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-slate-200 transition-colors">
              <FaInstagram className="w-3 h-3" />
            </a>
            <a className="hover:text-slate-200 transition-colors">
              <FaFacebookF className="w-3 h-3" />
            </a>
            <a className="hover:text-slate-200 transition-colors">
              <FaXTwitter className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
          <a
            href="mailto:info@bedrockgroup.org"
            className="flex items-center gap-2 hover:text-slate-200 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>info@bedrockgroup.org</span>
          </a>

          <div className="hidden sm:block h-4.5 w-px bg-white/30 my-auto" />

          <a
            href="tel:+2347088613998"
            className="flex items-center gap-2 hover:text-slate-200 transition-colors"
          >
            <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
            <span>(+234) 708 861 3998</span>
          </a>
        </div>
      </div>
    </div>
  );
};

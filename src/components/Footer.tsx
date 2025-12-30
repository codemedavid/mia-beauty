import React from 'react';
import { MessageCircle, Heart, HelpCircle, Calculator, FileText, Truck, ClipboardCheck } from 'lucide-react';
import { useCOAPageSetting } from '../hooks/useCOAPageSetting';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { coaPageEnabled } = useCOAPageSetting();

  return (
    <footer className="bg-cream-100 border-t border-cream-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12">

          {/* Brand Section */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold-300 shadow-soft">
              <img
                src="/assets/logo.jpg"
                alt="MIA BEAUTY"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <div className="font-luxury text-2xl text-greige-900 tracking-wide">
                MIA BEAUTY
              </div>
              <div className="text-sm text-greige-500 tracking-wider uppercase">
                Premium Beauty & Wellness
              </div>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="hidden lg:block w-px h-16 bg-gradient-to-b from-transparent via-gold-300 to-transparent" />

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 justify-center md:justify-end">
            <a
              href="/track-order"
              className="text-greige-600 hover:text-gold-600 transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <Truck className="w-4 h-4" />
              Track Order
            </a>
            <a
              href="/calculator"
              className="text-greige-600 hover:text-gold-600 transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <Calculator className="w-4 h-4" />
              Calculator
            </a>
            {coaPageEnabled && (
              <a
                href="/coa"
                className="text-greige-600 hover:text-gold-600 transition-colors flex items-center gap-2 text-sm font-medium"
              >
                <FileText className="w-4 h-4" />
                Lab Tests
              </a>
            )}
            <a
              href="/faq"
              className="text-greige-600 hover:text-gold-600 transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <HelpCircle className="w-4 h-4" />
              FAQ
            </a>
            <a
              href="/assessment"
              className="text-greige-600 hover:text-gold-600 transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <ClipboardCheck className="w-4 h-4" />
              Assessment
            </a>
            <a
              href="https://t.me/+k3SfL4WjnMQ3NGRl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-greige-600 hover:text-gold-600 transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              Community
            </a>
          </div>

        </div>

        {/* Gold Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent mb-8" />

        {/* Footer Bottom */}
        <div className="text-center">
          <p className="text-sm text-greige-500 flex items-center justify-center gap-1.5">
            Crafted with
            <Heart className="w-4 h-4 text-gold-500 fill-gold-500" />
            © {currentYear} MIA BEAUTY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

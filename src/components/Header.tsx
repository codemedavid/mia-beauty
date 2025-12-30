import React, { useState } from 'react';
import { useCOAPageSetting } from '../hooks/useCOAPageSetting';
import { ShoppingCart, Menu, X, MessageCircle, Calculator, FileText, HelpCircle, Truck, ClipboardCheck } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick, onMenuClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { coaPageEnabled } = useCOAPageSetting();

  return (
    <>
      <header className="bg-cream-100 sticky top-0 z-50 border-b border-gold-200">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-5">
          <div className="flex items-center justify-between gap-4">
            {/* Logo and Brand */}
            <button
              onClick={() => { onMenuClick(); setMobileMenuOpen(false); }}
              className="flex items-center space-x-3 hover:opacity-80 transition-all group min-w-0 flex-1 max-w-[calc(100%-130px)] sm:max-w-none sm:flex-initial"
            >
              <div className="relative flex-shrink-0">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-gold-300 shadow-soft">
                  <img
                    src="/assets/logo.jpg"
                    alt="MIA BEAUTY"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-left min-w-0 flex-1">
                <h1 className="text-xl sm:text-2xl font-luxury text-greige-900 leading-tight whitespace-nowrap overflow-hidden text-ellipsis tracking-wide">
                  MIA BEAUTY
                </h1>
                <p className="text-xs text-greige-500 font-medium tracking-wider uppercase">
                  Premium Beauty & Wellness
                </p>
              </div>
            </button>

            {/* Right Side Navigation */}
            <div className="flex items-center gap-2 md:gap-4 ml-auto">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-2 lg:gap-5">
                <button
                  onClick={onMenuClick}
                  className="text-sm font-medium text-greige-600 hover:text-gold-600 transition-colors"
                >
                  Products
                </button>
                <a
                  href="/track-order"
                  className="text-sm font-medium text-greige-600 hover:text-gold-600 transition-colors flex items-center gap-1.5"
                >
                  <Truck className="w-4 h-4" />
                  Track Order
                </a>
                <a
                  href="/calculator"
                  className="text-sm font-medium text-greige-600 hover:text-gold-600 transition-colors flex items-center gap-1.5"
                >
                  <Calculator className="w-4 h-4" />
                  Calculator
                </a>
                {coaPageEnabled && (
                  <a
                    href="/coa"
                    className="text-sm font-medium text-greige-600 hover:text-gold-600 transition-colors flex items-center gap-1.5"
                  >
                    <FileText className="w-4 h-4" />
                    Lab Tests
                  </a>
                )}
                <a
                  href="/faq"
                  className="text-sm font-medium text-greige-600 hover:text-gold-600 transition-colors flex items-center gap-1.5"
                >
                  <HelpCircle className="w-4 h-4" />
                  FAQ
                </a>
                <a
                  href="/assessment"
                  className="text-sm font-medium text-greige-600 hover:text-gold-600 transition-colors flex items-center gap-1.5"
                >
                  <ClipboardCheck className="w-4 h-4" />
                  Assessment
                </a>
                <a
                  href="https://t.me/+k3SfL4WjnMQ3NGRl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-greige-600 hover:text-gold-600 transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  Community
                </a>
              </nav>

              {/* Cart Button */}
              <button
                onClick={onCartClick}
                className="relative p-2.5 text-greige-700 hover:text-gold-600 transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold-500 text-white text-[11px] font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1 shadow-sm">
                    {cartItemsCount > 99 ? '99+' : cartItemsCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-greige-700 hover:text-gold-600 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-greige-900/30 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sidebar Drawer */}
          <div
            className="absolute top-0 right-0 bottom-0 w-[280px] bg-cream-100 shadow-2xl border-l border-gold-200 flex flex-col animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-5 border-b border-cream-300 bg-cream-100">
              <span className="font-luxury text-xl text-greige-900">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 -mr-2 text-greige-500 hover:text-gold-600 transition-colors rounded-full hover:bg-cream-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 overflow-y-auto p-4 bg-cream-100">
              <div className="flex flex-col space-y-1">
                <button
                  onClick={() => {
                    onMenuClick();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 p-4 rounded-sm text-left font-medium text-base text-greige-700 hover:bg-cream-200 hover:text-gold-600 transition-all group"
                >
                  <div className="p-2 rounded-sm bg-cream-200 group-hover:bg-gold-100 border border-cream-300 group-hover:border-gold-300 transition-all">
                    <span className="w-5 h-5 text-gold-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    </span>
                  </div>
                  Products
                </button>
                <a
                  href="/track-order"
                  className="flex items-center gap-3 p-4 rounded-sm text-left font-medium text-base text-greige-700 hover:bg-cream-200 hover:text-gold-600 transition-all group"
                >
                  <div className="p-2 rounded-sm bg-cream-200 group-hover:bg-gold-100 border border-cream-300 group-hover:border-gold-300 transition-all">
                    <Truck className="w-5 h-5 text-gold-600" />
                  </div>
                  Track Order
                </a>
                <a
                  href="/calculator"
                  className="flex items-center gap-3 p-4 rounded-sm text-left font-medium text-base text-greige-700 hover:bg-cream-200 hover:text-gold-600 transition-all group"
                >
                  <div className="p-2 rounded-sm bg-cream-200 group-hover:bg-gold-100 border border-cream-300 group-hover:border-gold-300 transition-all">
                    <Calculator className="w-5 h-5 text-gold-600" />
                  </div>
                  Calculator
                </a>
                <a
                  href="/coa"
                  className="flex items-center gap-3 p-4 rounded-sm text-left font-medium text-base text-greige-700 hover:bg-cream-200 hover:text-gold-600 transition-all group"
                >
                  <div className="p-2 rounded-sm bg-cream-200 group-hover:bg-gold-100 border border-cream-300 group-hover:border-gold-300 transition-all">
                    <FileText className="w-5 h-5 text-gold-600" />
                  </div>
                  Lab Tests (COA)
                </a>
                <a
                  href="/faq"
                  className="flex items-center gap-3 p-4 rounded-sm text-left font-medium text-base text-greige-700 hover:bg-cream-200 hover:text-gold-600 transition-all group"
                >
                  <div className="p-2 rounded-sm bg-cream-200 group-hover:bg-gold-100 border border-cream-300 group-hover:border-gold-300 transition-all">
                    <HelpCircle className="w-5 h-5 text-gold-600" />
                  </div>
                  FAQ
                </a>
                <a
                  href="/assessment"
                  className="flex items-center gap-3 p-4 rounded-sm text-left font-medium text-base text-greige-700 hover:bg-cream-200 hover:text-gold-600 transition-all group"
                >
                  <div className="p-2 rounded-sm bg-cream-200 group-hover:bg-gold-100 border border-cream-300 group-hover:border-gold-300 transition-all">
                    <ClipboardCheck className="w-5 h-5 text-gold-600" />
                  </div>
                  Assessment
                </a>
                <a
                  href="https://t.me/+k3SfL4WjnMQ3NGRl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-sm text-left font-medium text-base text-greige-700 hover:bg-cream-200 hover:text-gold-600 transition-all group"
                >
                  <div className="p-2 rounded-sm bg-cream-200 group-hover:bg-gold-100 border border-cream-300 group-hover:border-gold-300 transition-all">
                    <MessageCircle className="w-5 h-5 text-gold-600" />
                  </div>
                  Join Community
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

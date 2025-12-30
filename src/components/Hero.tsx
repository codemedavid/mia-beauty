import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Truck, Clock, Sparkles, Star, Award } from 'lucide-react';
import { useSiteSettings } from '../hooks/useSiteSettings';

interface HeroProps {
  onShopAll: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopAll }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { siteSettings } = useSiteSettings();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Use settings or fallbacks if loading/missing
  const badgeText = siteSettings?.hero_badge_text || 'Premium Beauty & Wellness';
  const description = siteSettings?.hero_description || 'Elevated beauty rooted in simplicity, softness, and refined confidence. Premium peptides and beauty solutions for your self-care ritual.';

  return (
    <div className="relative min-h-[85vh] bg-cream-100 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top gold accent line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

        {/* Soft floating orbs */}
        <div className="absolute top-20 right-[15%] w-80 h-80 bg-gradient-to-br from-blush-200/40 to-blush-300/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 left-[10%] w-64 h-64 bg-gradient-to-br from-gold-200/30 to-gold-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 right-[25%] w-72 h-72 bg-gradient-to-br from-cream-300/50 to-blush-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

        {/* Elegant grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2DED8_1px,transparent_1px),linear-gradient(to_bottom,#E2DED8_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-20" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36 z-10">
        <div className="max-w-4xl mx-auto">

          {/* Content */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            {/* Badge */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-sm bg-white/60 backdrop-blur-sm border border-gold-200 shadow-soft">
                <Star className="w-4 h-4 text-gold-500" />
                <span className="text-sm font-medium tracking-widest uppercase text-gold-700">
                  {badgeText}
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-luxury text-greige-900 leading-[1.15] mb-8 tracking-wide">
                Elevate Your
                <br />
                <span className="relative inline-block mt-2">
                  <span className="text-gold-600">
                    Beauty Ritual
                  </span>
                  <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M0 4 Q50 0 100 4 T200 4" stroke="#D6B87C" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-greige-600 max-w-2xl mx-auto leading-relaxed font-light">
                {description}
              </p>
            </div>

            {/* Decorative Gold Divider */}
            <div className="flex justify-center mb-12">
              <div className="flex items-center gap-4">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-400" />
                <Sparkles className="w-5 h-5 text-gold-500" />
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-400" />
              </div>
            </div>

            {/* Feature Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14 max-w-3xl mx-auto">
              <div className="group flex flex-col items-center gap-3 p-6 bg-white/50 backdrop-blur-sm rounded-sm border border-cream-300 hover:border-gold-300 transition-all duration-300 hover:shadow-soft">
                <div className="p-3 bg-gold-50 rounded-sm border border-gold-200 group-hover:bg-gold-100 transition-colors">
                  <ShieldCheck className="w-6 h-6 text-gold-600" />
                </div>
                <div className="text-center">
                  <p className="font-medium text-greige-800 text-sm">Lab Tested</p>
                  <p className="text-xs text-greige-500 mt-0.5">99%+ Purity</p>
                </div>
              </div>

              <div className="group flex flex-col items-center gap-3 p-6 bg-white/50 backdrop-blur-sm rounded-sm border border-cream-300 hover:border-gold-300 transition-all duration-300 hover:shadow-soft">
                <div className="p-3 bg-blush-100 rounded-sm border border-blush-200 group-hover:bg-blush-200 transition-colors">
                  <Award className="w-6 h-6 text-gold-600" />
                </div>
                <div className="text-center">
                  <p className="font-medium text-greige-800 text-sm">Premium Quality</p>
                  <p className="text-xs text-greige-500 mt-0.5">Trusted Formula</p>
                </div>
              </div>

              <div className="group flex flex-col items-center gap-3 p-6 bg-white/50 backdrop-blur-sm rounded-sm border border-cream-300 hover:border-gold-300 transition-all duration-300 hover:shadow-soft">
                <div className="p-3 bg-cream-200 rounded-sm border border-cream-400 group-hover:bg-cream-300 transition-colors">
                  <Truck className="w-6 h-6 text-gold-600" />
                </div>
                <div className="text-center">
                  <p className="font-medium text-greige-800 text-sm">Fast Shipping</p>
                  <p className="text-xs text-greige-500 mt-0.5">Secure Delivery</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mb-16">
              <button
                onClick={onShopAll}
                className="group relative px-12 py-5 bg-gold-500 text-white rounded-sm font-medium text-lg shadow-gold hover:bg-gold-600 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                <span className="relative flex items-center justify-center gap-3">
                  Explore Collection
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-10 border-t border-cream-300">
              <div className="flex items-center gap-2.5 text-sm text-greige-600">
                <div className="p-1.5 bg-gold-50 rounded-sm border border-gold-200">
                  <Truck className="w-4 h-4 text-gold-600" />
                </div>
                <span>Fast Shipping</span>
              </div>
              <div className="w-px h-5 bg-cream-400" />
              <div className="flex items-center gap-2.5 text-sm text-greige-600">
                <div className="p-1.5 bg-gold-50 rounded-sm border border-gold-200">
                  <Clock className="w-4 h-4 text-gold-600" />
                </div>
                <span>24/7 Support</span>
              </div>
              <div className="w-px h-5 bg-cream-400 hidden sm:block" />
              <div className="flex items-center gap-2.5 text-sm text-greige-600">
                <div className="p-1.5 bg-gold-50 rounded-sm border border-gold-200">
                  <ShieldCheck className="w-4 h-4 text-gold-600" />
                </div>
                <span>Secure Checkout</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

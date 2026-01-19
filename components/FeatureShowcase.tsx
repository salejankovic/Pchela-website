
import React from 'react';
import { FEATURES } from '../constants';
import { Section } from './ui/Section';
import { Check } from 'lucide-react';

export const FeatureShowcase: React.FC = () => {
  return (
    <section id="features" className="bg-[#0a0a0a] py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Section>
            <div className="text-center mb-32">
                <h4 className="text-[11px] font-black text-[#f5a623] uppercase tracking-[0.3em] mb-4">Platform Capabilities</h4>
                <h2 className="text-5xl sm:text-7xl font-black text-white tracking-tighter">Pchela in action</h2>
            </div>
        </Section>

        <div className="space-y-32 sm:space-y-56">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <Section key={feature.id} className={`flex flex-col lg:flex-row gap-20 lg:gap-32 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Text Content */}
                <div className="flex-1 space-y-8 text-left">
                  <div className="flex items-center space-x-4 mb-6">
                     <div className="p-4 bg-[#f5a623]/10 border border-[#f5a623]/20 rounded-2xl">
                        <Icon className="w-10 h-10 text-[#f5a623]" />
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Module {index + 1}</span>
                  </div>
                  
                  <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">{feature.title}</h3>
                  <p className="text-xl text-gray-400 font-light leading-relaxed">{feature.subtitle}</p>
                  
                  <ul className="space-y-5 pt-4">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start space-x-4">
                        <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#f5a623]/10 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 text-[#f5a623]" />
                        </div>
                        <span className="text-gray-300 leading-relaxed font-light">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Content */}
                <div className="flex-1 w-full group relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#f5a623]/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#111] aspect-[4/3]">
                        {/* Browser-like Header */}
                        <div className="absolute top-0 w-full h-10 bg-[#1a1a1a] flex items-center px-5 space-x-2.5 border-b border-white/5 z-10">
                            <div className="w-3 h-3 rounded-full bg-white/10" />
                            <div className="w-3 h-3 rounded-full bg-white/10" />
                            <div className="w-3 h-3 rounded-full bg-white/10" />
                            <div className="flex-1 flex justify-center">
                                <div className="w-1/3 h-4 bg-white/5 rounded-full"></div>
                            </div>
                        </div>
                        
                        {/* Mock Image */}
                        <img 
                            src={`https://picsum.photos/seed/${feature.id}/1200/900?grayscale`} 
                            alt={feature.title} 
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 pt-10"
                        />
                        
                        {/* Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        
                        {/* Floating Label */}
                        <div className="absolute bottom-10 left-10 right-10 p-6 bg-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl border border-white/10 transform transition-all duration-500 group-hover:-translate-y-2">
                            <div className="flex justify-between items-end">
                              <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#f5a623] mb-1">Feature Scope</p>
                                <p className="text-xl font-bold text-white tracking-tight">{feature.title}</p>
                              </div>
                              <Icon className="w-6 h-6 text-white/20" />
                            </div>
                        </div>
                    </div>
                </div>
              </Section>
            );
          })}
        </div>
      </div>
    </section>
  );
};

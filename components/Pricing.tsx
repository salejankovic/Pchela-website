
import React from 'react';
import { PARTNERS, PRICING_FACTORS } from '../constants';
import { Section } from './ui/Section';

interface PricingProps {
  onContact: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onContact }) => {
  return (
    <div className="bg-[#0a0a0a] text-white py-32" id="pricing">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section>
            <div className="text-center mb-24">
                <h2 className="text-5xl sm:text-7xl font-black mb-8 tracking-tighter">Flexible pricing designed for scale.</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                  We don't believe in rigid tiers that force you to pay for unused seats. 
                  Our model adapts to your organization's footprint, ensuring you maximize ROI.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                {PRICING_FACTORS.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="group bg-[#141414] p-10 rounded-3xl border border-white/5 hover:border-[#f5a623] transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(245,166,35,0.1)] hover:-translate-y-2 relative overflow-hidden h-full flex flex-col"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-[#f5a623]/20 transition-all duration-700"></div>
                        <div className="w-16 h-16 bg-[#0a0a0a] rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:border-[#f5a623]/50 transition-all duration-700 relative z-10">
                          <item.icon className="w-8 h-8 text-[#f5a623]" />
                        </div>
                        <h3 className="text-2xl font-black mb-4 group-hover:text-[#f5a623] transition-colors relative z-10">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed font-light relative z-10">{item.desc}</p>
                    </div>
                ))}
            </div>

            <div className="bg-gradient-to-br from-[#141414] to-[#0a0a0a] rounded-[40px] p-12 sm:p-24 border border-white/10 text-center max-w-5xl mx-auto relative overflow-hidden group">
               <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-[#f5a623]/5 rounded-full blur-[120px] group-hover:bg-[#f5a623]/10 transition-colors duration-1000"></div>
               <h3 className="text-4xl sm:text-5xl font-black mb-6 relative z-10 tracking-tight">Need a custom enterprise agreement?</h3>
               <p className="text-xl text-gray-500 mb-12 relative z-10 font-light max-w-2xl mx-auto leading-relaxed">We offer SLA guarantees, dedicated support, and on-premise deployment options for large organizations.</p>
               <button 
                 onClick={onContact}
                 className="inline-block px-12 py-5 bg-white text-black text-xs font-black uppercase tracking-widest rounded hover:bg-[#f5a623] transition-all relative z-10 hover:shadow-[0_20px_40px_rgba(245,166,35,0.2)] transform hover:scale-105 duration-300"
               >
                 Contact Sales
               </button>
            </div>
          </Section>

          {/* Partners */}
          <Section delay={200}>
            <div className="border-t border-white/5 pt-32 mt-32">
                <p className="text-center text-[11px] font-black tracking-[0.4em] text-gray-600 uppercase mb-16">Trusted by Industry Leaders</p>
                <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 opacity-40 hover:opacity-100 transition-all duration-700 grayscale hover:grayscale-0">
                    {PARTNERS.map((partner, idx) => (
                        <div key={idx} className="text-2xl sm:text-3xl font-black text-gray-400 hover:text-white transition-colors uppercase tracking-tighter select-none cursor-default">
                            {partner}
                        </div>
                    ))}
                </div>
            </div>
          </Section>
       </div>
    </div>
  );
};

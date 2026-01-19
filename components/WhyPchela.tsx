
import React from 'react';
import { Section } from './ui/Section';
import { DIFFERENTIATORS } from '../constants';

export const WhyPchela: React.FC = () => {
  return (
    <section className="bg-[#0a0a0a] py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Section>
          <div className="text-center mb-24">
            <h2 className="text-5xl sm:text-7xl font-black text-white tracking-tighter">Why Pchela Stands Apart</h2>
          </div>
        </Section>

        <div className="grid md:grid-cols-2 gap-8">
          {DIFFERENTIATORS.map((diff, idx) => (
            <Section key={idx} delay={idx * 100}>
              <div className="bg-[#141414] p-12 rounded-3xl border border-white/5 hover:border-[#f5a623]/30 transition-all duration-500 group h-full">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#f5a623]/20 group-hover:scale-110 transition-all duration-500 border border-white/5 group-hover:border-[#f5a623]/40">
                  <diff.icon className="w-8 h-8 text-[#f5a623]" />
                </div>
                <h3 className="text-3xl font-black text-white mb-6 tracking-tight group-hover:text-[#f5a623] transition-colors">{diff.title}</h3>
                <p className="text-gray-400 text-lg font-light leading-relaxed">{diff.desc}</p>
              </div>
            </Section>
          ))}
        </div>
      </div>
    </section>
  );
};

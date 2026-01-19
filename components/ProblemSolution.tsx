
import React from 'react';
import { PAIN_POINTS } from '../constants';
import { Section } from './ui/Section';
import { XCircle, CheckCircle } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <div id="how-it-works" className="bg-[#f5f5f5] text-gray-900 py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Problem Header */}
        <Section>
            <div className="text-center mb-24">
              <h4 className="text-[11px] font-black text-[#f5a623] uppercase tracking-[0.3em] mb-4">The Problem</h4>
              <h2 className="text-5xl sm:text-7xl font-black mb-8 tracking-tighter text-[#0a0a0a]">Chaos costs time and money</h2>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
                  Without a proper hive, your digital assets are just a heap of files. Hard to find, risky to use, and impossible to monetize.
              </p>
            </div>
        </Section>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {PAIN_POINTS.map((point, idx) => (
            <Section key={idx} delay={idx * 100}>
                <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all group h-full">
                <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                        <XCircle className="w-8 h-8 text-red-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-black mb-4 tracking-tight text-[#0a0a0a]">{point.title}</h3>
                        <p className="text-gray-500 leading-relaxed font-light">{point.description}</p>
                    </div>
                </div>
                </div>
            </Section>
          ))}
        </div>

        {/* Transformation Visual */}
        <Section delay={200}>
            <div className="bg-[#0a0a0a] rounded-[40px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden border border-white/5">
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {/* Before */}
                    <div className="p-12 sm:p-20 bg-[#111]">
                        <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-10">Before Pchela</h4>
                        <div className="mb-12">
                            <h3 className="text-4xl font-black text-white mb-4 tracking-tight">7 tabs, 6 folders, 0 context</h3>
                            <p className="text-gray-500 font-light">Multi-step, frustrating process. Missed deadlines.</p>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                             <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80&w=1000" alt="Cluttered" className="w-full h-72 object-cover" />
                             <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                <XCircle size={64} className="text-red-500/80" />
                             </div>
                        </div>
                    </div>

                    {/* After */}
                    <div className="p-12 sm:p-20 bg-[#0a0a0a] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#f5a623]/10 rounded-full blur-[100px]"></div>
                        <h4 className="text-[10px] font-black text-[#f5a623] uppercase tracking-widest mb-10">With Pchela</h4>
                        <div className="mb-12">
                            <h3 className="text-4xl font-black text-white mb-4 tracking-tight">One search, one truth</h3>
                            <p className="text-gray-500 font-light">Intelligent search. Precise results. 70% faster.</p>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden group shadow-2xl border border-[#f5a623]/20">
                             <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" alt="Organized" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700" />
                             <div className="absolute inset-0 flex items-center justify-center bg-[#f5a623]/10">
                                <CheckCircle size={64} className="text-[#f5a623] drop-shadow-[0_0_20px_rgba(245,166,35,0.5)]" />
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>

      </div>
    </div>
  );
};

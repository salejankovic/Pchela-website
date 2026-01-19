
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Section } from './ui/Section';
import { ArrowRight } from 'lucide-react';

const DATA = [
  { name: 'Search Time (Min)', before: 15, after: 4 },
  { name: 'Reuse Rate (%)', before: 20, after: 85 },
  { name: 'Admin Time (Hrs/Wk)', before: 40, after: 12 },
];

interface CaseStudyPageProps {
  onContact: () => void;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ onContact }) => {
  return (
    <div className="pt-32 pb-32 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <Section>
            <div className="mb-24 border-b border-white/5 pb-16">
                <h4 className="text-[11px] font-black text-[#f5a623] uppercase tracking-[0.4em] mb-6">Mini Case Study</h4>
                <h1 className="text-6xl sm:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">Client: Salomon, Slovenia</h1>
                <p className="text-2xl text-gray-400 max-w-4xl font-light leading-relaxed">
                    A major media house with Online, TV, Radio, and Print divisions (800+ employees).
                    Managing <span className="font-bold text-white">1,000,000+</span> photos across a complex multi-platform environment.
                </p>
            </div>
        </Section>

        {/* Results Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-32">
          <Section delay={100}>
            <div className="space-y-10">
                <div className="bg-[#141414] p-12 rounded-[40px] border-l-[12px] border-[#f5a623] shadow-2xl">
                    <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">The Result</h3>
                    <div className="flex items-baseline space-x-4">
                        <span className="text-7xl sm:text-8xl font-black text-[#f5a623] tracking-tighter">70%</span>
                        <span className="text-3xl font-black text-white uppercase tracking-tight">Decrease</span>
                    </div>
                    <p className="text-xl text-gray-400 mt-4 font-light">In "Time-to-find" assets for editors and journalists.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-[#141414] p-8 rounded-3xl border border-white/5 text-center hover:border-white/10 transition-colors">
                        <div className="text-4xl font-black text-white tracking-tighter">1M+</div>
                        <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-2">Assets Ingested</div>
                    </div>
                    <div className="bg-[#141414] p-8 rounded-3xl border border-white/5 text-center hover:border-white/10 transition-colors">
                        <div className="text-4xl font-black text-white tracking-tighter">20k+</div>
                        <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-2">Collections Created</div>
                    </div>
                    <div className="bg-[#141414] p-8 rounded-3xl border border-white/5 text-center hover:border-white/10 transition-colors">
                        <div className="text-4xl font-black text-white tracking-tighter uppercase">Daily</div>
                        <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-2">Active Usage</div>
                    </div>
                    <div className="bg-[#141414] p-8 rounded-3xl border border-white/5 text-center hover:border-white/10 transition-colors">
                        <div className="text-4xl font-black text-white tracking-tighter">100%</div>
                        <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-2">Rights Clarity</div>
                    </div>
                </div>
            </div>
          </Section>

          <Section delay={300} className="h-[450px] bg-[#141414] rounded-[40px] p-12 shadow-inner border border-white/5">
            <h3 className="text-sm font-black mb-12 text-center text-gray-500 uppercase tracking-widest">Efficiency Metrics: Before vs After</h3>
            <div className="h-full pb-10">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={DATA}
                    margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
                    barSize={40}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#888', fontSize: 10, fontWeight: 900}} 
                      dy={15}
                    />
                    <YAxis hide />
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid #333', borderRadius: '12px' }}
                        itemStyle={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}
                        cursor={{fill: 'rgba(255,255,255,0.05)'}}
                    />
                    <Bar dataKey="before" fill="#333" radius={[8, 8, 0, 0]} name="Before Pchela" />
                    <Bar dataKey="after" fill="#f5a623" radius={[8, 8, 0, 0]} name="After Pchela">
                        {DATA.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 0 ? '#22c55e' : '#f5a623'} />
                        ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
            </div>
          </Section>
        </div>

        {/* CTA Section */}
        <Section delay={400}>
            <div className="bg-[#f5a623] p-16 rounded-[40px] flex flex-col md:flex-row items-center justify-between text-black group overflow-hidden relative">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>
                <div className="text-center md:text-left mb-8 md:mb-0 relative z-10">
                    <h3 className="text-4xl font-black tracking-tight mb-2">Want similar results for your organization?</h3>
                    <p className="text-xl font-bold opacity-70">Let's build your enterprise hive together.</p>
                </div>
                <button 
                   onClick={onContact}
                   className="px-12 py-5 bg-black text-white text-xs font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-2xl relative z-10 flex items-center"
                >
                    Get in Touch
                    <ArrowRight className="ml-3 w-5 h-5" />
                </button>
            </div>
        </Section>
      </div>
    </div>
  );
};

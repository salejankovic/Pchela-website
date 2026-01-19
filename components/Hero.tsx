
import React from 'react';
import { ArrowRight, Database, Search, ShieldCheck } from 'lucide-react';
import { Section } from './ui/Section';

interface HeroProps {
  onNavigate: (href: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden pt-20">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full bg-[#f5a623]/10 blur-[150px]" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 text-center lg:text-left">
            <Section delay={0}>
                <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-[#f5a623] animate-pulse"></span>
                    <span className="text-[10px] font-black text-gray-400 tracking-[0.2em] uppercase">AI-Powered DAM</span>
                </div>
            </Section>

            <Section delay={100}>
                <h1 className="text-6xl sm:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                Build a <span className="text-[#f5a623]">hive</span>.<br />
                Not a heap.
                </h1>
            </Section>

            <Section delay={200}>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Centralize, organize, and monetize your photos, videos, and audio files. 
                Stop digging through digital chaos and start finding assets instantly.
                </p>
            </Section>

            <Section delay={300}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <button 
                  onClick={() => onNavigate('#features')}
                  className="w-full sm:w-auto px-10 py-5 bg-[#f5a623] text-black font-black uppercase tracking-widest text-xs rounded hover:bg-white transition-all flex items-center justify-center group"
                >
                    Explore Features
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => onNavigate('/case-study')}
                  className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-xs rounded hover:bg-white hover:text-black transition-all"
                >
                    View Case Study
                </button>
                </div>
            </Section>

            <Section delay={500}>
                <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10 mt-6 max-w-md mx-auto lg:mx-0">
                    <div>
                        <h4 className="text-4xl font-black text-white tracking-tighter">1M+</h4>
                        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">Assets Managed</p>
                    </div>
                    <div>
                        <h4 className="text-4xl font-black text-white tracking-tighter">70%</h4>
                        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">Faster Search</p>
                    </div>
                    <div>
                        <h4 className="text-4xl font-black text-white tracking-tighter">12+</h4>
                        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">Major Partners</p>
                    </div>
                </div>
            </Section>
        </div>

        {/* Hero Visual */}
        <Section delay={400} className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Abstract Hex Grid */}
                <div className="absolute inset-0 grid grid-cols-3 gap-6 p-10">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className={`rounded-3xl bg-white/${5 + i * 2} border border-white/5 backdrop-blur-md transform transition-all duration-700 hover:scale-105 hover:bg-[#f5a623]/20 flex items-center justify-center group overflow-hidden
                            ${i === 4 ? 'bg-[#f5a623]/10 border-[#f5a623]/30 scale-110 rotate-3 shadow-[0_0_50px_rgba(245,166,35,0.1)]' : ''}
                        `}>
                            {i === 0 && <Database className="text-gray-600 w-10 h-10 group-hover:text-white transition-colors" />}
                            {i === 4 && (
                              <div className="relative w-full h-full p-2">
                                <img src={`https://picsum.photos/seed/pchela${i}/400`} className="w-full h-full rounded-2xl object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" alt="UI" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#f5a623]/40 to-transparent pointer-events-none"></div>
                              </div>
                            )}
                            {i === 8 && <Search className="text-gray-600 w-10 h-10 group-hover:text-white transition-colors" />}
                            {i === 2 && <ShieldCheck className="text-gray-600 w-10 h-10 group-hover:text-white transition-colors" />}
                            {i !== 0 && i !== 4 && i !== 8 && i !== 2 && (
                               <img src={`https://picsum.photos/seed/pchela${i}/400?grayscale`} className="w-full h-full object-cover opacity-20 hover:opacity-100 transition-opacity" />
                            )}
                        </div>
                    ))}
                </div>
                
                {/* Floating Labels */}
                <div className="absolute -right-16 top-1/4 bg-[#1a1a1a] p-5 rounded-xl shadow-2xl border border-white/10 max-w-[220px] animate-bounce-slow">
                    <div className="flex items-center space-x-3 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-white">Face Recognition</span>
                    </div>
                    <p className="text-xs text-gray-400 font-mono">ID: Nikola J.</p>
                </div>

                <div className="absolute -left-12 bottom-1/4 bg-[#1a1a1a] p-5 rounded-xl shadow-2xl border border-white/10 max-w-[220px] animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
                    <div className="flex items-center space-x-3 mb-2">
                        <div className="w-2 h-2 bg-[#f5a623] rounded-full"></div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-white">Asset Rights</span>
                    </div>
                    <p className="text-xs text-gray-400 font-mono">Status: Licensed</p>
                </div>
            </div>
        </Section>
      </div>
    </section>
  );
};


import React from 'react';
import { Section } from './ui/Section';
import { OTHER_TOOLS } from '../constants';
import { Globe, Users, Code, Award } from 'lucide-react';

export const AboutUsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-32 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <Section>
          <div className="mb-24 text-center">
            <h1 className="text-6xl sm:text-8xl font-black text-white mb-8 tracking-tighter">About Appworks</h1>
            <p className="text-2xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
              Building AI-powered platforms for media and sports organizations across four continents since 2013.
            </p>
          </div>
        </Section>

        {/* Company Overview */}
        <Section delay={100}>
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-white tracking-tight">Digital transformation driven by purpose.</h2>
              <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
                <p>
                  Appworks d.o.o. is a Belgrade-based digital transformation company that specializes in solving high-scale content management and data challenges for the world's leading media houses.
                </p>
                <p>
                  Our mission is to bridge the gap between creative archives and intelligent workflows, ensuring every digital asset is not just stored, but active, searchable, and profitable.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10"><Globe className="w-6 h-6 text-[#f5a623]" /></div>
                  <div><h4 className="font-bold text-white">4 Continents</h4><p className="text-sm text-gray-500">Global Reach</p></div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10"><Code className="w-6 h-6 text-[#f5a623]" /></div>
                  <div><h4 className="font-bold text-white">10+ Years</h4><p className="text-sm text-gray-500">Engineering Excellence</p></div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-[#f5a623]/10 blur-[100px] rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071823991-b99c223a708e?auto=format&fit=crop&q=80&w=1000" 
                alt="Appworks Team" 
                className="relative rounded-[40px] shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
        </Section>

        {/* Our Products */}
        <Section delay={200}>
          <div className="mb-32">
            <h2 className="text-4xl font-black text-white text-center mb-20 tracking-tight">Our Ecosystem</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {OTHER_TOOLS.map((tool, idx) => (
                <a 
                  key={idx} 
                  href={tool.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#141414] p-12 rounded-[40px] border border-white/5 hover:border-[#f5a623] transition-all duration-500 group"
                >
                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#f5a623] transition-colors">{tool.name}</h3>
                  <p className="text-gray-500 font-light leading-relaxed mb-8">{tool.desc}</p>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-600 group-hover:text-white flex items-center">
                    Visit Tool <Award className="ml-2 w-3 h-3" />
                  </div>
                </a>
              ))}
              <div className="bg-[#141414] p-12 rounded-[40px] border border-white/5 flex flex-col justify-center items-center text-center opacity-50">
                 <Users className="w-12 h-12 text-gray-600 mb-6" />
                 <p className="text-gray-500 font-black uppercase tracking-widest text-[10px]">And More to Come...</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Team Section */}
        <Section delay={300}>
          <div className="bg-[#111] p-16 rounded-[40px] text-center border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 blur-[100px] group-hover:bg-[#f5a623]/5 transition-all"></div>
            <h3 className="text-3xl font-black text-white mb-6 tracking-tight relative z-10">Our Expertise</h3>
            <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed relative z-10">
              Our team of 20+ senior engineers, designers, and media experts work from our Belgrade hub to power the digital future of our clients worldwide.
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
};

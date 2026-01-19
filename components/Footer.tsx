
import React from 'react';
import { OTHER_TOOLS } from '../constants';
import { Mail, MapPin, Hexagon, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            
            {/* Brand */}
            <div className="space-y-8">
                <div className="flex items-center space-x-3">
                    <Hexagon className="w-10 h-10 text-[#f5a623] fill-[#f5a623]/10" />
                    <span className="text-3xl font-black uppercase tracking-tighter">Pchela</span>
                </div>
                <p className="text-gray-500 text-lg leading-relaxed font-light">
                    Digital Asset Management platform to centralize, organize and monetize your assets.
                </p>
            </div>

            {/* Contact */}
            <div className="space-y-8">
                <h4 className="font-black text-xs uppercase tracking-[0.3em] text-[#f5a623]">Contact Us</h4>
                <div className="space-y-6 text-sm text-gray-400 font-light">
                    <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                        <span className="leading-relaxed">Appworks d.o.o.<br/>Vlajkovićeva 15<br/>Belgrade – Serbia</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Mail className="w-6 h-6 text-gray-700 flex-shrink-0" />
                        <a href="mailto:info@app-works.app" className="hover:text-white transition-colors">info@app-works.app</a>
                    </div>
                </div>
            </div>

            {/* Other Tools */}
            <div className="space-y-8 lg:col-span-2">
                <h4 className="font-black text-xs uppercase tracking-[0.3em] text-[#f5a623]">Other AI Tools by Appworks</h4>
                <div className="grid sm:grid-cols-2 gap-6">
                    {OTHER_TOOLS.map((tool, idx) => (
                        <a 
                          key={idx} 
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#141414] p-6 rounded-2xl border border-white/5 hover:border-[#f5a623]/40 hover:bg-[#1a1a1a] transition-all group"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <div className="font-black text-white group-hover:text-[#f5a623] transition-colors uppercase tracking-tight">{tool.name}</div>
                                <ExternalLink className="w-4 h-4 text-gray-700 group-hover:text-white" />
                            </div>
                            <div className="text-xs text-gray-500 leading-relaxed">{tool.desc}</div>
                        </a>
                    ))}
                </div>
            </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-600">
            <p>&copy; 2026 Appworks d.o.o. All rights reserved.</p>
            <div className="flex space-x-10 mt-8 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

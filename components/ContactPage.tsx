
import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, Phone } from 'lucide-react';
import { Section } from './ui/Section';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-32 pb-32 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Section>
          <div className="text-center mb-24">
            <h1 className="text-6xl sm:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">Let's talk.</h1>
            <p className="text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Whether you're ready to start or just exploring options, we'd love to hear from you.
            </p>
          </div>
        </Section>

        <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-start">
          {/* Contact Info */}
          <Section delay={100}>
            <div className="space-y-16">
              <div className="space-y-12">
                <div className="flex items-start space-x-6">
                   <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                      <Mail className="w-8 h-8 text-[#f5a623]" />
                   </div>
                   <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Email Us</h4>
                      <a href="mailto:info@app-works.app" className="text-3xl font-black text-white hover:text-[#f5a623] transition-colors tracking-tight">info@app-works.app</a>
                   </div>
                </div>

                <div className="flex items-start space-x-6">
                   <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                      <Phone className="w-8 h-8 text-[#f5a623]" />
                   </div>
                   <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Call Us</h4>
                      <p className="text-3xl font-black text-white tracking-tight">+381 11 3294 130</p>
                   </div>
                </div>

                <div className="flex items-start space-x-6">
                   <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                      <MapPin className="w-8 h-8 text-[#f5a623]" />
                   </div>
                   <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Visit Us</h4>
                      <p className="text-2xl font-bold text-white tracking-tight">Vlajkovićeva 15<br/>Belgrade – Serbia</p>
                   </div>
                </div>
              </div>

              <div className="pt-16 border-t border-white/10">
                <h4 className="text-[#f5a623] text-xs font-black uppercase tracking-[0.3em] mb-8">Sales Contact</h4>
                <div className="bg-[#141414] p-10 rounded-[40px] border border-white/5">
                    <p className="text-2xl font-black text-white mb-2">Aleksandar Janković</p>
                    <p className="text-gray-400 font-light mb-6">Director of Sales</p>
                    <div className="space-y-2">
                        <a href="mailto:aleksandar@app-works.app" className="block text-gray-300 hover:text-[#f5a623] transition-colors">aleksandar@app-works.app</a>
                        <p className="text-gray-500">m. +381 62 508 896</p>
                    </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Contact Form */}
          <Section delay={200}>
            <div className="bg-white p-12 sm:p-20 rounded-[60px] shadow-2xl relative overflow-hidden">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-10">
                    <CheckCircle className="w-12 h-12 text-green-500" />
                  </div>
                  <h3 className="text-4xl font-black text-[#0a0a0a] mb-4 tracking-tighter">Message Sent!</h3>
                  <p className="text-xl text-gray-500 font-light">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <h3 className="text-4xl font-black text-[#0a0a0a] mb-12 tracking-tighter">Send us a message</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-gray-400">Name</label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        className="w-full bg-gray-50 px-0 py-4 border-b-2 border-gray-100 focus:border-[#f5a623] outline-none transition-all text-xl font-bold text-[#0a0a0a] placeholder-gray-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email</label>
                      <input 
                        type="email" 
                        id="email"
                        required
                        className="w-full bg-gray-50 px-0 py-4 border-b-2 border-gray-100 focus:border-[#f5a623] outline-none transition-all text-xl font-bold text-[#0a0a0a] placeholder-gray-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-[10px] font-black uppercase tracking-widest text-gray-400">Company</label>
                    <input 
                      type="text" 
                      id="company"
                      className="w-full bg-gray-50 px-0 py-4 border-b-2 border-gray-100 focus:border-[#f5a623] outline-none transition-all text-xl font-bold text-[#0a0a0a] placeholder-gray-300"
                      placeholder="Organization Name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-gray-400">Message</label>
                    <textarea 
                      id="message"
                      rows={4}
                      required
                      className="w-full bg-gray-50 px-0 py-4 border-b-2 border-gray-100 focus:border-[#f5a623] outline-none transition-all text-xl font-bold text-[#0a0a0a] placeholder-gray-300 resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-6 bg-[#0a0a0a] text-white text-xs font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-[#f5a623] hover:text-black transition-all duration-500 flex items-center justify-center group"
                  >
                    Send Message
                    <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

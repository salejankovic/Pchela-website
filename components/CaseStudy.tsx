import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Section } from './ui/Section';

const DATA = [
  { name: 'Search Time (Min)', before: 15, after: 4 },
  { name: 'Reuse Rate (%)', before: 20, after: 85 },
  { name: 'Admin Time (Hrs/Wk)', before: 40, after: 12 },
];

export const CaseStudy: React.FC = () => {
  return (
    <section id="case-study" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Section>
            <div className="mb-16 border-b border-gray-200 pb-8">
            <h4 className="text-sm font-bold text-pchela-yellow uppercase tracking-wider mb-2">Mini Case Study</h4>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client: Salomon, Slovenia</h2>
            <p className="text-xl text-gray-600">
                A major media house with Online, TV, Radio, and Print divisions (800+ employees).
                Managing <span className="font-bold text-black">1,000,000+</span> photos.
            </p>
            </div>
        </Section>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Section delay={100}>
            <div className="space-y-8">
                <div className="bg-gray-50 p-8 rounded-2xl border-l-8 border-pchela-yellow">
                    <h3 className="text-2xl font-bold mb-2">The Result</h3>
                    <p className="text-4xl font-bold text-gray-900 mb-2">70% Decrease</p>
                    <p className="text-gray-600">In "Time-to-find" assets for editors and journalists.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                        <div className="text-3xl font-bold text-pchela-black">1M+</div>
                        <div className="text-sm text-gray-500 uppercase mt-1">Assets Ingested</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                        <div className="text-3xl font-bold text-pchela-black">20k+</div>
                        <div className="text-sm text-gray-500 uppercase mt-1">Collections Created</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                        <div className="text-3xl font-bold text-pchela-black">Daily</div>
                        <div className="text-sm text-gray-500 uppercase mt-1">Active Usage</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                        <div className="text-3xl font-bold text-pchela-black">100%</div>
                        <div className="text-sm text-gray-500 uppercase mt-1">Rights Clarity</div>
                    </div>
                </div>
            </div>
          </Section>

          <Section delay={300} className="h-80 bg-gray-50 rounded-2xl p-6 shadow-inner">
            <h3 className="text-lg font-semibold mb-6 text-center text-gray-700">Efficiency Metrics: Before vs After</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={DATA}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} hide />
                <Tooltip 
                    contentStyle={{ backgroundColor: '#1E1E1E', border: 'none', color: '#fff', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="before" fill="#E5E7EB" radius={[4, 4, 0, 0]} name="Before Pchela" />
                <Bar dataKey="after" fill="#F59E0B" radius={[4, 4, 0, 0]} name="After Pchela">
                    {DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? '#22c55e' : '#F59E0B'} />
                    ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Section>
        </div>
      </div>
    </section>
  );
};
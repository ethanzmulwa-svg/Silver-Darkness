
import React from 'react';
import { SERVICES, MATERIAL_STATS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useCart } from '../context/CartContext';

const Services: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div className="py-24 bg-black text-zinc-400 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <span className="text-[#BB0000] font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">Bespoke Metallurgy</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase text-white">THE FORGE REGISTRY</h1>
          <p className="text-zinc-600 max-w-2xl mx-auto font-light mt-8 italic text-sm tracking-widest">
            Every piece is birthed from fire and force. Expect the unique scars of the human hand.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-48">
          {SERVICES.map((service) => (
            <div key={service.id} className="group relative bg-zinc-950 border border-zinc-900 p-5 transition-all hover:border-[#BB0000]/30 flex flex-col h-full">
              <div className="aspect-[4/5] overflow-hidden mb-8 relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale contrast-125 brightness-75 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-0 right-0 bg-black/80 backdrop-blur-sm text-[#BB0000] text-[8px] font-black px-3 py-2 uppercase tracking-[0.3em] border-l border-b border-zinc-800">
                  Custom Forge
                </div>
              </div>
              <div className="space-y-4 flex-grow">
                <h3 className="text-sm font-black uppercase tracking-widest text-white leading-tight">{service.title}</h3>
                <p className="text-zinc-600 text-[11px] font-light leading-relaxed h-12 overflow-hidden">{service.description}</p>
                <div className="pt-6 flex items-center justify-between border-t border-zinc-900">
                  <span className="text-lg font-black text-zinc-300 tracking-tighter">KES {service.price.toLocaleString()}</span>
                  <button 
                    onClick={() => addToCart(service)}
                    className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-[#BB0000] transition-all"
                  >
                    <i className="fa-solid fa-cart-plus text-[10px]"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industrial Stats */}
        <div className="bg-zinc-950 border border-zinc-900 p-12 lg:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#BB0000]/5 blur-[150px] rounded-full pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
            <div className="space-y-10">
              <h2 className="text-4xl font-bold tracking-tighter uppercase text-white italic">MATERIAL <br /><span className="text-[#BB0000]">INTEGRITY</span></h2>
              <p className="text-zinc-500 font-light leading-relaxed text-sm max-w-md">
                We prioritize oxidized .925 sterling silver for its weight and ability to hold deep shadows. Our metrics track studio preference for high-impact industrial textures.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-start space-x-8">
                  <div className="w-14 h-14 bg-black border border-zinc-900 flex items-center justify-center text-[#BB0000] shrink-0">
                    <i className="fa-solid fa-droplet text-xl"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase tracking-[0.3em] text-white">Shadow Patina</h5>
                    <p className="text-[11px] text-zinc-600 font-light mt-2 leading-relaxed uppercase">Signature charcoal finish achieved through deep chemical etching.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-8">
                  <div className="w-14 h-14 bg-black border border-zinc-900 flex items-center justify-center text-zinc-400 shrink-0">
                    <i className="fa-solid fa-maximize text-xl"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase tracking-[0.3em] text-white">Brutalist Edges</h5>
                    <p className="text-[11px] text-zinc-600 font-light mt-2 leading-relaxed uppercase">Acetate frames rasped by hand for a raw, stone-like texture.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-[450px] bg-black p-10 border border-zinc-900">
              <h4 className="text-center font-black text-[9px] text-zinc-700 mb-12 uppercase tracking-[0.6em]">Forge Analytical Index</h4>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={MATERIAL_STATS} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#111" />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fontSize: 9, fill: '#333', fontWeight: 'bold', letterSpacing: '0.1em'}} width={120} />
                  <Tooltip 
                    cursor={{fill: '#050505'}}
                    contentStyle={{backgroundColor: '#000', borderRadius: '0px', border: '1px solid #222', color: '#fff', fontSize: '10px'}}
                  />
                  <Bar dataKey="popularity" radius={[0, 2, 2, 0]} barSize={16}>
                    {MATERIAL_STATS.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#BB0000' : '#27272a'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
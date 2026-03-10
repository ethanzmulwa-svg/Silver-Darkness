
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-24 bg-black text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute inset-0 border border-[#BB0000]/30 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=800&auto=format&fit=crop" 
              alt="Artisan Smith" 
              className="relative rounded-sm shadow-none z-10 filter grayscale contrast-150 brightness-75"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="space-y-12">
            <div>
              <span className="text-[#BB0000] font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">The Heritage</span>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter uppercase leading-none text-white italic">FORGED IN <br /><span className="text-zinc-700">STERLING</span></h1>
            </div>
            
            <div className="space-y-8 text-lg leading-relaxed font-light">
              <p>
                Zamani Luxe was born from a singular obsession with sterling silver. In our Nairobi foundry, we rejected the softness of gold and the vanity of diamonds to focus on the raw, structural power of .925 silver.
              </p>
              <p>
                Our aesthetic is industrial armor for the modern soul. Every chain link is manually turned. Every eyewear motif is cold-welded. We embrace the charcoal patina of oxidation, creating pieces that age with character alongside their wearer.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-zinc-900">
              <div className="space-y-2">
                <h4 className="text-5xl font-black text-white tracking-tighter">.925</h4>
                <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em]">Pure Sterling</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-5xl font-black text-[#BB0000] tracking-tighter">100%</h4>
                <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em]">Cold Hand-Etched</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className="mt-48">
          <div className="text-center mb-24">
            <h2 className="text-2xl font-bold uppercase tracking-[0.5em] text-white">THE ANVIL CREED</h2>
            <div className="w-24 h-[1px] bg-[#BB0000] mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-zinc-900">
            <div className="bg-black p-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 text-zinc-900 group-hover:text-[#BB0000]/10 transition-colors">
                <i className="fa-solid fa-fire text-7xl"></i>
              </div>
              <h3 className="text-lg font-black mb-6 uppercase tracking-widest text-white">Raw Sterling</h3>
              <p className="text-zinc-500 font-light leading-relaxed text-sm">No plating. No gold-washing. Just pure, honest, oxidized sterling silver that records every scar of its journey.</p>
            </div>
            <div className="bg-black p-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 text-zinc-900 group-hover:text-[#BB0000]/10 transition-colors">
                <i className="fa-solid fa-eye text-7xl"></i>
              </div>
              <h3 className="text-lg font-black mb-6 uppercase tracking-widest text-white">Gothic Vision</h3>
              <p className="text-zinc-500 font-light leading-relaxed text-sm">Eyewear frames inspired by brutalist architecture—sharp, bold, and unapologetically cold.</p>
            </div>
            <div className="bg-black p-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 text-zinc-900 group-hover:text-[#BB0000]/10 transition-colors">
                <i className="fa-solid fa-link text-7xl"></i>
              </div>
              <h3 className="text-lg font-black mb-6 uppercase tracking-widest text-white">Eternal Links</h3>
              <p className="text-zinc-500 font-light leading-relaxed text-sm">Chains built to be industrial heirlooms. Heavy gauge, manually polished, and structurally indestructible.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
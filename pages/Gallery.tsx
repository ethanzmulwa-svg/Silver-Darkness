
import React from 'react';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  return (
    <div className="py-20 bg-zinc-950 text-white min-h-screen">
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-[#BB0000] font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">Hand-Forged Archives</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">THE IRON & SILVER CHRONICLES</h1>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#006600] to-transparent mx-auto mb-10"></div>
          <p className="text-zinc-500 max-w-2xl mx-auto leading-relaxed font-light italic">
            Witness the raw intersection of Kenyan metalcraft and gothic silhouettes. 
            Every scar, hammer mark, and etch is intentional.
          </p>
        </div>

        {/* True Masonry Column Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {GALLERY_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className={`relative break-inside-avoid overflow-hidden group rounded-sm cursor-pointer border border-white/5 bg-zinc-900 mb-8 transition-all duration-500 hover:border-[#BB0000]/40`}
            >
              <div className={`${item.aspect || 'aspect-square'} overflow-hidden`}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter contrast-125 brightness-75 group-hover:brightness-100 group-hover:contrast-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-[#006600] font-black text-[10px] tracking-[0.3em] uppercase mb-1">{item.category}</span>
                <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                <div className="mt-4 flex items-center space-x-2 text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                  <span className="w-4 h-px bg-[#BB0000]"></span>
                  <span>Handmade Nairobi</span>
                </div>
              </div>

              {/* Detail Indicator */}
              <div className="absolute top-4 left-4 p-2 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                <i className="fa-solid fa-hammer text-[10px] text-[#BB0000]"></i>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center border-t border-white/5 pt-16">
          <p className="text-zinc-600 mb-10 text-sm tracking-widest uppercase">Seeking a custom heirloom?</p>
          <a 
            href="#/contact" 
            className="group relative inline-flex items-center space-x-4 overflow-hidden px-12 py-5 bg-transparent border border-zinc-800 transition-all hover:border-[#BB0000]"
          >
            <span className="relative z-10 font-black text-xs uppercase tracking-[0.3em] group-hover:text-white transition-colors">Enter The Forge</span>
            <div className="absolute inset-0 bg-[#BB0000] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <i className="fa-solid fa-arrow-right-long relative z-10 text-[#BB0000] group-hover:text-white"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

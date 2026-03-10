
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { useCart } from '../context/CartContext';

const Home: React.FC = () => {
  const { addToCart } = useCart();
  const featuredProducts = SERVICES.slice(0, 3);

  return (
    <div className="bg-zinc-950">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Animated Grainy Background */}
        <div className="absolute inset-0 z-0 opacity-50">
          <img 
            src="https://images.unsplash.com/photo-1506634572416-48cdfe530110?q=80&w=1920&auto=format&fit=crop" 
            alt="Silver Forge Editorial" 
            className="w-full h-full object-cover filter contrast-125 brightness-[0.25] grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <span className="inline-block px-8 py-2 bg-[#BB0000] text-white text-[10px] font-black tracking-[0.5em] uppercase mb-10 shadow-[0_0_20px_rgba(187,0,0,0.5)]">
            Hand-Forged in Nairobi
          </span>
          <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-[0.85] tracking-tighter uppercase italic">
            SILVER <br />
            <span className="text-zinc-600">& DARKNESS</span>
          </h1>
          <p className="text-sm md:text-base mb-12 text-zinc-400 max-w-xl mx-auto font-light tracking-[0.2em] uppercase leading-relaxed">
            Bespoke Sterling Chains, Gothic Eyewear & Studio Earrings. <br />
            Magnetic or Pierced. High-Fashion Heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link to="/gallery" className="group relative px-12 py-5 bg-white text-black font-black uppercase text-xs tracking-[0.3em] overflow-hidden transition-all hover:pr-16">
              <span className="relative z-10">The Archives</span>
              <i className="fa-solid fa-arrow-right absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all"></i>
            </Link>
            <Link to="/services" className="text-white text-xs font-black uppercase tracking-[0.3em] border-b-2 border-[#BB0000] pb-2 hover:border-[#006600] transition-colors">
              Commission A Piece
            </Link>
          </div>
        </div>

        {/* Ambient Smoke Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none"></div>
      </section>

      {/* Featured Ethos */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="space-y-6 group">
              <h4 className="text-sm font-black text-[#BB0000] tracking-[0.3em] uppercase">01. The Forge</h4>
              <h3 className="text-4xl font-bold tracking-tighter leading-none">STERLING CHAINS & STUDS</h3>
              <p className="text-zinc-500 font-light leading-relaxed">Heavy-gauge silver pieces oxidized for a deep, charcoal patina. Studs available in magnetic and non-magnetic options.</p>
              <div className="w-0 group-hover:w-full h-px bg-black transition-all duration-700"></div>
            </div>
            <div className="space-y-6 group">
              <h4 className="text-sm font-black text-[#006600] tracking-[0.3em] uppercase">02. The Vision</h4>
              <h3 className="text-4xl font-bold tracking-tighter leading-none">GOTHIC SCROLL EYEWEAR</h3>
              <p className="text-zinc-500 font-light leading-relaxed">Hand-carved acetate frames adorned with cold-welded sterling daggers and cross motifs.</p>
              <div className="w-0 group-hover:w-full h-px bg-black transition-all duration-700"></div>
            </div>
            <div className="space-y-6 group">
              <h4 className="text-sm font-black text-black tracking-[0.3em] uppercase">03. The Soul</h4>
              <h3 className="text-4xl font-bold tracking-tighter leading-none">AVANT-GARDE EVOLUTION</h3>
              <p className="text-zinc-500 font-light leading-relaxed">Inspired by the archives of Margiela and the grit of the Nairobi forge. Gothic aesthetic for the bold.</p>
              <div className="w-0 group-hover:w-full h-px bg-black transition-all duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-32 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-[#BB0000] font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">New Arrivals</span>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase italic leading-none">THE FORGE <br /> <span className="text-zinc-700">SELECTION</span></h2>
            </div>
            <Link to="/services" className="text-white text-[10px] font-black uppercase tracking-[0.3em] border-b-2 border-[#BB0000] pb-2 hover:border-white transition-colors">
              View All Pieces
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group relative bg-zinc-900/50 border border-zinc-900 p-6 transition-all hover:border-[#BB0000]/30">
                <div className="aspect-square overflow-hidden mb-8 relative">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale contrast-125 brightness-75 group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-0 right-0 bg-black/80 backdrop-blur-sm text-[#BB0000] text-[8px] font-black px-3 py-2 uppercase tracking-[0.3em] border-l border-b border-zinc-800">
                    Featured
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-black uppercase tracking-widest text-white leading-tight">{product.title}</h3>
                  <div className="pt-6 flex items-center justify-between border-t border-zinc-800">
                    <span className="text-lg font-black text-zinc-300 tracking-tighter">KES {product.price.toLocaleString()}</span>
                    <button 
                      onClick={() => addToCart(product)}
                      className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-[#BB0000] transition-all"
                    >
                      <i className="fa-solid fa-cart-plus text-[10px]"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="py-0 relative">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          <div className="lg:w-1/2 bg-zinc-900 flex items-center p-12 lg:p-24">
            <div className="max-w-md space-y-8">
              <i className="fa-solid fa-hammer text-4xl text-[#BB0000]"></i>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none uppercase">Pure Sterling Heritage</h2>
              <p className="text-zinc-400 font-light leading-relaxed">
                We believe in the weight of raw silver. Our editorial collaborations capture the raw intersection of high-fashion and tribal metalcraft.
              </p>
              <Link to="/about" className="inline-block py-4 px-10 border border-zinc-700 text-white text-[10px] font-black tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all">
                The Zamani Way
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop" 
              alt="Editorial Dark Fashion" 
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

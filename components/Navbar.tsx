
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <nav className="bg-black/90 backdrop-blur-md border-b border-zinc-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black tracking-[0.2em] text-white gothic-font">ZAMANI</span>
                <div className="flex h-[2px] w-full mt-1">
                  <div className="bg-zinc-800 flex-1"></div>
                  <div className="bg-[#BB0000] flex-1"></div>
                  <div className="bg-zinc-800 flex-1"></div>
                </div>
                <span className="text-[9px] font-bold text-zinc-500 mt-1 tracking-[0.3em] uppercase">Sterling & Vision</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-zinc-400 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors">Home</Link>
            <Link to="/gallery" className="text-zinc-400 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors">Archives</Link>
            <Link to="/services" className="text-zinc-400 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors">Forge</Link>
            <Link to="/about" className="text-zinc-400 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors">Heritage</Link>
            <Link to="/checkout" className="relative text-zinc-400 hover:text-white transition-colors">
              <i className="fa-solid fa-cart-shopping text-lg"></i>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-[#BB0000] text-white text-[10px] font-black px-1.5 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link to="/contact" className="border border-zinc-800 text-white px-8 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">Inquire</Link>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <Link to="/checkout" className="relative text-zinc-400 hover:text-white transition-colors">
              <i className="fa-solid fa-cart-shopping text-lg"></i>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-[#BB0000] text-white text-[10px] font-black px-1.5 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-400 hover:text-white focus:outline-none">
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-900 py-6 px-6 space-y-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-zinc-400 text-xs font-bold uppercase tracking-widest">Home</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="block text-zinc-400 text-xs font-bold uppercase tracking-widest">Archives</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block text-zinc-400 text-xs font-bold uppercase tracking-widest">Forge</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block text-zinc-400 text-xs font-bold uppercase tracking-widest">Heritage</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-[#BB0000] font-black text-xs uppercase tracking-widest">Inquire</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
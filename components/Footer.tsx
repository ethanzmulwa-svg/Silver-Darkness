
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-zinc-500 pt-24 pb-12 border-t border-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="space-y-8">
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-black tracking-[0.2em] text-white gothic-font">ZAMANI</span>
            <span className="text-[8px] font-bold text-zinc-700 mt-1 tracking-[0.3em] uppercase">Forging The Darkness</span>
          </div>
          <p className="text-zinc-700 text-[10px] leading-relaxed uppercase tracking-[0.2em]">
            Pure sterling silver metalcraft born in Nairobi. No compromise. No gold. No light.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-zinc-800 hover:text-[#BB0000] transition-colors"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="text-zinc-800 hover:text-[#BB0000] transition-colors"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="text-zinc-800 hover:text-[#BB0000] transition-colors"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-black text-white mb-8 uppercase tracking-[0.5em]">The Archives</h4>
          <ul className="space-y-4 text-[10px] uppercase tracking-widest font-bold">
            <li><Link to="/" className="hover:text-[#BB0000] transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#BB0000] transition-colors">Heritage</Link></li>
            <li><Link to="/services" className="hover:text-[#BB0000] transition-colors">The Forge</Link></li>
            <li><Link to="/checkout" className="hover:text-[#BB0000] transition-colors">The Registry</Link></li>
            <li><Link to="/contact" className="hover:text-[#BB0000] transition-colors">Inquire</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-black text-white mb-8 uppercase tracking-[0.5em]">Craft Core</h4>
          <ul className="space-y-4 text-[10px] uppercase tracking-widest font-bold text-zinc-700">
            <li>Oxidized Silver</li>
            <li>Gothic Eyewear</li>
            <li>Industrial Links</li>
            <li>Magnetic Studs</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-black text-white mb-8 uppercase tracking-[0.5em]">Foundry</h4>
          <address className="not-italic text-[10px] uppercase tracking-widest text-zinc-700 space-y-4 font-bold leading-relaxed">
            <p>123 Ngong Road, Nairobi, Kenya</p>
            <p>+254 700 000 000</p>
            <p>smith@zamaniluxe.com</p>
          </address>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-8 border-t border-zinc-950 text-center">
        <p className="text-zinc-900 text-[9px] font-black uppercase tracking-[0.8em]">&copy; {new Date().getFullYear()} ZAMANI LUXE. COLD FORGED IN KENYA.</p>
      </div>
    </footer>
  );
};

export default Footer;
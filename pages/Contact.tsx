
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="py-24 bg-black text-zinc-400 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[#BB0000] font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">Direct Line</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white uppercase italic tracking-tighter">Enter The Forge</h1>
            <p className="text-zinc-600 font-light tracking-widest uppercase text-xs">Awaiting your custom commission commands.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-2">
              {submitted ? (
                <div className="bg-zinc-950 border border-[#BB0000] p-16 text-center animate-in fade-in duration-500">
                  <i className="fa-solid fa-bolt text-5xl mb-6 text-[#BB0000]"></i>
                  <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-widest">Signal Received</h3>
                  <p className="text-zinc-500 text-sm tracking-widest uppercase">The smiths will respond within one lunar cycle.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="block text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em]">Designation</label>
                      <input 
                        required
                        type="text" 
                        placeholder="NAME"
                        className="w-full px-6 py-4 bg-zinc-950 border border-zinc-900 text-white focus:outline-none focus:border-[#BB0000] transition-all placeholder:text-zinc-800 text-xs font-bold"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="block text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em]">Comms Channel</label>
                      <input 
                        required
                        type="email" 
                        placeholder="EMAIL"
                        className="w-full px-6 py-4 bg-zinc-950 border border-zinc-900 text-white focus:outline-none focus:border-[#BB0000] transition-all placeholder:text-zinc-800 text-xs font-bold"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em]">Interest</label>
                    <select className="w-full px-6 py-4 bg-zinc-950 border border-zinc-900 text-zinc-400 focus:outline-none focus:border-[#BB0000] transition-all text-xs font-bold uppercase tracking-widest appearance-none">
                      <option>Industrial Chain</option>
                      <option>Gothic Eyewear</option>
                      <option>Magnetic Studs</option>
                      <option>Full Collection Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em]">Specifications</label>
                    <textarea 
                      required
                      rows={6}
                      placeholder="MESSAGE"
                      className="w-full px-6 py-4 bg-zinc-950 border border-zinc-900 text-white focus:outline-none focus:border-[#BB0000] transition-all placeholder:text-zinc-800 text-xs font-bold"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-white text-black font-black py-5 uppercase tracking-[0.5em] text-xs hover:bg-[#BB0000] hover:text-white transition-all shadow-2xl"
                  >
                    Transmit
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-12">
              <div className="bg-zinc-950 p-10 border border-zinc-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1 h-full bg-[#BB0000]"></div>
                <h4 className="font-black text-xs mb-6 text-white uppercase tracking-[0.4em]">Nairobi Foundry</h4>
                <p className="text-zinc-500 text-[11px] leading-relaxed uppercase tracking-widest space-y-2">
                  Zamani Building, Level 3<br />
                  Ngong Road, Industrial Zone<br />
                  Nairobi, Kenya
                </p>
                <div className="mt-8 pt-8 border-t border-zinc-900 space-y-2">
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">FORGE HOURS: 0800 - 1800</p>
                  <p className="text-[10px] font-bold text-zinc-700 uppercase tracking-widest">CLOSED SUNDAYS</p>
                </div>
              </div>

              <div className="flex items-center p-8 bg-zinc-950 border border-zinc-900 group hover:border-zinc-700 transition-all">
                <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center text-[#BB0000] mr-6 shrink-0 border border-zinc-800 group-hover:bg-[#BB0000] group-hover:text-white transition-all">
                  <i className="fa-brands fa-whatsapp text-2xl"></i>
                </div>
                <div>
                  <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em]">Instant Forge Link</p>
                  <p className="font-black text-white text-sm tracking-widest">+254 700 000 000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
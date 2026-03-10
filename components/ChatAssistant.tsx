
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Jambo! Welcome to Zamani Luxe. I am your concierge. How may I assist with your sterling silver chains, eyewear, or our new magnetic earrings today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })), { role: 'user', parts: [{ text: input }] }].slice(-10),
        config: {
          systemInstruction: `You are the 'Luxe Concierge' for Zamani Luxe.
          Tone: Highly professional, sophisticated, and focused on industrial luxury.
          Expertise: Strictly ONLY .925 sterling silver gothic chains, 'Chrome Hearts' style gothic eyewear, and gothic silver earrings.
          Key Constraints:
          - DO NOT offer or mention Gold, Diamonds, or Moissanite.
          - We focus on "Industrial Sterling" and "Nairobi Gothic" aesthetics.
          - NEW PRODUCT: Gothic Earrings are available in both MAGNETIC (for non-pierced ears) and NON-MAGNETIC (pierced) versions.
          - Checkout & Payments:
            * We accept Immediate Checkout via M-Pesa and Visa.
            * We also accept Payment on Delivery via M-Pesa, Visa, and Cash.
            * Users can add items to their cart in the 'Forge' (Services) section and proceed to 'The Registry' (Checkout) page.
          - Products: 
            * Heavy Gauge Link Chains (KES 48,000)
            * Nairobi Gothic Frames (KES 82,000)
            * Gothic Cross Studs - Magnetic/Pierced (KES 12,500)
            * Industrial Bolt Earrings - Magnetic/Pierced (KES 9,800)
          - Showroom: Ngong Road, Nairobi.
          - Use 'Jambo' or 'Habari' for greetings.
          - If asked about Chrome Hearts, say we specialize in "Chrome-inspired" artisanal silver frames handcrafted in our Nairobi forge.`,
          temperature: 0.7,
        }
      });

      const modelText = response.text || "Apologies, I'm experiencing a minor connectivity issue. Please reach us via WhatsApp!";
      setMessages(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Poleni sana, our concierge service is currently offline. Please call our Nairobi showroom." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-[350px] sm:w-[400px] h-[500px] flex flex-col overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-300">
          <div className="bg-zinc-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#BB0000] rounded-full flex items-center justify-center mr-3 shadow-lg shadow-red-900/20">
                <i className="fa-solid fa-crown text-[10px]"></i>
              </div>
              <div>
                <h4 className="font-bold text-xs tracking-widest uppercase">Luxe Concierge</h4>
                <div className="flex items-center text-[8px] text-green-400">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1"></span>
                  Studio Online
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-[#BB0000] transition-colors">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-zinc-800 text-white rounded-tr-none shadow-md' 
                    : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-[#BB0000] rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-[#BB0000] rounded-full animate-pulse delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-[#BB0000] rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-gray-100">
            <div className="relative">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Inquire about sterling silver..."
                className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-[#BB0000] text-xs"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isTyping}
                className="absolute right-2 top-1.5 w-9 h-9 bg-zinc-900 text-white rounded-full flex items-center justify-center hover:bg-[#BB0000] disabled:bg-gray-300 transition-all"
              >
                <i className="fa-solid fa-paper-plane text-[10px]"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-zinc-900 hover:bg-[#BB0000] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#BB0000]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <i className="fa-solid fa-link text-xl z-10"></i>
        </button>
      )}
    </div>
  );
};

export default ChatAssistant;

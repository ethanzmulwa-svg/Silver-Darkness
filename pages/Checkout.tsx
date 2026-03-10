
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<'delivery' | 'immediate'>('immediate');
  const [paymentType, setPaymentType] = useState<'visa' | 'mpesa' | 'cash'>('mpesa');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="py-32 bg-black text-center min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full space-y-8 animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-[#BB0000] rounded-full flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(187,0,0,0.4)]">
            <i className="fa-solid fa-check text-3xl text-white"></i>
          </div>
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter italic">Order Forged</h1>
          <p className="text-zinc-500 tracking-widest uppercase text-xs leading-loose">
            Your request has been received by the Nairobi foundry. <br />
            A confirmation signal has been sent to {formData.email}.
          </p>
          <Link to="/" className="inline-block px-12 py-4 bg-white text-black font-black uppercase text-[10px] tracking-[0.3em] hover:bg-[#BB0000] hover:text-white transition-all">
            Return to Archives
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="py-32 bg-black text-center min-h-screen flex items-center justify-center px-4">
        <div className="space-y-8">
          <i className="fa-solid fa-cart-arrow-down text-6xl text-zinc-800"></i>
          <h1 className="text-3xl font-black text-white uppercase tracking-tighter">The Cart is Empty</h1>
          <p className="text-zinc-600 tracking-widest uppercase text-xs">No sterling silver selected for forging.</p>
          <Link to="/services" className="inline-block px-12 py-4 border border-zinc-800 text-white font-black uppercase text-[10px] tracking-[0.3em] hover:border-[#BB0000] transition-all">
            Browse The Forge
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-black text-zinc-400 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Cart Items */}
          <div className="space-y-12">
            <div>
              <span className="text-[#BB0000] font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">Current Selection</span>
              <h1 className="text-5xl font-bold text-white tracking-tighter uppercase italic">The Registry</h1>
            </div>

            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-6 p-4 bg-zinc-950 border border-zinc-900 group hover:border-zinc-800 transition-all">
                  <div className="w-24 h-24 shrink-0 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 transition-all" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-grow flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-black text-white uppercase tracking-widest">{item.title}</h3>
                      <button onClick={() => removeFromCart(item.id)} className="text-zinc-700 hover:text-[#BB0000] transition-colors">
                        <i className="fa-solid fa-xmark text-xs"></i>
                      </button>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center border border-zinc-900">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 hover:bg-zinc-900 transition-colors">-</button>
                        <span className="px-4 text-xs font-bold text-white">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 hover:bg-zinc-900 transition-colors">+</button>
                      </div>
                      <span className="text-sm font-black text-zinc-300 tracking-tighter">KES {(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-zinc-900 flex justify-between items-end">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-zinc-600">Total Valuation</span>
              <span className="text-4xl font-black text-white tracking-tighter italic">KES {totalPrice.toLocaleString()}</span>
            </div>
          </div>

          {/* Right: Checkout Form */}
          <div className="bg-zinc-950 border border-zinc-900 p-8 lg:p-12 relative">
            <div className="absolute top-0 right-0 w-1 h-full bg-[#BB0000]"></div>
            
            <form onSubmit={handleCheckout} className="space-y-10">
              <div className="space-y-8">
                <h2 className="text-xl font-black text-white uppercase tracking-widest">Foundry Logistics</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Designation</label>
                    <input required name="name" value={formData.name} onChange={handleInputChange} type="text" placeholder="NAME" className="w-full bg-black border border-zinc-900 px-4 py-3 text-white text-xs focus:outline-none focus:border-[#BB0000] transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Comms Channel</label>
                    <input required name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="EMAIL" className="w-full bg-black border border-zinc-900 px-4 py-3 text-white text-xs focus:outline-none focus:border-[#BB0000] transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Mobile Link</label>
                  <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" placeholder="PHONE NUMBER" className="w-full bg-black border border-zinc-900 px-4 py-3 text-white text-xs focus:outline-none focus:border-[#BB0000] transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Delivery Sector</label>
                  <textarea required name="address" value={formData.address} onChange={handleInputChange} rows={3} placeholder="PHYSICAL ADDRESS" className="w-full bg-black border border-zinc-900 px-4 py-3 text-white text-xs focus:outline-none focus:border-[#BB0000] transition-all"></textarea>
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-xl font-black text-white uppercase tracking-widest">Payment Protocol</h2>
                
                <div className="flex gap-4">
                  <button 
                    type="button"
                    onClick={() => setPaymentMethod('immediate')}
                    className={`flex-1 py-4 border text-[10px] font-black uppercase tracking-widest transition-all ${paymentMethod === 'immediate' ? 'bg-white text-black border-white' : 'border-zinc-800 text-zinc-600 hover:border-zinc-600'}`}
                  >
                    Immediate
                  </button>
                  <button 
                    type="button"
                    onClick={() => setPaymentMethod('delivery')}
                    className={`flex-1 py-4 border text-[10px] font-black uppercase tracking-widest transition-all ${paymentMethod === 'delivery' ? 'bg-white text-black border-white' : 'border-zinc-800 text-zinc-600 hover:border-zinc-600'}`}
                  >
                    On Delivery
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <button 
                    type="button"
                    onClick={() => setPaymentType('mpesa')}
                    className={`py-4 border flex flex-col items-center gap-2 transition-all ${paymentType === 'mpesa' ? 'border-[#006600] text-white bg-[#006600]/10' : 'border-zinc-900 text-zinc-700 hover:border-zinc-800'}`}
                  >
                    <i className="fa-solid fa-mobile-screen-button text-lg"></i>
                    <span className="text-[8px] font-black uppercase tracking-widest">M-Pesa</span>
                  </button>
                  <button 
                    type="button"
                    onClick={() => setPaymentType('visa')}
                    className={`py-4 border flex flex-col items-center gap-2 transition-all ${paymentType === 'visa' ? 'border-blue-600 text-white bg-blue-600/10' : 'border-zinc-900 text-zinc-700 hover:border-zinc-800'}`}
                  >
                    <i className="fa-brands fa-cc-visa text-lg"></i>
                    <span className="text-[8px] font-black uppercase tracking-widest">Visa</span>
                  </button>
                  {paymentMethod === 'delivery' && (
                    <button 
                      type="button"
                      onClick={() => setPaymentType('cash')}
                      className={`py-4 border flex flex-col items-center gap-2 transition-all ${paymentType === 'cash' ? 'border-zinc-400 text-white bg-zinc-400/10' : 'border-zinc-900 text-zinc-700 hover:border-zinc-800'}`}
                    >
                      <i className="fa-solid fa-money-bill-1-wave text-lg"></i>
                      <span className="text-[8px] font-black uppercase tracking-widest">Cash</span>
                    </button>
                  )}
                </div>
              </div>

              <button 
                disabled={isProcessing}
                type="submit"
                className="w-full bg-[#BB0000] text-white font-black py-6 uppercase tracking-[0.5em] text-xs hover:bg-white hover:text-black transition-all shadow-[0_10px_30px_rgba(187,0,0,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Processing...' : 'Confirm Forge Request'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;

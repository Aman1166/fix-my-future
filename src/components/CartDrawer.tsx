import { useState, useEffect, useContext } from 'react';
import { useCart } from '../store';
import { ThemeContext } from '../App';

export default function CartDrawer() {
  const { isDark } = useContext(ThemeContext);
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice, totalItems, isCartOpen, setIsCartOpen } = useCart();
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [paymentMethod, setPaymentMethod] = useState('');

  useEffect(() => {
    const handler = (e: Event) => {
      const val = (e as CustomEvent).detail;
      setIsCartOpen(val);
      if (val) setStep('cart');
    };
    window.addEventListener('openCart', handler);
    return () => window.removeEventListener('openCart', handler);
  }, [setIsCartOpen]);

  if (!isCartOpen) return null;

  const shipping = totalPrice > 999 ? 0 : 99;
  const gst = Math.round(totalPrice * 0.18);
  const grandTotal = totalPrice + shipping + gst;

  const handleCheckout = () => {
    if (!paymentMethod) return;
    setStep('success');
    setTimeout(() => {
      clearCart();
      setStep('cart');
      setPaymentMethod('');
      setIsCartOpen(false);
    }, 3000);
  };

  return (
    <>
      <div className={`fixed inset-0 backdrop-blur-sm z-[55] ${isDark ? 'bg-gray-800/60' : 'bg-white/60'}`} onClick={() => { setIsCartOpen(false); setStep('cart'); }}></div>
      <div className={`fixed top-0 right-0 h-full w-full max-w-md z-[56] shadow-2xl flex flex-col animate-slideInRight ${isDark ? 'bg-gray-800 border-l border-white/10' : 'bg-white border-l border-gray-200'}`}>
        {/* Header */}
        <div className={`p-5 flex items-center justify-between border-b ${isDark ? 'bg-gradient-to-r from-gray-800 to-gray-900 border-white/10' : 'bg-gradient-to-r from-white to-gray-50 border-gray-200'}`}>
          <div className="flex items-center space-x-3">
            {step === 'checkout' && (
              <button onClick={() => setStep('cart')} className={`mr-2 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
            )}
            <span className="text-2xl"><i className="fa-solid fa-cart-shopping text-amber-500"></i></span>
            <div>
              <h2 className={`font-black text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{step === 'checkout' ? 'Checkout' : step === 'success' ? 'Order Placed!' : 'Your Cart'}</h2>
              {step === 'cart' && <p className={`text-[10px] font-bold ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{totalItems} items</p>}
            </div>
          </div>
          <button onClick={() => { setIsCartOpen(false); setStep('cart'); }} className={`text-xl font-bold ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>✕</button>
        </div>

        {/* Success State */}
        {step === 'success' && (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-24 h-24 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center text-5xl mb-6 animate-bounce"><i className="fa-solid fa-check text-green-500"></i></div>
            <h3 className={`text-2xl font-black mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Order Successful! 🎉</h3>
            <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Your order has been placed successfully. You will receive a confirmation email shortly.</p>
            <div className={`rounded-xl p-4 border w-full max-w-xs ${isDark ? 'bg-gray-800 border-white/5' : 'bg-gray-50 border-gray-200'}`}>
              <p className={`text-xs font-bold ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Order ID: <span className="text-amber-500">#FMF{Math.floor(Math.random() * 90000 + 10000)}</span></p>
              <p className={`text-xs font-bold mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Estimated Delivery: <span className="text-green-400">3-5 Business Days</span></p>
            </div>
          </div>
        )}

        {/* Cart Items */}
        {step === 'cart' && (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="text-6xl mb-4 opacity-30"><i className="fa-solid fa-cart-shopping"></i></div>
                  <h3 className={`text-lg font-black mb-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Your cart is empty</h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Add some gemstones or rudraksha to get started!</p>
                  <button onClick={() => setIsCartOpen(false)} className="mt-6 px-6 py-2.5 bg-amber-500 text-white font-black text-xs rounded-xl uppercase tracking-wider">
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className={`rounded-xl p-3 flex items-center space-x-3 border group ${isDark ? 'bg-gray-800/80 border-white/5' : 'bg-gray-50 border-gray-200'}`}>
                    <img src={item.image} alt={item.name} className={`w-20 h-20 rounded-lg object-cover border ${isDark ? 'border-white/10' : 'border-gray-200'}`} />
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-bold text-sm truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.name}</h4>
                      <p className="text-amber-500 font-black text-sm mt-1">{item.price}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold ${isDark ? 'bg-gray-700 border border-white/10 text-gray-300 hover:bg-slate-700' : 'bg-gray-200 border border-gray-300 text-gray-700 hover:bg-gray-300'}`}>−</button>
                        <span className={`font-black text-sm w-6 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold ${isDark ? 'bg-gray-700 border border-white/10 text-gray-300 hover:bg-slate-700' : 'bg-gray-200 border border-gray-300 text-gray-700 hover:bg-gray-300'}`}>+</button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <button onClick={() => removeFromCart(item.id)} className={`transition-colors text-xs font-bold ${isDark ? 'text-stone-500 hover:text-red-400' : 'text-gray-400 hover:text-red-500'}`}><i className="fa-solid fa-trash-can"></i></button>
                      <span className={`font-black text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>₹{item.priceNum * item.quantity}</span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className={`border-t p-4 space-y-3 ${isDark ? 'border-white/10 bg-gray-800/80' : 'border-gray-200 bg-gray-50'}`}>
                <div className="space-y-1.5 text-xs">
                  <div className={`flex justify-between ${isDark ? 'text-gray-400' : 'text-gray-500'}`}><span>Subtotal</span><span>₹{totalPrice}</span></div>
                  <div className={`flex justify-between ${isDark ? 'text-gray-400' : 'text-gray-500'}`}><span>Shipping</span><span className={shipping === 0 ? 'text-green-400' : ''}>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span></div>
                  <div className={`flex justify-between ${isDark ? 'text-gray-400' : 'text-gray-500'}`}><span>GST (18%)</span><span>₹{gst}</span></div>
                  <div className={`flex justify-between font-black text-base pt-2 border-t ${isDark ? 'text-white border-white/5' : 'text-gray-900 border-gray-200'}`}><span>Total</span><span className="text-amber-500">₹{grandTotal}</span></div>
                </div>
                {shipping === 0 && <p className="text-[10px] text-green-400 font-bold text-center">🎉 Free shipping on orders above ₹999!</p>}
                <button onClick={() => setStep('checkout')} className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black py-3.5 rounded-xl shadow-xl text-sm tracking-wider uppercase active:scale-[0.98] transition-all">
                  Proceed to Checkout →
                </button>
              </div>
            )}
          </>
        )}

        {/* Checkout Step */}
        {step === 'checkout' && (
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Delivery Address */}
            <div className={`rounded-xl p-4 border space-y-3 ${isDark ? 'bg-gray-800/80 border-white/5' : 'bg-gray-50 border-gray-200'}`}>
              <h3 className={`font-black text-sm flex items-center space-x-2 ${isDark ? 'text-white' : 'text-gray-900'}`}><span><i className="fa-solid fa-location-dot text-amber-500"></i></span><span>Delivery Address</span></h3>
              <input placeholder="Full Name" className={`w-full rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-amber-500/50 ${isDark ? 'bg-gray-700 border border-white/10 text-white placeholder-stone-500' : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400'}`} />
              <input placeholder="Phone Number" className={`w-full rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-amber-500/50 ${isDark ? 'bg-gray-700 border border-white/10 text-white placeholder-stone-500' : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400'}`} />
              <textarea placeholder="Full Address (House No, Street, City, Pincode)" rows={2} className={`w-full rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-amber-500/50 resize-none ${isDark ? 'bg-gray-700 border border-white/10 text-white placeholder-stone-500' : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400'}`} />
            </div>

            {/* Payment Methods */}
            <div className={`rounded-xl p-4 border space-y-3 ${isDark ? 'bg-gray-800/80 border-white/5' : 'bg-gray-50 border-gray-200'}`}>
              <h3 className={`font-black text-sm flex items-center space-x-2 ${isDark ? 'text-white' : 'text-gray-900'}`}><span><i className="fa-solid fa-credit-card text-amber-500"></i></span><span>Payment Method</span></h3>
              {[
                { id: 'upi', label: 'UPI (GPay / PhonePe / Paytm)', icon: <i className="fa-solid fa-mobile-screen"></i> },
                { id: 'card', label: 'Credit / Debit Card', icon: <i className="fa-solid fa-credit-card"></i> },
                { id: 'netbanking', label: 'Net Banking', icon: <i className="fa-solid fa-building-columns"></i> },
                { id: 'cod', label: 'Cash on Delivery', icon: <i className="fa-solid fa-money-bill-wave"></i> },
              ].map(method => (
                <button
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg border transition-all text-left ${paymentMethod === method.id ? 'border-amber-500 bg-amber-500/10' : isDark ? 'border-white/10 hover:border-white/20' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <span className="text-xl">{method.icon}</span>
                  <span className={`text-sm font-bold ${paymentMethod === method.id ? 'text-amber-500' : isDark ? 'text-gray-300' : 'text-gray-700'}`}>{method.label}</span>
                  {paymentMethod === method.id && <span className="ml-auto text-amber-500">●</span>}
                </button>
              ))}
            </div>

            {/* Order Summary */}
            <div className={`rounded-xl p-4 border space-y-2 ${isDark ? 'bg-gray-800/80 border-white/5' : 'bg-gray-50 border-gray-200'}`}>
              <h3 className={`font-black text-sm flex items-center space-x-2 ${isDark ? 'text-white' : 'text-gray-900'}`}><span><i className="fa-solid fa-list-check text-amber-500"></i></span><span>Order Summary</span></h3>
              {cart.map(item => (
                <div key={item.id} className={`flex justify-between text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  <span className="truncate mr-2">{item.name} × {item.quantity}</span>
                  <span className={`font-bold flex-shrink-0 ${isDark ? 'text-white' : 'text-gray-900'}`}>₹{item.priceNum * item.quantity}</span>
                </div>
              ))}
              <div className={`border-t pt-2 mt-2 space-y-1 text-xs ${isDark ? 'border-white/5' : 'border-gray-200'}`}>
                <div className={`flex justify-between ${isDark ? 'text-gray-400' : 'text-gray-500'}`}><span>Subtotal</span><span>₹{totalPrice}</span></div>
                <div className={`flex justify-between ${isDark ? 'text-gray-400' : 'text-gray-500'}`}><span>Shipping</span><span className={shipping === 0 ? 'text-green-400' : ''}>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span></div>
                <div className={`flex justify-between ${isDark ? 'text-gray-400' : 'text-gray-500'}`}><span>GST</span><span>₹{gst}</span></div>
                <div className={`flex justify-between font-black text-base pt-1 border-t ${isDark ? 'text-white border-white/5' : 'text-gray-900 border-gray-200'}`}><span>Grand Total</span><span className="text-amber-500">₹{grandTotal}</span></div>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={!paymentMethod}
              className={`w-full font-black py-4 rounded-xl shadow-xl text-sm tracking-wider uppercase active:scale-[0.98] transition-all ${paymentMethod ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-green-500/10' : isDark ? 'bg-gray-700 text-stone-500 cursor-not-allowed' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
            >
              {paymentMethod ? `💰 Pay ₹${grandTotal}` : 'Select Payment Method'}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

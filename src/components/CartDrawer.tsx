import { useState, useEffect } from 'react';
import { useCart } from '../store';

export default function CartDrawer() {
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
      <div className="fixed inset-0 glass z-[55]" onClick={() => { setIsCartOpen(false); setStep('cart'); }}></div>
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-bg-primary z-[56] shadow-2xl border-l border-border-theme flex flex-col animate-slideInRight">

        {/* Header */}
        <div className="bg-bg-secondary p-5 flex items-center justify-between border-b border-border-theme">

          <div className="flex items-center space-x-3">
            {step === 'checkout' && (
              <button onClick={() => setStep('cart')} className="p-2.5 rounded-xl text-text-muted hover:text-[var(--text-primary)] hover:glass-light transition-all active:scale-90">
                <i className="fas fa-chevron-left text-xl"></i>
              </button>
            )}
            <span className="text-2xl">🛒</span>
            <div>
              <h2 className="font-black text-text-main text-lg">{step === 'checkout' ? 'Checkout' : step === 'success' ? 'Order Placed!' : 'Your Cart'}</h2>

              {step === 'cart' && <p className="text-[10px] text-[var(--text-secondary)] font-bold">{totalItems} items</p>}
            </div>
          </div>
          <button onClick={() => setIsCartOpen(false)} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xl font-bold"><i className="fas fa-times"></i></button>
        </div>

        {/* Success State */}
        {step === 'success' && (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-24 h-24 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center text-5xl mb-6 animate-bounce">✓</div>
            <h3 className="text-2xl font-black text-[var(--text-primary)] mb-2">Order Successful! 🎉</h3>
            <p className="text-[var(--text-secondary)] text-sm mb-4">Your order has been placed successfully. You will receive a confirmation email shortly.</p>
            <div className="bg-bg-secondary rounded-xl p-4 border border-border-theme w-full max-w-xs">

              <p className="text-xs text-[var(--text-secondary)] font-bold">Order ID: <span className="text-[var(--accent-color)]">#FMF{Math.floor(Math.random() * 90000 + 10000)}</span></p>
              <p className="text-xs text-[var(--text-secondary)] font-bold mt-1">Estimated Delivery: <span className="text-green-400">3-5 Business Days</span></p>
            </div>
          </div>
        )}

        {/* Cart Items */}
        {step === 'cart' && (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-24 h-24 bg-[var(--bg-secondary)] rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-shopping-basket text-4xl text-text-muted"></i>
                  </div>
                  <h3 className="text-lg font-black text-[var(--text-secondary)] mb-1">Your cart is empty</h3>
                  <p className="text-sm text-[var(--text-secondary)]">Add some gemstones or rudraksha to get started!</p>
                  <button onClick={() => setIsCartOpen(false)} className="mt-6 px-6 py-2.5 bg-[var(--accent-color)] text-gray-800 font-black text-xs rounded-xl uppercase tracking-wider">
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="glass-heavy rounded-xl p-3 flex items-center space-x-3 border border-white/5 group">
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover border border-[var(--border-color)]" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-text-main text-sm truncate">{item.name}</h4>

                      <p className="text-[var(--accent-color)] font-black text-sm mt-1">{item.price}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 glass-light border border-[var(--border-color)] rounded-lg flex items-center justify-center text-gray-300 hover:glass-light text-sm font-bold">−</button>
                        <span className="text-[var(--text-primary)] font-black text-sm w-6 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 glass-light border border-[var(--border-color)] rounded-lg flex items-center justify-center text-gray-300 hover:glass-light text-sm font-bold">+</button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <button onClick={() => removeFromCart(item.id)} className="text-[var(--text-secondary)] hover:text-red-400 transition-colors text-xs font-bold">🗑️</button>
                      <span className="text-[var(--text-primary)] font-black text-sm">₹{item.priceNum * item.quantity}</span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className="border-t border-border-theme glass-heavy p-4 space-y-3">

                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-[var(--text-secondary)]"><span>Subtotal</span><span>₹{totalPrice}</span></div>
                  <div className="flex justify-between text-[var(--text-secondary)]"><span>Shipping</span><span className={shipping === 0 ? 'text-green-400' : ''}>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span></div>
                  <div className="flex justify-between text-[var(--text-secondary)]"><span>GST (18%)</span><span>₹{gst}</span></div>
                  <div className="flex justify-between text-[var(--text-primary)] font-black text-base pt-2 border-t border-white/5"><span>Total</span><span className="text-[var(--accent-color)]">₹{grandTotal}</span></div>
                </div>
                {shipping === 0 && <p className="text-[10px] text-green-400 font-bold text-center">🎉 Free shipping on orders above ₹999!</p>}
                <button onClick={() => setStep('checkout')} className="w-full bg-gradient-to-r from-amber-500 to-amber-600-500 hover:from-amber-600 hover:to-amber-600-600 text-gray-800 font-black py-3.5 rounded-xl shadow-xl text-sm tracking-wider uppercase active:scale-[0.98] transition-all">
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
            <div className="glass-heavy rounded-xl p-4 border border-white/5 space-y-3">
              <h3 className="font-black text-[var(--text-primary)] text-sm flex items-center space-x-2"><span>📍</span><span>Delivery Address</span></h3>
              <input placeholder="Full Name" className="w-full input-glass border border-[var(--border-color)] rounded-lg px-3 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-color)]/50" />
              <input placeholder="Phone Number" className="w-full input-glass border border-[var(--border-color)] rounded-lg px-3 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-color)]/50" />
              <textarea placeholder="Full Address (House No, Street, City, Pincode)" rows={2} className="w-full input-glass border border-[var(--border-color)] rounded-lg px-3 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-color)]/50 resize-none" />
            </div>

            {/* Payment Methods */}
            <div className="glass-heavy rounded-xl p-4 border border-white/5 space-y-3">
              <h3 className="font-black text-[var(--text-primary)] text-sm flex items-center space-x-2"><span>💳</span><span>Payment Method</span></h3>
              {[
                { id: 'upi', label: 'UPI (GPay / PhonePe / Paytm)', icon: '📱' },
                { id: 'card', label: 'Credit / Debit Card', icon: '💳' },
                { id: 'netbanking', label: 'Net Banking', icon: '🏦' },
                { id: 'cod', label: 'Cash on Delivery', icon: '💵' },
              ].map(method => (
                <button
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg border transition-all text-left ${paymentMethod === method.id ? 'border-[var(--accent-color)] bg-[var(--accent-color)]/10' : 'border-[var(--border-color)] hover:border-[var(--border-color)]'}`}
                >
                  <span className="text-xl">{method.icon}</span>
                  <span className={`text-sm font-bold ${paymentMethod === method.id ? 'text-[var(--accent-color)]' : 'text-gray-300'}`}>{method.label}</span>
                  {paymentMethod === method.id && <span className="ml-auto text-[var(--accent-color)]">●</span>}
                </button>
              ))}
            </div>

            {/* Order Summary */}
            <div className="glass-heavy rounded-xl p-4 border border-white/5 space-y-2">
              <h3 className="font-black text-[var(--text-primary)] text-sm">📋 Order Summary</h3>
              {cart.map(item => (
                <div key={item.id} className="flex justify-between text-xs text-[var(--text-secondary)]">
                  <span className="truncate mr-2">{item.name} × {item.quantity}</span>
                  <span className="font-bold text-[var(--text-primary)] flex-shrink-0">₹{item.priceNum * item.quantity}</span>
                </div>
              ))}
              <div className="border-t border-white/5 pt-2 mt-2 space-y-1 text-xs">
                <div className="flex justify-between text-[var(--text-secondary)]"><span>Subtotal</span><span>₹{totalPrice}</span></div>
                <div className="flex justify-between text-[var(--text-secondary)]"><span>Shipping</span><span className={shipping === 0 ? 'text-green-400' : ''}>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span></div>
                <div className="flex justify-between text-[var(--text-secondary)]"><span>GST</span><span>₹{gst}</span></div>
                <div className="flex justify-between text-[var(--text-primary)] font-black text-base pt-1 border-t border-white/5"><span>Grand Total</span><span className="text-[var(--accent-color)]">₹{grandTotal}</span></div>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={!paymentMethod}
              className={`w-full font-black py-4 rounded-xl shadow-xl text-sm tracking-wider uppercase active:scale-[0.98] transition-all ${paymentMethod ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-[var(--text-primary)] shadow-green-500/10' : 'glass-light text-[var(--text-secondary)] cursor-not-allowed'}`}
            >
              {paymentMethod ? `💰 Pay ₹${grandTotal}` : 'Select Payment Method'}
            </button>
          </div>
        )}
      </div>
    </>
  );
}







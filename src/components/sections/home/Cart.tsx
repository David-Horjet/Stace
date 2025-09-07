"use client"

import { useState, useEffect } from 'react';
import { useCart } from '@/contexts/CartContext';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import Button from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const Cart = () => {
  const { 
    items, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getTotal, 
    isCartOpen, 
    setIsCartOpen 
  } = useCart();
  
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isCartOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isCartOpen]);

  const handleCheckout = () => {
    setIsCartOpen(false);
    router.push('/order/checkout');
  };

  console.log("isCartOpen: ", isCartOpen)

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart Sidebar */}
      <div className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-sage/20">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-dusty-rose" />
              <h2 className="font-display text-xl font-semibold text-charcoal">
                Shopping Cart ({items.length})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-sage/10 rounded-full transition-colors duration-200"
            >
              <X className="w-5 h-5 text-charcoal" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-sage/30 mb-4" />
                <h3 className="font-display text-lg font-semibold text-charcoal mb-2">
                  Your cart is empty
                </h3>
                <p className="text-charcoal/60 font-body">
                  Add some beautiful crochet pieces to get started
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item, index) => (
                  <div 
                    key={`${item.id}-${item.size}-${item.color}`}
                    className={`flex gap-4 p-4 bg-cream/50 rounded-xl animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Product Image */}
                    <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg bg-white">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-charcoal truncate mb-1">
                        {item.name}
                      </h3>
                      <div className="text-sm text-charcoal/60 mb-2">
                        {item.size && <span>Size: {item.size}</span>}
                        {item.size && item.color && <span className="mx-2">•</span>}
                        {item.color && <span>Color: {item.color}</span>}
                      </div>
                      
                      {/* Price and Quantity */}
                      <div className="flex items-center justify-between">
                        <span className="font-display font-semibold text-dusty-rose">
                          ${item.price}
                        </span>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-white rounded transition-colors duration-200"
                          >
                            <Minus className="w-4 h-4 text-charcoal" />
                          </button>
                          <span className="w-8 text-center font-semibold text-charcoal">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-white rounded transition-colors duration-200"
                          >
                            <Plus className="w-4 h-4 text-charcoal" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1 hover:bg-red-50 rounded transition-colors duration-200 ml-2"
                          >
                            <Trash2 className="w-4 h-4 text-red-400 hover:text-red-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Clear Cart Button */}
                {items.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="w-full text-sm text-charcoal/60 hover:text-red-500 font-medium transition-colors duration-200"
                  >
                    Clear Cart
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-sage/20 p-6 space-y-4">
              {/* Total */}
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-semibold text-charcoal">
                  Total:
                </span>
                <span className="font-display text-2xl font-bold text-dusty-rose">
                  ${getTotal().toFixed(2)}
                </span>
              </div>

              {/* Checkout Button */}
              <Button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-dusty-rose to-terracotta hover:from-terracotta hover:to-dusty-rose text-white font-semibold py-3 rounded-full transition-all duration-500 transform hover:scale-105 shadow-elegant"
              >
                Proceed to Checkout
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
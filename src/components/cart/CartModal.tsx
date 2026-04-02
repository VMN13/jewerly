 "use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from './CartProvider';

export default function CartModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { totalItems } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const goToCart = () => {
    onClose();
    router.push('/cart');
  };

  if (!isOpen) return null;

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-modal-head">
          <h3>Товар добавлен в корзину!</h3>
          <button className="cart-modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="cart-modal-body">
          <p>Количество товаров в корзине: <strong>{totalItems}</strong></p>
          <button className="cart-modal-btn" onClick={goToCart}>
            Перейти в корзину
          </button>
          <button className="cart-modal-continue" onClick={onClose}>
            Продолжить покупки
          </button>
        </div>
      </div>
    </div>
  );
}
 

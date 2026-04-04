"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "./CartProvider";

export default function CartModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { totalItems } = useCart();
  const router = useRouter();

  const goToCart = () => {
    onClose();
    router.push("/cart");
  };

  if (!isOpen) return null;

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        {/* Head removed */}
        <div className="cart-modal-body">
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

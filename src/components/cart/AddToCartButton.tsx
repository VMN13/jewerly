 "use client";

import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import CartModal from './CartModal';

type AddToCartButtonProps = {
  productId: number;
};

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState(false);

  const handleAdd = () => {
    if (showModal) return;
    addToCart(productId);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <>
      <button
        type="button"
        className="cart-add-btn"
        onClick={handleAdd}
        disabled={showModal}
      >
        {showModal ? "Добавлено ✓" : "Добавить в корзину"}
      </button>
      <CartModal isOpen={showModal} onClose={closeModal} />
    </>
  );
}
 

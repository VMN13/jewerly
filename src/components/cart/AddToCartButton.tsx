"use client";

import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";

type AddToCartButtonProps = {
  productId: number;
};

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (added) return;
    addToCart(productId);
    setAdded(true);
  };

  return (
    <button
      type="button"
      className="cart-add-btn"
      onClick={handleAdd}
      disabled={added}
    >
      {added ? "Добавлено ✓" : "Добавить в корзину"}
    </button>
  );
}

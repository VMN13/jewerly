 "use client";

import { useState } from "react";
import { useCart } from "./CartProvider";

interface CatalogAddToCartButtonProps {
  productId: number;
}

export default function CatalogAddToCartButton({ productId }: CatalogAddToCartButtonProps) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (isAdding) return;
    setIsAdding(true);
    addToCart(productId);
    setTimeout(() => setIsAdding(false), 2000);
  };

  return (
    <button
      type="button"
      className="cart-add-btn no-link"
      onClick={handleAdd}
      disabled={isAdding}
    >
      {isAdding ? "Добавлено ✓" : "Добавить в корзину"}
    </button>
  );
} 

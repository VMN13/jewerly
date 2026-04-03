"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/cart/CartProvider";

export default function CartLink() {
  const { totalItems, totalPrice } = useCart();

  return (
    <Link className="cart" href="/cart">
    <div className="cart-container">
      <span className="cart-info">
        <Image 
        src="/images/basket.svg" 
        alt="🛍️ Корзина" 
        width={24} 
        height={24}
        className="cart-icon-image"
      /> <span className="cart-badge">{totalItems}</span> | {totalPrice.toLocaleString('ru-RU')} BYN
      </span>
      </div>
    </Link>
  );
}


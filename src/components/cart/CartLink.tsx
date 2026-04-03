"use client";

import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";

export default function CartLink() {
  const { totalItems, totalPrice } = useCart();

  return <Link href="/cart">Корзина ({totalItems}) | {totalPrice.toLocaleString('ru-RU')} BY</Link>;
}

"use client";

import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";

export default function CartLink() {
  const { totalItems } = useCart();

  return <Link href="/cart">Корзина <span suppressHydrationWarning>({totalItems})</span></Link>;
}

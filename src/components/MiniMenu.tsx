"use client";

import { useState } from "react";
import Link from "next/link";
import CartLink from "@/components/cart/CartLink";

export default function MiniMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mini-menu" aria-label="Mini navigation">
      {/* Desktop */}
      <div className="mini-menu-desktop">
        <Link href="/" className="mini-menu-link">Главная</Link>
        <Link href="/pages" className="mini-menu-link">Каталог</Link>
        <CartLink />
      </div>
      
      {/* Mobile hamburger */}
      <button 
        className="mini-menu-toggle"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span />
        <span />
        <span />
      </button>
      
      {/* Mobile dropdown */}
      {isOpen && (
        <div className="mini-menu-mobile">
          <Link href="/" className="mini-menu-link" onClick={() => setIsOpen(false)}>Главная</Link>
          <Link href="/pages" className="mini-menu-link" onClick={() => setIsOpen(false)}>Каталог</Link>
          <Link href="/cart" className="mini-menu-link" onClick={() => setIsOpen(false)}>Корзина</Link>
        </div>
      )}
    </nav>
  );
}

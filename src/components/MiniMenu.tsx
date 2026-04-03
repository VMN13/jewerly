"use client";

import Link from "next/link";
import CartLink from "@/components/cart/CartLink";
import { useState } from "react";

export default function MiniMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="mini-menu-nav" role="navigation" aria-label="Мини меню навигации">
      {/* Desktop версия */}
      <ul className="mini-menu-desktop" role="list">
        <li>
          <Link href="/" className="mini-menu-link" onClick={closeMenu}>
            Главная
          </Link>
        </li>
        <li>
          <Link href="/pages" className="mini-menu-link" onClick={closeMenu}>
            Каталог
          </Link>
        </li>
        <li className="mini-menu-link cart-link-mini">
          <CartLink />
        </li>
      </ul>

      {/* Мобильная кнопка гамбургер */}
      <button 
        className="mini-menu-hamburger"
        aria-label="Переключить меню"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>

      </button>

      {/* Мобильное выпадающее меню */}
      {isOpen && (
        <ul className="mini-menu-mobile" role="list">
          <li>
            <Link href="/" className="mini-menu-link" onClick={closeMenu}>
              Главная
            </Link>
          </li>
          <li>
            <Link href="/pages" className="mini-menu-link" onClick={closeMenu}>
              Каталог
            </Link>
          </li>
          <li className="mini-menu-link cart-link-mini" onClick={closeMenu}>
            <CartLink />
          </li>
        </ul>
      )}
    </nav>
  );
}


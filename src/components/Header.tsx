"use client";

import { useState } from "react";
import Link from "next/link";
import CartLink from "@/components/cart/CartLink";
import { categories } from "@/data/categories";

// Компонент заголовка сайта с поиском и меню
export default function Header({ hideHeader }: { hideHeader?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  if (hideHeader) return null;

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <button
          type="button"
          className="mobile-menu-btn"
          aria-label="Открыть меню"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
        >
          
        </button>
         <CartLink />
  <nav className="header-nav" aria-label="Main navigation">
     
            <Link href="/" className="brand" onClick={closeMenu}>
          Yours Jewerly
        </Link>
      
        </nav>
        <div
          className={`mobile-sidebar-overlay ${isMenuOpen ? "is-open" : ""}`}
          onClick={closeMenu}
          aria-hidden="true"
        />
        <aside className={`mobile-sidebar ${isMenuOpen ? "is-open" : ""}`} aria-label="Мобильное меню">
          <div className="mobile-sidebar-head">
            <strong>Разделы</strong>
            <button type="button" className="mobile-sidebar-close" onClick={closeMenu} aria-label="Закрыть меню">
              X
            </button>
          </div>

          <nav className="mobile-sidebar-nav" aria-label="Разделы каталога">
            {categories.map((category) => (
              <Link key={category.id} href={category.href} onClick={closeMenu}>
                {category.title}
              </Link>
            ))}
          </nav>
        </aside>
      </div>
    </header>
  );
}

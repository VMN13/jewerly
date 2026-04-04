"use client";

import { useState } from "react";
import Link from "next/link";
import CartLink from "@/components/cart/CartLink";
import BurgerMenu from "@/components/BurgerMenu";
import { categories } from "@/data/categories";
import { allProducts } from "@/data/products";



// Компонент заголовка сайта с поиском и меню
export default function Header({ hideHeader }: { hideHeader?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  if (hideHeader) return null;

  return (
    <header className="site-header">
      
      <div className="site-shell header-inner">
 
            <div className="first-menu">
<button
  type="button"
  className="burger-toggle"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
  ☰
</button>
<BurgerMenu isOpen={isMenuOpen} onClose={closeMenu} />

         <CartLink />
</div>
            <Link href="/" className="brand" onClick={closeMenu}>
          Yours Jewerly
        </Link>
      </div>
    </header>
  );
}

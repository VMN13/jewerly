"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartLink from "@/components/cart/CartLink";
import BurgerMenu from "@/components/BurgerMenu";
import ThemeToggle from "@/components/ThemeToggle";

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
          <Link href="/" className="rs-logo-link">
           
           
          </Link>
          <BurgerMenu isOpen={isMenuOpen} onClose={closeMenu} />
          <CartLink />
          <ThemeToggle />
        </div>
        
        <Link href="/" className="brand">
          Yours Jewerly
        
        </Link>
      </div>
    </header>
  );
}


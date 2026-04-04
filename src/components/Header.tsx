"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartLink from "@/components/cart/CartLink";
import BurgerMenu from "@/components/BurgerMenu";

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
            <Image 
            src="/images/logo/RS.jpg" 
            alt="RS Logo" 
            width={80} 
            height={30}
          />
          <BurgerMenu isOpen={isMenuOpen} onClose={closeMenu} />
          <CartLink />
        </div>
        
        <Link href="/" className="brand">
          Yours Jewerly
        
        </Link>
      </div>
    </header>
  );
}


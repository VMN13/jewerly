"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchInput from "@/components/SearchInput";
import CartLink from "@/components/cart/CartLink";
import BurgerMenu from "@/components/BurgerMenu";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header({ hideHeader }: { hideHeader?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  if (hideHeader) return null;

  return (
    <header className="site-header">
      <div className="header-left">
        <button
          type="button"
          className="burger-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Image src="/images/burger/burger.svg" alt="Burger menu" width={24} height={24} />
        </button>
        <BurgerMenu isOpen={isMenuOpen} onClose={closeMenu} />
        <ThemeToggle />
      </div>
        <Link href="/" className="brand">
          Yours <span className="j-gold">J</span>ewerly
        </Link>
      <CartLink />
    </header>
  );
}

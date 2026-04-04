"use client";

import Link from "next/link";
import { allProducts } from "@/data/products";
import { categories } from "@/data/categories";

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BurgerMenu({ isOpen, onClose }: BurgerMenuProps) {
  return (
    <aside className={`burger-menu ${isOpen ? "open" : ""}`}>
      <div className="burger-head">
        <strong>Меню</strong>
        <button className="burger-close" onClick={onClose}>
          ×
        </button>
      </div>

      <nav className="burger-categories">
        <strong>Разделы</strong>
        {categories.map((cat) => (
          <Link key={cat.id} href={cat.href} onClick={onClose}>
            {cat.title}
          </Link>
        ))}
      </nav>

      <nav className="burger-products">
        <strong>Товары ({allProducts.length})</strong>
        <div className="burger-products-list">
          {allProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              onClick={onClose}
            >
              {product.name}
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
}

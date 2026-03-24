"use client";

import { useMemo, useState } from "react";
import { useRouter as useRouterNext } from "next/navigation";
import Link from "next/link";
import CartLink from "@/components/cart/CartLink";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

// Компонент заголовка сайта с поиском и меню
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  const closeMenu = () => setIsMenuOpen(false);

// Подсказка поиска - совпадение с начала названия товара
  const suggestion = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (normalized.length < 2) return "";
    const match = products.find((product) =>
      product.name.toLowerCase().startsWith(normalized),
    );
    return match?.name ?? "";
  }, [query]);

  const ghostTail =
    suggestion && suggestion.toLowerCase() !== query.trim().toLowerCase()
      ? suggestion.slice(query.trim().length)
      : "";
  const router = useRouterNext();

// Обработчик клавиш поиска: Tab - автозаполнение, Enter - переход на /search?q=
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Tab" && suggestion) {
      event.preventDefault();
      setQuery(suggestion);
    }
    if (event.key === "Enter" && query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

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
          <span />
          <span />
          <span />
        </button>

        <Link href="/" className="brand" onClick={closeMenu}>
          GoldJewelry
        </Link>

        <div className="header-search" aria-label="Поиск по товарам">
<div className="header-search-overlay" aria-hidden="true">
            <span className="typed">{query}</span>
            <span className="ghost">{ghostTail}</span>
          </div>
          <input
            type="text"
            className="header-search-input"
            placeholder="поиск"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
          />
        </div>

        <nav className="header-nav" aria-label="Main navigation">
          <Link href="/">Главная</Link>
          <Link href="/pages">Страницы</Link>
          <CartLink />
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

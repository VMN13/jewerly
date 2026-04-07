"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { products } from "@/data/products";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([] as any[]);

  const [showDropdown, setShowDropdown] = useState(false);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia('(min-width: 768px)');
      setIsDesktop(media.matches);
      const listener = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    }
  }, []);

  const router = useRouter();

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

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim().length > 0) {
        const normalizedQuery = query.trim().toLowerCase();
        const results = products
          .filter(
            (product) =>
              product.name.toLowerCase().includes(normalizedQuery) ||
              product.description.toLowerCase().includes(normalizedQuery),
          )

          .slice(0, 5);
        setSearchResults(results as any);

        setShowDropdown(results.length > 0);

      } else {
        setSearchResults([] as any);
        setShowDropdown(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Tab" && suggestion) {
      event.preventDefault();
      setQuery(suggestion);
    }
    if (event.key === "Enter" && query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setShowDropdown(false);
    }
    if (event.key === "Escape") {
      setShowDropdown(false);
    }
  };

  const handleResultClick = (product: any) => {
    router.push(`/product/${product.id}`);
    setQuery("");
    setShowDropdown(false);
  };

  return (
    <div className="catalog-search" aria-label="Поиск по товарам">
      <div className="header-search-overlay" aria-hidden="true">
        <span className="typed">{query}</span>
        <span className="ghost">{ghostTail}</span>
      </div>
      <input
        type="text"
        className="header-search-input catalog-search-input"
        placeholder="поиск..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        autoComplete="off"
      />


{showDropdown && searchResults.length > 0 && !isDesktop && (
        <div className="search-dropdown">
          {searchResults.map((product) => (
            <div
              key={product.id}
              className="search-result-item"
              onMouseDown={() => handleResultClick(product)}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={60}
                height={60}
                className="search-result-image"
              />
              <div>
                <h4>{product.name}</h4>
                <p>{product.price} BYN</p>
              </div>
            </div>
          ))}
          <div className="search-result-footer">
            <Link href={`/search?q=${encodeURIComponent(query)}`}>
              Показать все результаты
            </Link>
          </div>
        </div>
      )}
{showDropdown && searchResults.length > 0 && isDesktop && (
        <div className="search-dropdown-desktop">
          {searchResults.map((product) => (
            <div
              key={product.id}
              className="search-result-item"
              onMouseDown={() => handleResultClick(product)}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={80}
                height={80}
                className="search-result-image"
              />
              <div>
                <h4>{product.name}</h4>
                <p>{product.price} BYN</p>
              </div>
            </div>
          ))}
       
          </div>
       
      )}
    </div>
  );
}

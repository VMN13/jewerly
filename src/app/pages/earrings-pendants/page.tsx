"use client";

import { useEffect, useMemo, useState } from "react";
import SearchInput from '@/components/SearchInput';
import Image from "next/image";
import Link from "next/link";
import { earringsPendants } from "@/data/products";

type SortMode = "date_desc" | "date_asc" | "name_asc" | "name_desc";

export default function EarringsPendantsPage() {
  const [sortMode, setSortMode] = useState<SortMode>("date_desc");

  const sortedProducts = useMemo(() => {
    const list = [...earringsPendants];

    switch (sortMode) {
      case "date_asc":
        return list.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
      case "name_asc":
        return list.sort((a, b) => a.name.localeCompare(b.name, "ru"));
      case "name_desc":
        return list.sort((a, b) => b.name.localeCompare(a.name, "ru"));
      case "date_desc":
      default:
        return list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
  }, [sortMode]);

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".product-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="catalog-section">
      <div className="catalog-container">
        <div className="catalog-head">
          <h1>Серьги и подвески</h1>
          <Link href="/" className="catalog-link">← Назад к разделам</Link>
        </div>

        <div className="catalog-controls">
          <SearchInput />
          <div className="catalog-sort-wrap">
            <span className="catalog-sort-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M7 6h10M9 12h8M11 18h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </span>
            <select
              value={sortMode}
              onChange={(e) => setSortMode(e.target.value as SortMode)}
              className="catalog-sort-select catalog-sort-select-compact"
            >
              <option value="date_desc">По дате: новые</option>
              <option value="date_asc">По дате: старые</option>
              <option value="name_asc">А→Я</option>
              <option value="name_desc">Я→А</option>
            </select>
          </div>
        </div>

        <div className="product-grid">
          {sortedProducts.map((product, index) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="product-card-link"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <article className="product-card">
                <div className="product-image-wrap">
                  <Image src={product.image} alt={product.name} width={220} height={220} className="product-image"/>
                </div>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.price} BYN</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
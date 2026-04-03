"use client";

import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import SearchInput from '@/components/SearchInput';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ringsBracelets, 
  earringsPendants, 
  chainsNecklaces, 
  newArrivals 
} from '@/data/products';

type SortMode = 'date_desc' | 'date_asc' | 'name_asc' | 'name_desc';

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;
  const [sortMode, setSortMode] = useState<SortMode>('date_desc');

  // ✅ Берем ТОЧНЫЙ массив по категории (БЕЗ фильтра!)
  const getProductsByCategory = (cat: string) => {
    switch (cat) {
      case 'rings-bracelets': return ringsBracelets;
      case 'earrings-pendants': return earringsPendants;
      case 'chains-necklaces': return chainsNecklaces;
      case 'new-arrivals': return newArrivals;
      default: return [];
    }
  };

  const categoryProducts = getProductsByCategory(category);

  const sortedProducts = useMemo(() => {
    const products = [...categoryProducts];
    
    switch (sortMode) {
      case 'date_asc':
        return products.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
      case 'name_asc':
        return products.sort((a, b) => a.name.localeCompare(b.name, 'ru'));
      case 'name_desc':
        return products.sort((a, b) => b.name.localeCompare(a.name, 'ru'));
      case 'date_desc':
      default:
        return products.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
  }, [categoryProducts, sortMode]);

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.product-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [sortedProducts]);

  if (sortedProducts.length === 0) {
    return (
      <section className="catalog-section">
        <div className="catalog-container">
          <div className="catalog-head">
            <h1>Категория не найдена</h1>
            <Link href="/pages" className="catalog-link">Все категории</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="catalog-section">
      <div className="catalog-container">
        <div className="catalog-head">
          <h1>{category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</h1>
          <Link href="/pages" className="catalog-link">Все категории</Link>
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
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { products } from "@/data/products"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q")?.toLowerCase().trim() || ""

  const matches = products.filter(product => 
    product.name.toLowerCase().includes(query)
  ).slice(0, 2)

  if (!query) {
    return (
      <section className="catalog-section">
        <div className="catalog-container">
          <h1>Поиск</h1>
          <p>Введите запрос для поиска товаров</p>
        </div>
      </section>
    )
  }

  return (
    <section className="catalog-section">
      <div className="catalog-container">
        <div className="catalog-head">
          <h1>Результаты поиска: "{decodeURIComponent(query)}"</h1>
          <Link href="/pages" className="catalog-link">
            Весь каталог
          </Link>
        </div>
        {matches.length > 0 ? (
          <div className="product-grid">
            {matches.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="product-card-link"
              >
                <article className="product-card is-visible">
                  <div className="product-image-wrap">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={220}
                      height={220}
                      className="product-image"
                    />
                  </div>
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <p>Товары не найдены</p>
        )}
      </div>
    </section>
  )
}

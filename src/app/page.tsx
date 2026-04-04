import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";

export default function Home() {
  return (
    <section className="home-categories-section">
      <div className="home-categories-container">
        <div className="catalog-head">
          <div color="catalog-first">
          <h1>Разделы каталога</h1>
          </div>
         
          <Link href="/pages" className="catalog-link">
            Открыть каталог
          </Link>
         
        </div>

        <div className="category-list">
          {categories.map((category) => (
            <Link key={category.id} href={category.href} className="category-card">
              <div className="category-card-image-wrap">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={300}
                  height={300}
                  className="category-card-image"
                />
              </div>
              <div className="category-card-content">
                <h2>{category.title}</h2>
                <p>{category.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

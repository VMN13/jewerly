

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ringsBracelets,
  earringsPendants,
  chainsNecklaces,
  newArrivals,
  allProducts,
} from "@/data/products";
import AddToCartButton from "@/components/cart/AddToCartButton";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

// Функция поиска товара по ID
const findProductById = (id: number) => {
  return allProducts.find((item) => item.id === id);
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const productId = Number(id);
  const product = findProductById(productId);

  if (!product) {
    notFound();
  }

  return (
    <section className="product-page-section">
      <div className="product-page-container">
        <article className="product-detail-card">
          <div className="product-detail-head">
            <h1>{product.name}</h1>
            <p>Артикул: #{product.id}</p>
          </div>
          <div className="product-detail-image-wrap">
            <Image
              src={product.image}
              alt={product.name}
              width={360}
              height={360}
              priority
              className="product-detail-image"
            />
          </div>
          <div className="product-detail-content">
            <p>{product.description}</p>
            <p className="product-price">
              Цена: <strong>{product.price} BYN</strong>
            </p>
            <div className="product-actions">
              <AddToCartButton productId={product.id} />
              <Link href="/pages" className="catalog-link product-back-link">
                Назад в каталог
              </Link>
            </div>
          </div>
        </article>
      </div>
      {/* JS для запрета скролла */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.body.classList.add('has-no-scroll');
          document.documentElement.classList.add('has-no-scroll');
          window.scrollTo(0, 0);
        `,
        }}
      />
    </section>
  );
}

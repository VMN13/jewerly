import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import AddToCartButton from "@/components/cart/AddToCartButton";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const productId = Number(id);
  const product = products.find((item) => item.id === productId);

  if (!product) {
    notFound();
  }

  return (
    <section className="product-page-section">
      <div className="product-page-container">
        <div className="product-page-head">
          <h1>{product.name}</h1>
          <p>Артикул: #{product.id}</p>
        </div>

        <article className="product-detail-card">
          <div className="product-detail-image-wrap">
            <Image
              src={product.image}
              alt={product.name}
              width={360}
              height={360}
              className="product-detail-image"
            />
          </div>
          <div className="product-detail-content">
           
            <p>{product.description}</p>
            <div className="product-actions">
              <AddToCartButton productId={product.id} />
              <Link href="/pages" className="catalog-link product-back-link">
                 Назад в каталог
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";

export default function CartPage() {
  const {
    cartProducts,
    totalPrice,
    addToCart,
    decreaseFromCart,
    removeFromCart,
    clearCart,
  } = useCart();

  const handleTelegramOrder = () => {
    const message = generateTelegramMessage();
    const telegramUrl = `https://t.me/VMNid?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, "_blank");
  };

  const generateTelegramMessage = (): string => {
    if (cartProducts.length === 0) return "Хочу заказать ювелирные изделия!";

    const itemsList = cartProducts
      .map(
        (item) =>
          `${item.name} (${item.quantity} шт.) - ${item.price.toLocaleString("ru-RU")} BYN`,
      )
      .join("\n");

    return `🛒 Заказ из корзины:\n\n${itemsList}\n\n💰 Итого: ${totalPrice.toLocaleString("ru-RU")} BYN\n\n📞 Укажите способ доставки и оплаты`;
  };

  return (
    <section className="cart-page-section">
      <div className="cart-page-container">
        {/* Cart head removed */}

        {cartProducts.length === 0 ? (
          <div className="cart-empty">Корзина пуста</div>
        ) : (
          <>
            <div className="cart-list">
              {cartProducts.map((item) => (
                <article key={item.productId} className="cart-item">
                  <div className="cart-item-image-wrap">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={120}
                      height={120}
                      className="cart-item-image"
                    />
                  </div>

                  <div className="cart-item-content">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>

                    <div className="cart-item-actions">
                      <div className="cart-qty-row">
                        <button
                          type="button"
                          className="cart-qty-btn"
                          onClick={() => decreaseFromCart(item.productId)}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M6 12h12"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                        <span className="cart-item-qty">{item.quantity}</span>
                        <button
                          type="button"
                          className="cart-qty-btn"
                          onClick={() => addToCart(item.productId)}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M12 6v12M6 12h12"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                      </div>

                      <button
                        type="button"
                        className="cart-remove-btn"
                        onClick={() => removeFromCart(item.productId)}
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="cart-summary">
              <div className="cart-summary-item">
                <span>Итого:</span>
                <strong>{totalPrice.toLocaleString("ru-RU")} BYN</strong>
              </div>
            </div>

            <div className="cart-footer-actions">
              <button
                type="button"
                className="cart-buy-btn"
                onClick={handleTelegramOrder}
              >
                💬 Заказать в Telegram ({totalPrice.toLocaleString("ru-RU")}{" "}
                BYN)
              </button>
              <button
                type="button"
                className="cart-clear-btn"
                onClick={clearCart}
              >
                Очистить корзину
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

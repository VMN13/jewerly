"use client";

import { FormEvent, useMemo, useState } from "react";
import { products } from "@/data/products";
import { useCart } from "@/components/cart/CartProvider";

type ChatMessage = {
  id: number;
  role: "user" | "assistant";
  text: string;
};

function buildAssistantReply(input: string, cart: any): string {
  const q = input.toLowerCase().trim();

  if (q.includes("telegram") || q.includes("телеграм") || q.includes("заказ")) {
    if (cart.totalUniqueItems > 0) {
      const message = cart.cartProducts
        .map(
          (item: any) =>
            `• ${item.name} (x${item.quantity}) - ${item.price * item.quantity} BYN`,
        )
        .join("\\n");
      return `📋 Заказ для Telegram:\\n${message}\\n\\n💰 Итого: ${cart.totalPrice} BYN`;
    }
    return "🛒 Корзина пуста. Добавьте товары!";
  }

  if (!q) return "Напишите вопрос или 'telegram' для заказа.";

  if (q.includes("привет") || q.includes("здравствуйте")) {
    return "Здравствуйте!\\nчем вам помочь?";
  }

  if (q.includes("достав")) return "🚚 Доставка 1-3 дня.";
  if (q.includes("оплат")) return "💳 Онлайн или наличными.";
  if (q.includes("возврат") || q.includes("обмен")) return "🔄 14 дней.";
  if (q.includes("размер")) return "📏 Кольца 15-23, браслеты 16-20 см.";
  if (q.includes("кольц")) return "💍 Кольца от 400 BYN.";
  if (q.includes("серьг") || q.includes("подвес"))
    return "💎 Серьги от 100 BYN.";
  if (q.includes("цеп") || q.includes("колье")) return "⛓ Цепи от 200 BYN.";
  if (q.includes("цен") || q.includes("стоимость"))
    return "💰 От 100 BYN. 'telegram' для корзины.";
  if (q.includes("материал") || q.includes("золото"))
    return "🥇 Золото 585 пробы.";

  const maybeProduct = products.find((p: any) =>
    q.includes(p.name.toLowerCase()),
  );
  if (maybeProduct) {
    return `✨ ${maybeProduct.name}: ${maybeProduct.description} (${maybeProduct.price} BYN)`;
  }

  return "✅ Напишите 'telegram' для заказа.";
}

export default function SupportChat() {
  const cart = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: "assistant",
      text: "Здравствуйте! Чем вам помочь?",
    },
  ]);

  const quickHints =
    cart.totalUniqueItems > 0
      ? ["доставка", "оплата", "размер", "telegram"]
      : ["доставка", "оплата", "размер"];

  const nextId = useMemo(
    () => (messages.length ? Math.max(...messages.map((m) => m.id)) + 1 : 1),
    [messages],
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = value.trim();
    if (!text) return;

    const userMessage: ChatMessage = { id: nextId, role: "user", text };
    const assistantMessage: ChatMessage = {
      id: nextId + 1,
      role: "assistant",
      text: buildAssistantReply(text, cart),
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setValue("");
  };

  return (
    <div className="support-chat-root">
      <button
        type="button"
        className="support-chat-fab"
        aria-label={isOpen ? "Скрыть чат" : "Открыть чат"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          "×"
        ) : (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect
              x="6"
              y="7"
              width="12"
              height="10"
              rx="3"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <circle cx="10" cy="12" r="1.2" fill="currentColor" />
            <circle cx="14" cy="12" r="1.2" fill="currentColor" />
            <path
              d="M9 15h6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M12 4v3"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M8 5.5h8"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <section className="support-chat-window" aria-label="Чат поддержки">
          <header className="support-chat-header">
            <strong>Поддержка AI</strong>
            <span>онлайн</span>
          </header>

          <div className="support-chat-hints">
            {quickHints.map((hint) => (
              <button
                key={hint}
                type="button"
                onClick={() => setValue(hint)}
                className="support-chat-hint"
              >
                {hint}
              </button>
            ))}
          </div>

          <div className="support-chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`support-chat-message ${message.role === "user" ? "is-user" : "is-assistant"}`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <form className="support-chat-form" onSubmit={onSubmit}>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Задайте вопрос..."
              aria-label="Сообщение"
            />
            <button type="submit" aria-label="Отправить">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </section>
      )}
    </div>
  );
}

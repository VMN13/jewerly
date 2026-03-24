"use client";

import { FormEvent, useMemo, useState } from "react";
import { products } from "@/data/products";

type ChatMessage = {
  id: number;
  role: "user" | "assistant";
  text: string;
};

const quickHints = [
  "доставка",
  "оплата",
  "размер"
];

// Логика ответов AI на основе ключевых слов
function buildAssistantReply(input: string): string {
  const q = input.toLowerCase().trim();

  if (!q) return "Напишите вопрос, и я помогу с выбором украшений.";

  if (q.includes("привет") || q.includes("здравствуйте")) {
    return "Здравствуйте! Я помощник GoldJewelry. Подскажу по товарам, доставке, оплате и возврату.";
  }

  if (q.includes("достав")) {
    return "Доставка обычно занимает 1–3 дня по городу и 3–7 дней по регионам. Точный срок зависит от адреса.";
  }

  if (q.includes("оплат")) {
    return "Оплатить можно онлайн при оформлении заказа. Если нужно, подскажу удобный способ оплаты.";
  }

  if (q.includes("возврат") || q.includes("обмен")) {
    return "Возврат и обмен возможны по правилам магазина. Важно сохранить товарный вид и упаковку.";
  }

  if (q.includes("размер")) {
    return "По размеру помогу сориентироваться: напишите, что выбираете — кольцо, браслет или цепь.";
  }

  if (q.includes("кольц")) {
    return "Кольца есть в разделе «Кольца и браслеты». Могу подсказать по стилю: минимализм, классика, акцентные модели.";
  }

  if (q.includes("серьг") || q.includes("подвес")) {
    return "Серьги и подвески собраны в одноимённом разделе. Подскажите желаемый стиль, и я предложу варианты.";
  }

  if (q.includes("цеп") || q.includes("колье")) {
    return "Цепи и колье доступны в отдельном разделе. Могу подсказать, что лучше на каждый день или на выход.";
  }

  if (q.includes("цен") || q.includes("сколько стоит")) {
    return "Цены зависят от модели. Откройте каталог, и я помогу быстро подобрать варианты под ваш бюджет.";
  }

  if (q.includes("материал") || q.includes("золото") || q.includes("серебро")) {
    return "Материал зависит от конкретного товара. Напишите название модели — подскажу детали.";
  }

  const maybeProduct = products.find((p) => q.includes(p.name.toLowerCase()));
  if (maybeProduct) {
    return `По товару «${maybeProduct.name}»: ${maybeProduct.description}. Если хотите, подскажу похожие варианты.`;
  }

  return "Понял запрос. Уточните, что важно: тип украшения, бюджет, срок доставки или материал — и я дам точный совет.";
}

// Компонент чата поддержки с AI
export default function SupportChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: "assistant",
      text: "Здравствуйте! Я AI-помощник магазина. Задайте вопрос по товарам, доставке, оплате или возврату.",
    },
  ]);

  const nextId = useMemo(
    () => (messages.length ? Math.max(...messages.map((m) => m.id)) + 1 : 1),
    [messages],
  );

// Отправка сообщения, добавление user + AI ответ
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = value.trim();
    if (!text) return;

    const userMessage: ChatMessage = { id: nextId, role: "user", text };
    const assistantMessage: ChatMessage = {
      id: nextId + 1,
      role: "assistant",
      text: buildAssistantReply(text),
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setValue("");
  };

  return (
    <div className="support-chat-root">
      <button
        type="button"
        className="support-chat-fab"
        aria-label={isOpen ? "Скрыть чат поддержки" : "Открыть чат поддержки"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
      >
        {isOpen ? (
          "×"
        ) : (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="6" y="7" width="12" height="10" rx="3" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="10" cy="12" r="1.2" fill="currentColor" />
            <circle cx="14" cy="12" r="1.2" fill="currentColor" />
            <path d="M9 15h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M12 4v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M8 5.5h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
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
              placeholder="Напишите ваш вопрос..."
              aria-label="Сообщение в чат поддержки"
            />
            <button type="submit" aria-label="Отправить" title="Отправить">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
          </form>
        </section>
      )}
    </div>
  );
}

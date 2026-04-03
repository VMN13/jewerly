"use client";

import { useEffect } from 'react';

export default function ClientProductPage() {
  useEffect(() => {
    // Запрет скролла
    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll');
    
    return () => {
      // Разрешить скролл при уходе
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div id="product-content">
      {/* Контент страницы товара загружается через fetch или другой способ */}
      <h1>Загрузка товара...</h1>
    </div>
  );
}


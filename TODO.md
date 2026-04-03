# План по задаче "верни мини меню"

✅ 1. Исследовать структуру проекта с помощью search_files и read_file (Header.tsx, layout.tsx, categories.ts)

✅ 2. Создать план и получить подтверждение пользователя

✅ 3. Создать src/components/MiniMenu.tsx (responsive nav: Главная, Каталог, Корзина)

✅ 4. Исправить TS ошибки (CartLink props)

✅ 5. Добавить корзину в мобильное меню (useCart hook)

Мини меню готово к использованию! Импортируй в layout.tsx или page.tsx:

```tsx
import MiniMenu from "@/components/MiniMenu";
<MiniMenu />
```

Тестируй: npm run dev → localhost:3000

Дополнительно сделано: корзина с счётчиком везде, стили отступов скорректированы.

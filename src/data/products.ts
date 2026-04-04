export type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  createdAt: string;
  image: string;
  price: number;
};

// 1️⃣ КОЛЬЦА И БРАСЛЕТЫ (ТОЛЬКО ID 1-5)
export const ringsBracelets: Product[] = [
  {
    id: 1,
    name: "Золотое кольцо с бриллиантом",
    category: "rings-bracelets",
    description:
      "Элегантное кольцо с центральным бриллиантом в классическом стиле.",
    createdAt: "2024-01-03",
    image: "/images/rings/Brilliant.jpg",
    price: 400,
  },
  {
    id: 2,
    name: "Sapfir",
    category: "rings-bracelets",
    description: "Сапфир от RS",
    createdAt: "2024-01-08",
    image: "/images/rings/Sapfir.jpg",
    price: 2000,
  },
  {
    id: 3,
    name: "Кольцо с изумрудом",
    category: "rings-bracelets",
    description: "Изумруд от CHAMOVSKIKH.",
    createdAt: "2024-02-10",
    image: "/images/rings/Izumrud.png",
    price: 600,
  },
  {
    id: 4,
    name: "Кольцо с рубином",
    category: "rings-bracelets",
    description: "Красный рубин в золотой оправе с боковыми камнями.",
    createdAt: "2024-03-06",
    image: "/images/rings/Rubin.jpg",
    price: 900,
  },
  {
    id: 5,
    name: "Кольцо с топазом",
    category: "rings-bracelets",
    description: "Синий топаз в золотой оправе с боковыми камнями.",
    createdAt: "2024-03-22",
    image: "/images/rings/Topaz.jpg",
    price: 700,
  },
];

// 2️⃣ СЕРЬГИ И ПОДВЕСКИ (ТОЛЬКО ID 6-10)
export const earringsPendants: Product[] = [
  {
    id: 6,
    name: "Гвоздики с бриллиантами",
    category: "earrings-pendants",
    description: "Минималистичные серьги с бриллиантами для любого образа.",
    createdAt: "2024-01-15",
    image: "/images/ear/goldSerg.jpg",
    price: 100,
  },
  {
    id: 7,
    name: "Серьги из белого золота с сапфирами и бриллиантами",
    category: "earrings-pendants",
    description: "Изысканная подвеска с синим сапфиром на золотой цепочке.",
    createdAt: "2024-01-20",
    image: "/images/ear/WhiteGold.jpg",
    price: 700,
  },
  {
    id: 8,
    name: "Серьги из белого золота с турмалинами 9.55 ct и бриллиантами",
    category: "earrings-pendants",
    description: "Потрясающие длинные серьги с каплей для вечернего выхода.",
    createdAt: "2024-02-27",
    image: "/images/ear/Turmalin.jpg",
    price: 1000,
  },
  {
    id: 9,
    name: "Серьги из желтого золота с бриллиантами",
    category: "earrings-pendants",
    description: "Красная подвеска-рубин на тонкой золотой цепи.",
    createdAt: "2024-03-14",
    price: 1000,
    image: "/images/ear/YellowGold.jpg",
  },
  {
    id: 10,
    name: "Серьги из желтого золота с бриллиантами",
    category: "earrings-pendants",
    description: "В форме сердца",
    createdAt: "2024-04-25",
    image: "/images/ear/love.jpg",
    price: 1000,
  },
];

// 3️⃣ ЦЕПИ И КОЛЬЕ (ТОЛЬКО ID 11-15)
export const chainsNecklaces: Product[] = [
  {
    id: 11,
    name: "Колье из белого золота с морганитом и бриллиантами",
    category: "chains-necklaces",
    description: "Длинное колье с крупными звеньями в современном дизайне.",
    createdAt: "2024-02-02",
    image: "/images/necklace/necklaceBrilliant.jpg",
    price: 20000,
  },
  {
    id: 12,
    name: "Колье из белого золота с аквамарином и бриллиантами",
    category: "chains-necklaces",
    description: "Трендовый чокер с гравировкой для смелого образа.",
    createdAt: "2024-02-18",
    image: "/images/necklace/BlueBrilliant.jpg",
    price: 3000,
  },
  {
    id: 13,
    name: "Колье «Сердце» из красного золота с аметистом",
    category: "chains-necklaces",
    description: "Браслет с бриллиантами в стиле 'теннис'.",
    createdAt: "2024-03-29",
    image: "/images/necklace/Ametist.jpg",
    price: 4000,
  },
  {
    id: 14,
    name: "Колье из красного золота с бриллиантами",
    category: "chains-necklaces",
    description: "Классическая цепочка с крупными звеньями.",
    createdAt: "2024-04-05",
    image: "/images/necklace/RedGold.jpg",
    price: 9000,
  },
  {
    id: 15,
    name: "Колье из желтого золота с изумрудами и бриллиантами",
    category: "chains-necklaces",
    description: "Крест из золота с бриллиантами.",
    createdAt: "2024-05-15",
    image: "/images/necklace/Izumrud.jpg",
    price: 40000,
  },
];

// 4️⃣ НОВЫЕ ПОСТУПЛЕНИЯ (ТОЛЬКО ID 16-20)
export const newArrivals: Product[] = [
  {
    id: 16,
    name: "Яйцо-шкатулка",
    category: "new-arrivals",
    description: "Золочение Гильошированная эмаль",
    createdAt: "2024-04-12",
    image: "/images/Accessories/Eggs.jpg",
    price: 6000,
  },
  {
    id: 17,
    name: "Ситечко из серебра",
    category: "new-arrivals",
    description: "Серебро 925 пробы",
    createdAt: "2024-04-20",
    image: "/images/Accessories/Sitechko.jpg",
    price: 1000,
  },
  {
    id: 18,
    name: "Набор кофейных ложек «Элегант»",
    category: "new-arrivals",
    description: "Серебро без золочения",
    createdAt: "2024-05-01",
    image: "/images/Accessories/Spoons.jpeg",
    price: 1000,
  },
  {
    id: 19,
    name: "Медальон для животных из серебра с бриллиантом",
    category: "new-arrivals",
    description: "Гильошированная эмаль Золочение (позолота)",
    createdAt: "2024-05-10",
    image: "/images/Accessories/Medal.jpg",
    price: 400,
  },
  {
    id: 20,
    name: "Молочник из серебра",
    category: "new-arrivals",
    description: "Золочение (позолота) Эмалево-филигранная техника",
    createdAt: "2024-05-20",
    image: "/images/Accessories/Molochnick.jpg",
    price: 900,
  },
];

// ✅ Функция для получения товаров по категории
export const getProductsByCategory = (category: string): Product[] => {
  switch (category) {
    case "rings-bracelets":
      return ringsBracelets;
    case "earrings-pendants":
      return earringsPendants;
    case "chains-necklaces":
      return chainsNecklaces;
    case "new-arrivals":
      return newArrivals;
    default:
      return [];
  }
};

// ✅ Все товары для поиска по ID (НЕ для каталога!)
export const allProducts: Product[] = [
  ...ringsBracelets,
  ...earringsPendants,
  ...chainsNecklaces,
  ...newArrivals,
];

export { allProducts as products };

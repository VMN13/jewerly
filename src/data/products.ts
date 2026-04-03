export type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  createdAt: string;
  image: string;
};

// 1️⃣ КОЛЬЦА И БРАСЛЕТЫ (ТОЛЬКО ID 1-5)
export const ringsBracelets: Product[] = [
  {
    id: 1,
    name: "Золотое кольцо с бриллиантом",
    category: "rings-bracelets",
    description: "Элегантное кольцо с центральным бриллиантом в классическом стиле.",
    createdAt: "2024-01-03",
    image: "/images/rings-bracelets/ring-diamond.jpg",
  },
  {
    id: 2,
    name: "Тонкий браслет",
    category: "rings-bracelets",
    description: "Деликатный браслет с утонченным плетением для ежедневной носки.",
    createdAt: "2024-01-08",
    image: "/images/rings-bracelets/bracelet-thin.jpg",
  },
  {
    id: 3,
    name: "Мужское золотое кольцо",
    category: "rings-bracelets",
    description: "Массивное кольцо с текстурой для сильного характера.",
    createdAt: "2024-02-10",
    image: "/images/rings-bracelets/ring-men.jpg",
  },
  {
    id: 4,
    name: "Браслет манжет",
    category: "rings-bracelets",
    description: "Браслет-манжет с гравировкой в стиле ар-деко.",
    createdAt: "2024-03-06",
    image: "/images/rings-bracelets/bracelet-wide.jpg",
  },
  {
    id: 5,
    name: "Кольцо с топазом",
    category: "rings-bracelets",
    description: "Синий топаз в золотой оправе с боковыми камнями.",
    createdAt: "2024-03-22",
    image: "/images/rings-bracelets/ring-topaz.jpg",
  }
];

// 2️⃣ СЕРЬГИ И ПОДВЕСКИ (ТОЛЬКО ID 6-10)
export const earringsPendants: Product[] = [
  {
    id: 6,
    name: "Гвоздики с бриллиантами",
    category: "earrings-pendants",
    description: "Минималистичные серьги с бриллиантами для любого образа.",
    createdAt: "2024-01-15",
    image: "/images/earrings-pendants/earrings-studs.jpg",
  },
  {
    id: 7,
    name: "Подвеска с сапфиром",
    category: "earrings-pendants",
    description: "Изысканная подвеска с синим сапфиром на золотой цепочке.",
    createdAt: "2024-01-20",
    image: "/images/earrings-pendants/pendant-sapphire.jpg",
  },
  {
    id: 8,
    name: "Длинные золотые серьги",
    category: "earrings-pendants",
    description: "Потрясающие длинные серьги с каплей для вечернего выхода.",
    createdAt: "2024-02-27",
    image: "/images/earrings-pendants/earrings-long.jpg",
  },
  {
    id: 9,
    name: "Подвеска с рубином",
    category: "earrings-pendants",
    description: "Красная подвеска-рубин на тонкой золотой цепи.",
    createdAt: "2024-03-14",
    image: "/images/earrings-pendants/pendant-ruby.jpg",
  },
  {
    id: 10,
    name: "Золотые клипсы",
    category: "earrings-pendants",
    description: "Комфортные клипсы без прокола с камнями.",
    createdAt: "2024-04-25",
    image: "/images/earrings-pendants/clips.jpg",
  }
];

// 3️⃣ ЦЕПИ И КОЛЬЕ (ТОЛЬКО ID 11-15)
export const chainsNecklaces: Product[] = [
  {
    id: 11,
    name: "Золотое колье",
    category: "chains-necklaces",
    description: "Длинное колье с крупными звеньями в современном дизайне.",
    createdAt: "2024-02-02",
    image: "/images/chains-necklaces/necklace-gold.jpg",
  },
  {
    id: 12,
    name: "Золотой чокер",
    category: "chains-necklaces",
    description: "Трендовый чокер с гравировкой для смелого образа.",
    createdAt: "2024-02-18",
    image: "/images/chains-necklaces/choker.jpg",
  },
  {
    id: 13,
    name: "Браслет теннис",
    category: "chains-necklaces",
    description: "Браслет с бриллиантами в стиле 'теннис'.",
    createdAt: "2024-03-29",
    image: "/images/chains-necklaces/tennis-bracelet.jpg",
  },
  {
    id: 14,
    name: "Золотая цепочка",
    category: "chains-necklaces",
    description: "Классическая цепочка с крупными звеньями.",
    createdAt: "2024-04-05",
    image: "/images/chains-necklaces/chain-gold.jpg",
  },
  {
    id: 15,
    name: "Подвеска крест",
    category: "chains-necklaces",
    description: "Крест из золота с бриллиантами.",
    createdAt: "2024-05-15",
    image: "/images/chains-necklaces/cross-pendant.jpg",
  }
];

// 4️⃣ НОВЫЕ ПОСТУПЛЕНИЯ (ТОЛЬКО ID 16-20)
export const newArrivals: Product[] = [
  {
    id: 16,
    name: "Колье с жемчугом",
    category: "new-arrivals",
    description: "Элегантное колье с натуральным жемчугом.",
    createdAt: "2024-04-12",
    image: "/images/new-arrivals/pearl-necklace.jpg",
  },
  {
    id: 17,
    name: "Обручальное кольцо",
    category: "new-arrivals",
    description: "Пара обручальных колец с бриллиантами.",
    createdAt: "2024-04-20",
    image: "/images/new-arrivals/wedding-ring.jpg",
  },
  {
    id: 18,
    name: "Браслет шарм",
    category: "new-arrivals",
    description: "Браслет с подвесками-шармами в золоте.",
    createdAt: "2024-05-01",
    image: "/images/new-arrivals/charm-bracelet.jpg",
  },
  {
    id: 19,
    name: "Кольцо триолли",
    category: "new-arrivals",
    description: "Три бриллианта в ряд на золотом кольце.",
    createdAt: "2024-05-10",
    image: "/images/new-arrivals/triolli-ring.jpg",
  },
  {
    id: 20,
    name: "Золотые часы",
    category: "new-arrivals",
    description: "Мужские часы с золотым корпусом и браслетом.",
    createdAt: "2024-05-20",
    image: "/images/new-arrivals/gold-watch.jpg",
  }
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
  ...newArrivals
];


export { allProducts as products };
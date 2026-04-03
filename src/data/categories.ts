export type CategoryCard = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  href: string;
};

export const categories: CategoryCard[] = [
  {   
    id: 1,
    title: "Кольца и браслеты",
    subtitle: "Минималистичные формы и строгая геометрия",
    image: "/ringsandbracelets.jpg",
    href: "/pages/rings-bracelets", // ✅ Отдельная страница
  },
  {
    id: 2,
    title: "Серьги и подвески",
    subtitle: "Контрастные акценты в монохромной эстетике",
    image: "/earringsandpendants.jpg",
    href: "/pages/earrings-pendants", // ✅ Отдельная страница
  },
  {
    id: 3,
    title: "Цепи и колье",
    subtitle: "Сдержанный дизайн для повседневного образа",
    image: "/bracelets.jpg",
    href: "/pages/chains-necklaces", // ✅ Отдельная страница
  },
  {
    id: 4,
    title: "Новые поступления",
    subtitle: "Актуальные модели из текущей коллекции",
    image: "/new.jpg",
    href: "/pages/new-arrivals", // ✅ Отдельная страница
  },
];
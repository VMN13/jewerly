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
    image: "/next.svg",
    href: "/pages",
  },
  {
    id: 2,
    title: "Серьги и подвески",
    subtitle: "Контрастные акценты в монохромной эстетике",
    image: "/globe.svg",
    href: "/pages",
  },
  {
    id: 3,
    title: "Цепи и колье",
    subtitle: "Сдержанный дизайн для повседневного образа",
    image: "/window.svg",
    href: "/pages",
  },
  {
    id: 4,
    title: "Новые поступления",
    subtitle: "Актуальные модели из текущей коллекции",
    image: "/vercel.svg",
    href: "/pages",
  },
];

export const navbarListItems = [
  {
    src: "cart",
    href: "/cart",
    text: "Корзина",
  },
  {
    src: "orders",
    href: "/orders",
    text: "Заказы",
  },
  {
    src: "favourites",
    href: "/favourites",
    text: "Избранное",
  },
];

export const navbarListItemsMobile = [
  {
    src: "home",
    href: "/",
    text: "Главная",
  },
  ...navbarListItems,
];

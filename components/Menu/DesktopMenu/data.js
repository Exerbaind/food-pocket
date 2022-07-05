import { BiDish, BiBook } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";

export const data = [
  {
    name: "Блюда из заведений",
    icon: <BiDish color="rgba(38, 135, 92, 0.8)" />,
    link: "/",
  },
  {
    name: "Продукты",
    icon: <HiOutlineShoppingBag color="rgba(38, 135, 92, 0.8)" />,
    link: "/products",
  },
  {
    name: "Рецепты",
    icon: <BiBook color="rgba(38, 135, 92, 0.8)" />,
    link: "/recipes",
  },
];

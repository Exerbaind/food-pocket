import { BiDish } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { BiBook } from "react-icons/bi";

export const data = [
  {
    name: "Блюда из заведений",
    mobileName: "Блюда",
    icon: <BiDish color="rgba(38, 135, 92, 0.8)" />,
    link: "/",
  },
  {
    name: "Продукты",
    mobileName: "Продукты",
    icon: <HiOutlineShoppingBag color="rgba(38, 135, 92, 0.8)" />,
    link: "/products",
  },
  {
    name: "Рецепты",
    mobileName: "Рецепты",
    icon: <BiBook color="rgba(38, 135, 92, 0.8)" />,
    link: "/recipes",
  },
  {
    name: null,
    mobileName: null,
    defaultIcon: <FiMenu color="white" />,
    activeIcon: <CgClose color="white" />,
    link: null,
  },
];

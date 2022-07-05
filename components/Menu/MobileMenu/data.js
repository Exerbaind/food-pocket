import { BiDish, BiBook } from "react-icons/bi";
import { HiOutlineShoppingBag, HiPlus } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

export const data = [
  {
    name: "Блюда",
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
  {
    name: null,
    defaultIcon: <FiMenu color="white" />,
    activeIcon: <CgClose color="white" />,
    link: null,
  },
  {
    name: "Блюдо",
    icon: <HiPlus color="rgba(38, 135, 92, 0.8)" />,
    link: null,
    handler: "dish",
  },
  {
    name: "Продукт",
    icon: <HiPlus color="rgba(38, 135, 92, 0.8)" />,
    link: null,
    handler: "product",
  },
  {
    name: "Меню",
    icon: <HiPlus color="rgba(38, 135, 92, 0.8)" />,
    link: null,
    handler: "menu",
  },
];

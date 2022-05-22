import { BiDish } from "react-icons/bi";
import { AiOutlineShopping } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

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
    icon: <AiOutlineShopping color="rgba(38, 135, 92, 0.8)" />,
    link: "/products",
  },
  {
    name: "Чета",
    mobileName: "Чета",
    icon: <AiOutlineShopping color="rgba(38, 135, 92, 0.8)" />,
    link: "/chet",
  },
  {
    name: null,
    mobileName: null,
    defaultIcon: <FiMenu color="white" />,
    activeIcon: <CgClose color="white" />,
    link: null,
  },
];

import { useSelector } from "react-redux";

export const getState = () => {
  const isMobile = useSelector(({ appService }) => appService.isMobile);

  return { isMobile };
};

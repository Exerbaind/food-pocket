import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { handleMenuItemType as handleMenuItemTypeAction } from "../../services/app/appSlice";

export const getState = () => {
  const menuItemType = useSelector(({ appService }) => appService.menuItemType);
  const isMobile = useSelector(({ appService }) => appService.isMobile);

  return { isMobile, menuItemType };
};

export const getActions = () => {
  const dispatch = useDispatch();

  const actions = useMemo(
    () => ({
      handleMenuItemType(type) {
        dispatch(handleMenuItemTypeAction(type));
      },
    }),
    [dispatch]
  );

  return actions;
};

import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  handleMenuItemType as handleMenuItemTypeAction,
  handleBottomMenu as handleBottomMenuAction,
} from "../../services/menu/menuSlice";

export const getState = () => {
  const menuItemType = useSelector(
    ({ menuService }) => menuService.menuItemType
  );
  const showBottomMenu = useSelector(
    ({ menuService }) => menuService.showBottomMenu
  );
  const isMobile = useSelector(({ appService }) => appService.isMobile);

  return { isMobile, menuItemType, showBottomMenu };
};

export const getActions = () => {
  const dispatch = useDispatch();

  const actions = useMemo(
    () => ({
      handleMenuItemType(type) {
        dispatch(handleMenuItemTypeAction(type));
      },
      handleBottomMenu() {
        dispatch(handleBottomMenuAction());
      },
    }),
    [dispatch]
  );

  return actions;
};

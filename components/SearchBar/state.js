import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { handleSearchType as handleSearchTypeAction } from "../../services/menu/menuSlice";

export const getState = () => {
  const searchType = useSelector(({ menuService }) => menuService.searchType);

  return { searchType };
};

export const getActions = () => {
  const dispatch = useDispatch();

  const actions = useMemo(
    () => ({
      handleSearchType(type) {
        dispatch(handleSearchTypeAction(type));
      },
    }),
    [dispatch]
  );

  return actions;
};

import React from "react";
import { getState } from "./state";

import { Wrapper } from "./styles";

import { Desktop } from "./Desktop";

const renderMenu = (isMobile) => {
  if (isMobile) return null;

  return <Desktop />;
};

export function TopMenu() {
  const { isMobile } = getState();

  return <Wrapper>{renderMenu(isMobile)}</Wrapper>;
}

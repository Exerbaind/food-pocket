import React from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

import { checkDevice } from "../../common/utils/checkDevice";

function Menu() {
  const { isMobile } = checkDevice();

  if (isMobile) {
    return <MobileMenu />;
  }

  return <DesktopMenu />;
}

export default Menu;

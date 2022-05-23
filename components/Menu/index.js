import React from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

import { useMobileDetect } from "../../common/utils/checkDevice";

function Menu() {
  // const device = useMobileDetect;
  // console.log(device);

  // if (isMobile) {
  // return <MobileMenu />;
  // }

  return <DesktopMenu />;
}

export default Menu;

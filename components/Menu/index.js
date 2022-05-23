import React from "react";
import { connect } from "react-redux";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

function Menu({ isMobile }) {
  if (isMobile) {
    return <MobileMenu />;
  }

  return <DesktopMenu />;
}

const mapStateToProps = ({ appService }) => ({
  isMobile: appService.isMobile,
});

export default connect(mapStateToProps)(Menu);

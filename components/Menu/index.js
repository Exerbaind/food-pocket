import React from "react";
import { PropTypes } from "prop-types";
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

Menu.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Menu);

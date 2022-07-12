import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import { ButtonLink, SimpleButton } from "./styles";

export function Button({
  text,
  href,
  activeLink,
  lastChildMargin,
  key,
  fullWidth,
  activeButton,
  onClick,
  spaceBetween,
}) {
  if (href) {
    return (
      <Link href={href} passHref key={key}>
        <ButtonLink
          active={activeLink}
          lastChildMargin={lastChildMargin}
          fullWidth={fullWidth}
          spaceBetween={spaceBetween}
        >
          {text}
        </ButtonLink>
      </Link>
    );
  }

  return (
    <SimpleButton
      lastChildMargin={lastChildMargin}
      activeButton={activeButton}
      onClick={onClick}
      spaceBetween={spaceBetween}
    >
      {text}
    </SimpleButton>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  activeLink: PropTypes.bool,
  lastChildMargin: PropTypes.bool,
  key: PropTypes.string,
  fullWidth: PropTypes.bool,
  activeButton: PropTypes.bool,
  onClick: PropTypes.func,
  spaceBetween: PropTypes.bool,
};

Button.defaultProps = {
  href: "",
  activeLink: false,
  lastChildMargin: false,
  key: null,
  fullWidth: false,
  activeButton: false,
  spaceBetween: false,
  onClick: () => {},
};

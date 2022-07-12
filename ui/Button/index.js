import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import { ButtonLink } from "./styles";

export function Button({
  text,
  href,
  activeLink,
  lastChildMargin,
  key,
  fullWidth,
}) {
  if (href) {
    return (
      <Link href={href} passHref key={key}>
        <ButtonLink
          active={activeLink}
          lastChildMargin={lastChildMargin}
          fullWidth={fullWidth}
        >
          {text}
        </ButtonLink>
      </Link>
    );
  }

  return <Button lastChildMargin={lastChildMargin}>{text}</Button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  activeLink: PropTypes.bool,
  lastChildMargin: PropTypes.bool,
  key: PropTypes.string,
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  href: "",
  activeLink: false,
  lastChildMargin: false,
  key: null,
  fullWidth: false,
};

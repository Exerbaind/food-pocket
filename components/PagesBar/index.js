import React from "react";
import { useRouter } from "next/router";
import * as ui from "../../ui";

import { data } from "./data";

import { Container, List } from "./styles";

const renderItem = (item, index) => {
  const { text, link } = item;

  const router = useRouter();

  const activeLink = router.pathname === link;

  return (
    <ui.Button
      lastChildMargin
      text={text}
      href={link}
      activeLink={activeLink}
      key={`${text}__${index}`}
    />
  );
};

export function PagesBar() {
  return (
    <Container>
      <List>{data && data.map((item, index) => renderItem(item, index))}</List>
    </Container>
  );
}

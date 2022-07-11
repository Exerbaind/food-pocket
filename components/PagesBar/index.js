import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { data } from "./data";

import { Container, List, Item } from "./styles";

const renderItem = (item, index) => {
  const { text, link } = item;

  const router = useRouter();

  const activeLink = router.pathname === link;

  return (
    <Link href={link} passHref key={`${text}__${index}`}>
      <Item active={activeLink}>{text}</Item>
    </Link>
  );
};

export function PagesBar() {
  return (
    <Container>
      <List>{data && data.map((item, index) => renderItem(item, index))}</List>
    </Container>
  );
}

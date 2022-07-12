import React from "react";

import { data } from "./data";

import { Container, Text, List, Item } from "./styles";

const renderItem = (item, index) => {
  const { text, stringId } = item;

  return <Item key={`${stringId}__${index}`}>{text}</Item>;
};

export function ClientHandlerBar() {
  return (
    <Container>
      <Text>Добавить:</Text>
      <List>{data && data.map((item, index) => renderItem(item, index))}</List>
    </Container>
  );
}

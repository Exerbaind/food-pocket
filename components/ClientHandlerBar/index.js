import React from "react";
import * as ui from "../../ui";

import { data } from "./data";

import { Container, Text, List } from "./styles";

const renderItem = (item, index) => {
  const { text, stringId } = item;
  return (
    <ui.Button
      text={text}
      key={`${stringId}__${index}`}
      lastChildMargin
      spaceBetween
    />
  );
};

export function ClientHandlerBar() {
  return (
    <Container>
      <Text>Добавить:</Text>
      <List>{data && data.map((item, index) => renderItem(item, index))}</List>
    </Container>
  );
}

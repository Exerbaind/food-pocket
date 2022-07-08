import React from "react";
import { Page, MainContainer } from "./styles";

// eslint-disable-next-line react/prop-types
export function PageLayout({ children }) {
  return (
    <Page>
      <MainContainer>{children}</MainContainer>
    </Page>
  );
}

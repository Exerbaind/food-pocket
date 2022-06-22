import { S } from "./styles";

// eslint-disable-next-line react/prop-types
function CommonPageLayout({ children }) {
  return <S.Container>{children}</S.Container>;
}

export default CommonPageLayout;

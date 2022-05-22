import { checkDevice } from "../../common/utils/checkDevice";
import { S } from "./styles";
export default function CommonPageLayout({ children }) {
  const { isMobile } = checkDevice();
  return <S.Container isMobile={isMobile}>{children}</S.Container>;
}

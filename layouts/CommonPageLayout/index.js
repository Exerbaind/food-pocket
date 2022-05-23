import { connect } from "react-redux";
import { S } from "./styles";
function CommonPageLayout({ children, isMobile }) {
  return <S.Container isMobile={isMobile}>{children}</S.Container>;
}

const mapStateToProps = ({ appService }) => ({
  isMobile: appService.isMobile,
});

export default connect(mapStateToProps)(CommonPageLayout);

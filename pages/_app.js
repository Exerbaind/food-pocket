import { wrapper } from "../services/store";

import { GlobalStyles } from "../common/styles/global";
import Header from "../components/Header";
import Menu from "../components/Menu";
import CommonPageLayout from "../layouts/CommonPageLayout";

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <div className="main">
        <Header />
        <Menu />
        <CommonPageLayout>
          <Component {...pageProps} />
        </CommonPageLayout>
      </div>
    </>
  );
}

export default wrapper.withRedux(MyApp);

import { wrapper } from "../services/store";

import { GlobalStyles } from "../common/styles/global";
import * as layouts from "../layouts";
import * as components from "../components";

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <layouts.PageLayout>
        <components.TopMenu />
        <Component {...pageProps} />
      </layouts.PageLayout>
    </>
  );
}

export default wrapper.withRedux(MyApp);

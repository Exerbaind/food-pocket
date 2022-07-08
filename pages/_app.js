import { wrapper } from "../services/store";

import { GlobalStyles } from "../common/styles/global";
import { PageLayout } from "../layouts";
import { TopMenu } from "../components";

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <PageLayout>
        <TopMenu />
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
}

export default wrapper.withRedux(MyApp);

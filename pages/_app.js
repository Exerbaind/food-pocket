import { wrapper } from "../services/store";

import { GlobalStyles } from "../common/styles/global";

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
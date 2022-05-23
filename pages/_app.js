import { Provider } from "react-redux";

import { store, wrapper } from "../services/store";

import { GlobalStyles } from "../common/styles/global";
import Header from "../components/Header";
import Menu from "../components/Menu";
import CommonPageLayout from "../layouts/CommonPageLayout";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [showClient, setShowClient] = useState(false);

  useEffect(() => {
    setShowClient(true);
  }, []);

  if (!showClient) {
    return null;
  }

  return (
    <Provider store={store}>
      <GlobalStyles />
      <Header />
      <Menu />
      <CommonPageLayout>
        <Component {...pageProps} />
      </CommonPageLayout>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);

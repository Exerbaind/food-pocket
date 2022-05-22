import { Provider } from "react-redux";

import { store } from "../services/store";

import { GlobalStyles } from "../common/styles/global";
import Header from "../components/Header";
import Menu from "../components/Menu";
import CommonPageLayout from "../layouts/CommonPageLayout";

function MyApp({ Component, pageProps }) {
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

export default MyApp;

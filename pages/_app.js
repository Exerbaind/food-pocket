import { Provider } from "react-redux";

import { store } from "../services/store";

import { GlobalStyles } from "../common/styles/global";
import Header from "../components/Header";
import Menu from "../components/Menu";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Header />
      <Menu />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

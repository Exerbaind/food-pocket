import { Provider } from "react-redux";

import { store } from "../services/store";

import { GlobalStyles } from "../common/styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

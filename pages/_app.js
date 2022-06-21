import { wrapper } from '../services/store';

import { GlobalStyles } from '../common/styles/global';
import Header from '../components/Header';
import Menu from '../components/Menu';
import CommonPageLayout from '../layouts/CommonPageLayout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Menu />
      <CommonPageLayout>
        <Component {...pageProps} />
      </CommonPageLayout>
    </>
  );
}

export default wrapper.withRedux(MyApp);

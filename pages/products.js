import Seo from "../seo/productsSeo";

import { initScreenType } from "../common/utils/initScreenType";

import { wrapper } from "../services/store";
import { handleScreenType } from "../services/app/appSlice";

import * as layouts from "../layouts";

function DishPage() {
  return (
    <>
      <Seo />
      <layouts.ContentLayout>
        <p>Products</p>
      </layouts.ContentLayout>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { isMobile } = initScreenType(context);
    store.dispatch(handleScreenType(isMobile));
  }
);

export default DishPage;

import { Fragment } from "react";
import { connect } from "react-redux";
import Seo from "../seo/mainSeo";

import { initScreenType } from "../common/utils/initScreenType";

import { wrapper } from "../services/store";
import { handleScreenType } from "../services/app/appSlice";

import ModalForm from "../components/ModalForm";
import NewDataButton from "../components/NewDataButton";
import fetchRequest from "../common/utils/fetchRequest";
import { handleError, setData } from "../services/dish/dishSlice";
import BarcodeReader from "../components/BarcodeReader";

function Home() {
  return (
    <Fragment>
      <Seo />
      <NewDataButton />
      <ModalForm />
      <BarcodeReader />
    </Fragment>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { isMobile } = initScreenType(context);
    store.dispatch(handleScreenType(isMobile));
    const response = await fetchRequest("/api/dishes");
    if (response && response.error) {
      store.dispatch(handleError(response.error));
    }

    if (response && response.message) {
      store.dispatch(setData(response.message));
    }
  }
);

const mapStateToProps = ({ appService }) => ({
  isMobile: appService.isMobile,
});

const mapDispatchToProps = {
  handleScreenTypeAction: handleScreenType,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

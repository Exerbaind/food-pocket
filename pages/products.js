import { Fragment } from "react";
import { connect } from "react-redux";
import Seo from "../seo/productsSeo";

import { initScreenType } from "../common/utils/initScreenType";

import { wrapper } from "../services/store";
import { handleScreenType } from "../services/app/appSlice";

import ModalForm from "../components/ModalForm";
import NewDataButton from "../components/NewDataButton";
import fetchRequest from "../common/utils/fetchRequest";
import { handleError, setData } from "../services/product/productSlice";
import ResultsList from "../components/ResultsList";
import MessagePopup from "../components/MessagePopUp";

function Products({ list }) {
  return (
    <Fragment>
      <Seo />
      <NewDataButton />
      <ModalForm />
      <ResultsList results={list} type="product" />
      <MessagePopup />
    </Fragment>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { isMobile } = initScreenType(context);
    store.dispatch(handleScreenType(isMobile));
    const response = await fetchRequest("/api/products", "GET");
    if (response && response.error) {
      store.dispatch(handleError(response.error));
    }

    if (response && response.message) {
      store.dispatch(setData(response.message));
    }
  }
);

const mapStateToProps = ({ appService, productService }) => ({
  isMobile: appService.isMobile,
  list: productService.list,
});

const mapDispatchToProps = {
  handleScreenTypeAction: handleScreenType,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);

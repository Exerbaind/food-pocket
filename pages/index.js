import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Seo from "../seo/mainSeo";

import { initScreenType } from "../common/utils/initScreenType";

import { wrapper } from "../services/store";
import { handleScreenType } from "../services/app/appSlice";

import ModalForm from "../components/ModalForm";
import NewDataButton from "../components/NewDataButton";
import fetchRequest from "../common/utils/fetchRequest";
import { handleError, setData } from "../services/dish/dishSlice";
import ResultsList from "../components/ResultsList";
import MessagePopup from "../components/MessagePopup";

function Home({ list }) {
  return (
    <>
      <Seo />
      <ResultsList results={list} type="dish" />
      <MessagePopup />
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { isMobile } = initScreenType(context);
    store.dispatch(handleScreenType(isMobile));
    const response = await fetchRequest("/api/dishes", "GET");
    if (response && response.error) {
      store.dispatch(handleError(response.error));
    }

    if (response && response.message) {
      store.dispatch(setData(response.message));
    }
  }
);

const mapStateToProps = ({ appService, dishService }) => ({
  isMobile: appService.isMobile,
  list: dishService.list,
});

const mapDispatchToProps = {
  handleScreenTypeAction: handleScreenType,
};

Home.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})),
};

Home.defaultProps = {
  list: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

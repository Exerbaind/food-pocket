import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Seo from "../seo/mainSeo";

import { initScreenType } from "../common/utils/initScreenType";

import { wrapper } from "../services/store";
import { handleScreenType } from "../services/app/appSlice";
import fetchRequest from "../common/utils/fetchRequest";
import { handleError, setData } from "../services/dish/dishSlice";
import ResultsList from "../components/ResultsList";
import MessagePopup from "../components/MessagePopup";
import Modal from "../components/Modal";
import Forms from "../components/Forms";

function Home({ list, showModal, edit, currentForm }) {
  console.log(showModal);
  return (
    <>
      <Seo />
      <ResultsList results={list} type="dish" />
      <MessagePopup />
      <Modal active={showModal} fullScreen>
        {/* <Forms edit={edit} currentForm={currentForm} /> */}
        <p>hello</p>
      </Modal>
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

const mapStateToProps = ({
  appService,
  dishService,
  modalService,
  formService,
}) => ({
  isMobile: appService.isMobile,
  list: dishService.list,
  showModal: modalService.showForm,
  edit: formService.edit,
  currentForm: formService.currentForm,
});

const mapDispatchToProps = {
  handleScreenTypeAction: handleScreenType,
};

Home.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})),
  showModal: PropTypes.bool.isRequired,
  edit: PropTypes.bool.isRequired,
  currentForm: PropTypes.string.isRequired,
};

Home.defaultProps = {
  list: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

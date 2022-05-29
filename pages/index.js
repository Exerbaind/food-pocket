import { Fragment } from "react";
import { connect } from "react-redux";
import Seo from "../seo/mainSeo";

import { initScreenType } from "../common/utils/initScreenType";

import { wrapper } from "../services/store";
import { handleScreenType } from "../services/app/appSlice";

import ModalForm from "../components/ModalForm";
import NewDataButton from "../components/NewDataButton";

function Home() {
  return (
    <Fragment>
      <Seo />
      <NewDataButton />
      <ModalForm />
    </Fragment>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { isMobile } = initScreenType(context);
    store.dispatch(handleScreenType(isMobile));
    try {
      const dev = process.env.NODE_ENV !== "production";
      const { DEV_URL, PROD_URL } = process.env;
      const rootUrl = dev ? DEV_URL : PROD_URL;
      const data = await fetch(`${rootUrl}/api/dishes`, {
        method: "GET",
      });
      let response = await data.json();
      console.log(response["message"]);
    } catch (error) {
      console.error(error);
    }

    return { props: { isMobile } };
  }
);

const mapStateToProps = ({ appService }) => ({
  isMobile: appService.isMobile,
});

const mapDispatchToProps = {
  handleScreenTypeAction: handleScreenType,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

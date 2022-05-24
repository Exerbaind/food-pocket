import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import Seo from "../seo/mainSeo";

import { initScreenType } from "../common/utils/initScreenType";

import { wrapper } from "../services/store";
import { handleScreenType } from "../services/app/appSlice";

import ModalForm from "../components/ModalForm";
import NewDataButton from "../components/NewDataButton";

function Home({ isMobile, handleScreenTypeAction }) {
  useEffect(() => {
    handleScreenTypeAction(isMobile);
  }, []);
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
    // try {
    //   const data = await fetch("http://localhost:3000/api/data");
    //   let res = await data.json();
    //   console.log(res["message"]);
    //   // console.log(data);
    // } catch (error) {
    //   console.error(error);
    // }

    // const client = await clientPromise;
    // const db = client.db("RestaurantsDatabase");
    // const data = await db.collection("DishesList").find({}).toArray();
    // console.log(data);

    return { props: { isMobile } };
  }
);

const mapDispatchToProps = {
  handleScreenTypeAction: handleScreenType,
};

export default connect(null, mapDispatchToProps)(Home);

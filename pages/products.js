import { Fragment } from "react";
import Seo from "../seo/productsSeo";
import clientPromise from "../server/mongodb";

import NewDataButton from "../components/NewDataButton";
import ModalForm from "../components/ModalForm";

export default function Products() {
  return (
    <Fragment>
      <Seo />
      <NewDataButton />
      <ModalForm />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  try {
    await clientPromise;
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the folloing code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

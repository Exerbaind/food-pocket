import { ObjectId } from "mongodb";
import clientPromise from "../../server/mongodb";

// eslint-disable-next-line consistent-return
async function addProduct(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("ProductsDatabase");
    await db.collection("ProductsList").insertOne(JSON.parse(req.body));
    return res.json({
      message: "Продукт успешно отправлен!",
      success: true,
    });
  } catch (error) {
    console.error(error);
  }
}

// eslint-disable-next-line consistent-return
async function deleteProduct(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("ProductsDatabase");
    await db
      .collection("ProductsList")
      .deleteOne({ _id: new ObjectId(req.body) });
    return res.json({
      message: "Продукт успешно удален!",
      success: true,
    });
  } catch (error) {
    console.error(error);
  }
}

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "POST": {
      return addProduct(req, res);
    }
    case "DELETE": {
      return deleteProduct(req, res);
    }
    default: {
      return null;
    }
  }
}

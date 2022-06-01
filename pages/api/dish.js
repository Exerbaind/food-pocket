import { ObjectId } from "mongodb";
import clientPromise from "../../server/mongodb";

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "POST": {
      return addDish(req, res);
    }
    case "DELETE": {
      return deleteDish(req, res);
    }
  }
}

async function addDish(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("RestaurantsDatabase");
    await db.collection("DishesList").insertOne(JSON.parse(req.body));
    return res.json({
      message: "Блюдо успешно отправлено!",
      success: true,
    });
  } catch (error) {
    console.error(error);
  }
}

async function deleteDish(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("RestaurantsDatabase");
    await db
      .collection("DishesList")
      .deleteOne({ _id: new ObjectId(req.body) });
    return res.json({
      message: "Блюдо успешно удалено!",
      success: true,
    });
  } catch (error) {
    console.error(error);
  }
}

import clientPromise from "../../server/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("FoodPocket");
  const data = await db.collection("Products").find({}).toArray();

  res.send({ data });
}

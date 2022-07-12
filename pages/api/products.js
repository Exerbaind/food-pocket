import clientPromise from "../../server/mongodb";

// eslint-disable-next-line consistent-return
async function getProducts(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("ProductsDatabase");
    const data = await db.collection("ProductsList").find({}).toArray();
    return res.json({
      data: JSON.parse(JSON.stringify(data)),
      success: true,
    });
  } catch (error) {
    console.error(error);
  }
}

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET": {
      return getProducts(req, res);
    }
    default: {
      return null;
    }
  }
}

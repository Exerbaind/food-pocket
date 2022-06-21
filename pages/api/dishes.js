import clientPromise from '../../server/mongodb';

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case 'GET': {
      return getDishes(req, res);
    }
  }
}

async function getDishes(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('RestaurantsDatabase');
    const data = await db.collection('DishesList').find({}).toArray();
    return res.json({
      message: JSON.parse(JSON.stringify(data)),
      success: true,
    });
  } catch (error) {
    console.error(error);
  }
}

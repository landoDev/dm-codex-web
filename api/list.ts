import { connectToDatabase } from "../mongodb/connectToDatabase.js"; // NOTE: added explicit import to get around serverless crash (couldn't find import)


export default async function handler(request: any, response: any) {
    try {
        const mongoClient = await connectToDatabase();
        if (mongoClient) {
            // TODO: look into how typing works with `ts` serverless files, not a blocker atm
            const db = mongoClient.db("sample_restaurants");
            const collection = db.collection("restaurants");
            const results = await collection.find({}).project({
                grades: 0,
                borough: 0,
                resturant_id: 0,
            })
            .limit(4)
            .toArray();
            response.status(200).json(results)
        } else {
            console.log("Couldn't connect to MongoClient")
        }
    } catch(e) {
        console.log("Natural 1! Failed on: ", e);
        response.status(500).json(e);
    }
}
import { connectToDatabase } from "../lib/connectToDatabase";
// TODO: this errors lol, `Error: Cannot find module '/home/lando/dm-codex-web/lib/connectToDatabase' imported from /home/lando/dm-codex-web/api/list.ts`


export default async function handler(request: any, response: any) {
    try {
        // TODO: can I do a reusable function for connecting? would fold into above reusable ting that checks for the mongo env var
        // would need to return the `db` from the mongo client
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

        }
    } catch(e) {
        console.log("Natural 1! Failed on: ", e);
        response.status(500).json(e);
    }
}
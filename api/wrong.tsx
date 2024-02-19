import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

// TODO: Make this reusable function so I can use this in each serverless function file
if (!process.env.MONGODB_URI) {
    throw new Error("Please add your Mongo URI to .env.local");
}

export default async function handler(request: any, response: any) {
    if (uri) {
        try {
            // TODO: can I do a reusable function for connecting? would fold into above reusable ting that checks for the mongo env var
            // would need to return the `db` from the mongo client
            const mongoClient = await (new MongoClient(uri, options).connect());
            console.log("Connected to mongo!");
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
        } catch(e) {
            console.log("Natural 1! Failed on: ", e);
            response.status(500).json(e);
        }
    } else {
        console.log("Critical fail! No MONGODB_URI in environment variables.");
    }
}
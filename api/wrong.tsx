import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

// TODO: Make this reusable function so I can use this in each serverless function file
if (!process.env.MONGODB_URI) {
    throw new Error("Please add your Mongo URI to .env.local");
}

export default async function handler(request, response) {
    try {
        // TODO: can I do a reusable function for connecting? would fold into above reusable ting that checks for the mongo env var
        // would need to return the `db` from the mongo client
        const mongoClient = await (new MongoClient(uri, options).connect());
        console.log("Connected to mongo!");
        const db = mongoClient.db
        
    } catch(e) {
        console.log("Natural 1! Failed on: ", e);
    }
}
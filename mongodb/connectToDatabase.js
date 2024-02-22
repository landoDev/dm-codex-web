/* built with https://www.youtube.com/watch?v=JIlYroSsInU, if one gets lost */
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let mongoClient; // this becomes our cached connection

export async function connectToDatabase(){
    if (uri) {
        try {
            if (mongoClient) {
                return mongoClient ;
            }
            mongoClient = await (new MongoClient(uri, options).connect());
            console.log("Connected to mongo!");
            return mongoClient
        } catch(e) {
            console.error("Natural 1! Failed on: ", e);
        }
    } else {
        console.log("Critical fail! No MONGODB_URI in environment variables.");
        throw new Error("Please add your Mongo URI to .env.local");
    }
}

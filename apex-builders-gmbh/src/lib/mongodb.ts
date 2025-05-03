/* eslint-disable no-var */
import { MongoClient } from "mongodb";

// Create a global variable to avoid multiple database connections
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const uri = process.env.MONGODB_URI as string; // Use the env variable

const client = new MongoClient(uri);

let clientPromise: Promise<MongoClient>;

// Check if we're running in a development environment to use the global variable
if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable to persist the client connection
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, use a direct connection
  clientPromise = client.connect();
}

export default clientPromise;

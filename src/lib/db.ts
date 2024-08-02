import clientPromise from "./mongodb";
import exp from "node:constants";

export function getDatabase() {
  const client = clientPromise;
  return client.db("what-for-dinner");
}

export const db = getDatabase();

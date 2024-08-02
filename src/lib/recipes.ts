import { db, getDatabase } from "@/lib/db";

export async function getRecipes() {
  const db = getDatabase();
  return await db.collection("recipes").find({}).toArray();
}

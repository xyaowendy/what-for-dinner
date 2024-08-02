import { db } from "@/lib/db";
import { Recipe } from "@/interface/IRecipe";

export const getRecipes = async () => {
  return await db.collection("recipes").find({}).toArray();
};

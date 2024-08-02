import { db } from "@/lib/db";
import { Recipe } from "@/interface/IRecipe";

export const getRecipes = async () => {
  return db.collection("recipes").find({}).toArray();
};

export const addRecipe = async (recipe: Recipe) => {
  return;
};

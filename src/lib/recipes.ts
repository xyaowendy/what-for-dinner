import { db } from "@/lib/db";
import { Recipe } from "@/interface/IRecipe";

export const getAllRecipes = async () => {
  return db.collection("recipes").find({}).toArray();
};

export const addRecipe = async (recipe: Recipe) => {
  return;
};

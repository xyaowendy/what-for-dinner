import React from "react";
import { IRecipe } from "@/interface/IRecipe";

interface RecipeItemProps {
  recipe: IRecipe;
}

const RecipeItem = ({ recipe }: RecipeItemProps) => {
  return <>{recipe.name}</>;
};

export default RecipeItem;

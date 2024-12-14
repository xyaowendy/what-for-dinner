import React from "react";
import { IRecipe } from "@/interface/IRecipe";
import RecipeItem from "@/app/recipes/components/RecipeItem";

interface RecipeListProps {
  recipes: IRecipe[];
}
const RecipeList = ({ recipes }: RecipeListProps) => {
  if (recipes.length === 0) {
    return (
      <div className="center">
        <h2>No recipes found</h2>
      </div>
    );
  }

  return (
    <ul>
      {recipes.map((recipe) => {
        return <RecipeItem key={recipe._id.toString()} recipe={recipe} />;
      })}
    </ul>
  );
};

export default RecipeList;

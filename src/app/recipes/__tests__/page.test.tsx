import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import RecipesPage from "@/app/recipes/page";
import { mockRecipes } from "@/mocks/data";
import { server } from "@/mocks/server";
import { http } from "msw";

describe("RecipesPage Component", () => {
  it('displays "No recipes found" when the recipes array is empty', () => {
    render(<RecipesPage />);
    expect(screen.getByText(/no recipes found/i)).toBeInTheDocument();
  });

  it("renders a list of RecipeItem components when recipes are provided", async () => {
    render(<RecipesPage />);
    mockRecipes.forEach((recipe) => {
      const regex = new RegExp(recipe.name, "i"); // 'i' flag for case-insensitive matching
      expect(screen.getByText(regex)).toBeInTheDocument();
    });
  });
});

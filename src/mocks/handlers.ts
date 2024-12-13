import { http } from "msw";
import { mockRecipes } from "@/mocks/data";

export const handlers = [
  http.get("/api/recipes", () => {
    return Response.json(mockRecipes);
  }),
  // Add more handlers as needed
];

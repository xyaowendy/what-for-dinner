import { http } from "msw";

export const handlers = [
  http.get("/api/recipes", () => {
    return Response.json([{ name: "Burger" }]);
  }),
  // Add more handlers as needed
];

import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Page from "../app/page";
import { server } from "@/mocks/server";
import { http } from "msw";

describe("Page", () => {
  it("renders the home component with mocked data", async () => {
    render(<Page />);
    expect(await screen.findByText(/burger/i)).toBeInTheDocument();
  });

  it("renders with overridden mock data", async () => {
    server.use(
      http.get("/api/recipes", () => {
        return Response.json([{ name: "Rice" }]);
      }),
    );

    render(<Page />);
    expect(await screen.findByText(/rice/i)).toBeInTheDocument();
  });
});

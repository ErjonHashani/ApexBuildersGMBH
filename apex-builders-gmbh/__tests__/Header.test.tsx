import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";
import React from "react";


jest.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "/",
  }),
}));

jest.mock("next-auth/react", () => ({
  useSession: () => ({
    data: null,
    status: "unauthenticated",
  }),
  signOut: jest.fn(),
}));

describe("Header", () => {
  it("renders the brand and nav links", () => {
    render(<Header />);

    expect(screen.getByText("Apex Builders GmbH")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("News")).toBeInTheDocument();
  });

  it("shows login/register when unauthenticated", () => {
    render(<Header />);

    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
  });
});

import React from "react";
import { act, create } from "react-test-renderer";
import axios from "axios";
import Product from "./Product";
import { MemoryRouter } from "react-router-dom";

jest.mock("axios");

describe("Product component", () => {
  beforeEach(() => {
    axios.get.mockReset();
  });

  test("renders null when post is null", () => {
    const tree = create(
      <MemoryRouter>
        <Product />
      </MemoryRouter>
    );
    expect(tree).toBeNull();
  });

  test("renders null when post1 is null", () => {
    axios.get.mockResolvedValueOnce({ data: { title: "Test Title" } });

    const tree = create(
      <MemoryRouter>
        <Product />
      </MemoryRouter>
    );
    expect(tree).toBeNull();
  });

  test("renders the product details when post and post1 are available", async () => {
    const mockPost = {
      title: "Test Title",
      summary: "Test Summary",
      image: "test-image.jpg",
    };
    const mockPost1 = {
      ingredients: [
        { name: "Ingredient 1" },
        { name: "Ingredient 2" },
        { name: "Ingredient 3" },
      ],
    };

    axios.get.mockResolvedValueOnce({ data: mockPost });
    axios.get.mockResolvedValueOnce({ data: mockPost1 });

    let tree;
    await act(async () => {
      tree = create(
        <MemoryRouter>
          <Product />
        </MemoryRouter>
      );
      await Promise.resolve();
    });

    const heroSection = tree.root.findByProps({ className: "heroSection" });
    expect(heroSection).toBeDefined();

    const productName = tree.root.findByProps({ className: "productName" });
    expect(productName.children).toEqual([mockPost.title]);

    const productTextBig = tree.root.findByProps({ className: "productTextBig" });
    expect(productTextBig.children).toEqual([mockPost.summary]);

    const heroImg = tree.root.findByProps({ className: "heroImg" });
    expect(heroImg.props.src).toEqual(mockPost.image);

    const productTextSmall = tree.root.findByProps({ className: "productTextSmall" });
    expect(productTextSmall.children).toEqual([mockPost.summary]);

    const featuresList = tree.root.findByProps({ className: "featuresList" });
    expect(featuresList.findAllByType("li")).toHaveLength(mockPost1.ingredients.length);

    const logoImg = tree.root.findByProps({ className: "logoImg" });
    expect(logoImg.props.src).toEqual("images/logo.jpg");
  });
});

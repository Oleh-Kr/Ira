import React from "react";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import renderer from "react-test-renderer";
import Catalog from "./Catalog";
import axios from "axios";

jest.mock("axios");

describe("Catalog Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders correctly when API call is successful", () => {
    const mockData = [
      { id: 1, image: "image1.jpg", title: "Product 1" },
      { id: 2, image: "image2.jpg", title: "Product 2" },
    ];

    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: mockData })

    const component = renderer.create(
      <Router>
        <Catalog />
      </Router>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders nothing when the API call fails", () => {
    axios.get.mockRejectedValueOnce(new Error("API Error"));

    const component = renderer.create(
      <Router>
        <Catalog />
      </Router>
    );
    const tree = component.toJSON();
    expect(tree).toBeNull();
  });

});

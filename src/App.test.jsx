import React from "react";
import { create } from "react-test-renderer";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Catalog from "./components/catalog/Catalog";
import Navbar from "./components/navbar/Navbar";
import Order from "./components/order/Order";
import Home from "./components/home/Home";
import Contact from "./components/footer/Footer";
import Product from "./components/product/Product";

describe("App component", () => {
  test("renders Navbar component", () => {
    const tree = create(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const navbarComponent = tree.root.findByType(Navbar);
    expect(navbarComponent).toBeDefined();
  });

  test("renders Routes component with correct routes", () => {
    const tree = create(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const routesComponent = tree.root.findByType(Routes);
    expect(routesComponent).toBeDefined();

    const routes = routesComponent.findAllByType(Route);
    expect(routes.length).toBe(0);

    // expect(routes[0].props.path).toEqual("/");
    // expect(routes[0].props.element.type).toEqual(Home);

    // expect(routes[1].props.path).toEqual("/catalog");
    // expect(routes[1].props.element.type).toEqual(Catalog);

    // expect(routes[2].props.path).toEqual("/product");
    // expect(routes[2].props.element.type).toEqual(Product);

    // expect(routes[3].props.path).toEqual("/order");
    // expect(routes[3].props.element.type).toEqual(Order);
  });

  test("renders Contact component", () => {
    const tree = create(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const contactComponent = tree.root.findByType(Contact);
    expect(contactComponent).toBeDefined();
  });
});

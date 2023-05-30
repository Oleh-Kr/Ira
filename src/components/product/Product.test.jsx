import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Product from "./Product";
const baseURL = "https://api.spoonacular.com/recipes/<id>/information?apiKey=60c1ca27b27b4afbb847decdc9d34f04";


export default function Product() {
  const [post, setPost] = React.useState(null);
  const [post1, setPost1] = React.useState(null);

React.useEffect(() => {
  const receipt_id = localStorage.getItem("card-id");

  axios.get(baseURL.replace("<id>", receipt_id)).then((response) => {
    var pattern = "</b>",
    re = new RegExp(pattern, "g");
    response.data.summary = response.data.summary.replace(/<b>/g, "").replace(re, "")
    setPost(response.data);
  });

  axios.get(baseURL1.replace("<id>", receipt_id)).then((response) => {
    setPost1(response.data);
  });
}, []);
React.useEffect(() => {
  if (post)
  {
    post.summary = post.summary.replace("<b>", "").replace("</b>", "")
    
  }
}, [post])

if (!post) return null;
if (!post1) return null;




const mock = new MockAdapter(axios);

test("renders product name", async () => {
  const fakePost = {
    title: post,
    summary: "This is a fake product",
    image: "fake-image-url",
  };

  const fakePost1 = {
    ingredients: [
      { name: "Ingredient 1" },
      { name: "Ingredient 2" },
      // Add more fake ingredients if needed
    ],
  };

  mock
    .onGet(/information/)
    .reply(200, fakePost)
    .onGet(/priceBreakdownWidget/)
    .reply(200, fakePost1);

  render(<Product />);

  await waitFor(() => {
    const productName = screen.getByText("Fake Product");
    expect(productName).toBeInTheDocument();
  });
});
}

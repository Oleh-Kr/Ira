import React from "react";
import styles from "./Product.module.scss";
import axios from "axios";


const baseURL = "https://api.spoonacular.com/recipes/<id>/information?apiKey=60c1ca27b27b4afbb847decdc9d34f04";

const baseURL1 = "https://api.spoonacular.com/recipes/<id>/priceBreakdownWidget.json?apiKey=60c1ca27b27b4afbb847decdc9d34f04";

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



  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.leftCol}>
          <h3 className={styles.subhead}>take a rest</h3>
          <div className={styles.heroCta}>
            <p className={styles.productName}>{post.title}</p>
          </div>
          <div className={styles.heroP}>
            <p className={styles.productTextBig}>{post.summary}</p>
          </div>
        </div>
        <img src={post.image} className={styles.heroImg} alt={post.title} />
        <div>
          <p className={styles.productTextSmall}>{post.summary}</p>
        </div>
      </div>
      <div className={styles.featuresSection}>
        <div className={styles.productContainer}>
          <ul className={styles.featuresList}>
            {post1.ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient.name}</li>
            ))}
          </ul>
          <img className={styles.logoImg} src="images/logo.jpg" alt="Logo" />
        </div>
      </div>
    </>
  );
}
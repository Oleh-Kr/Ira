import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Catalog.module.scss"

const baseURL = "https://api.spoonacular.com/recipes/findByNutrients?minCarbs=45&maxCarbs=50&number=30&apiKey=60c1ca27b27b4afbb847decdc9d34f04";

export default function Catalog() {

  const [post, setPost] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data)
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  function handleCardClick(e){
    e.preventDefault()
    const id = e.target.dataset.id
    localStorage.setItem("card-id", id)
    navigate("/product")
  }
  return (
    <>
    <ul className={styles.catalogSection}>
        {post.map((data, i) =>(
        <li key={data.image} className={styles.catalogLi} onClick={handleCardClick} data-id={data.id}>
        <Link to="/product" className={styles.catalogLink}><img src={data.image} alt="cupcake" /></Link>
        <p>{data.title}</p>
        </li>
        ))}
    
    </ul>
    </>
  );
 
}

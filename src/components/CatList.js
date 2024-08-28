import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CatList = () => {
  const { cat_id } = useParams();

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    loadUsers();
  }, [cat_id]);
  const loadUsers = async () => {
    const result = await axios.get(
      "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/articles/articles_list.php?cat_id=" +
        cat_id
    );
    setArticles(result.data.records);
  };

  return (
    <div>
      <div id="templatemo_right_column">
        <div id="templatemo_main">
          {articles?.map((article, index) => (
            <div className="post_section" key={index}>
              <h2>
                <Link
                  to={`/articles/${article.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <strong style={{ color: "red" }}>
                    {article.articles_name}{" "}
                  </strong>
                </Link>
              </h2>
              <Link to={`/articles/${article.id}`}>
                <img
                  src={`https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/images/${article.image}`}
                  alt="image 1"
                  height="250"
                  width="450"
                />
              </Link>
              <p>
                <Link
                  to={`/articles/${article.id}`}
                  target="_parent"
                  style={{ textDecoration: "none" }}
                >
                  <span style={{ color: "black" }}>
                    {" "}
                    {article.articles_description}{" "}
                  </span>
                </Link>
              </p>
              <Link to={`/articles/${article.id}`}>Continue reading...</Link>
            </div>
          ))}

          <p>{cat_id}</p>

          {/* {articles?.map((article, ind) => (
            <div key={ind}>
              <h2>
                <Link
                  to={`/article/${article.id}`}
                  style={{ textDecoration: "none", color: "red" }}
                >
                  <strong> {article.articles_name}</strong>
                </Link>
              </h2>
              <Link
                to={`/article/${article.id}`}
                style={{ textDecoration: "none" }}
              >
                <img
                  width={450}
                  src={`https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/images/${article.image}`}
                  alt=""
                />
              </Link>
              <p>{article.articles_description}</p>
              <Link to={`/article/${article.id}`}>Continue Reading</Link>
            </div>
          ))} */}
        </div>
        <div className="cleaner" />
      </div>
    </div>
  );
};

export default CatList;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const result = await axios.get(
          // `https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/articles/getArticles.php?id=${id}`
          `https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/articles/getSingleBlog.php?id=${id}`
        );
        console.log("API response:", result.data);
        setArticles([result.data]);
      } catch (error) {
        console.error("There was an error loading the articles!", error);
        setArticles([]);
      }
    };

    loadArticles();
  }, [id]);

  // add comments
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [message, setMessage] = useState("");

  const [inpData, setInpData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    articles_id: id,
  });
  const handleChange = (e) => {
    setInpData({ ...inpData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const formData = new FormData();

    // formData.append("name", name);
    // formData.append("email", email);
    // formData.append("phone", phone);
    // formData.append("message", message);
    // console.log(formData);

    await axios
      .post(
        "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/comments/comments_insert.php",
        inpData
      )
      .then((result) => {
        console.log(result);
        setInpData({
          name: "",
          email: "",
          phone: "",
          message: "",
          articles_id: id,
        });
      });
  };

  const [comments, setComments] = useState([]);

  const loadComments = async () => {
    const result = await axios.get(
      "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/comments/view_comments.php"
    );
    const totalComments = result.data.records;
    const filteredComments = totalComments.filter((comment, ind) => {
      return comment.status === "1" && comment.articles_id === id;
      // return comment.articles_id === id;
    });
    setComments(filteredComments);
  };

  useEffect(() => {
    loadComments();
  }, [inpData]);

  return (
    <>
      <div>
        <div id="templatemo_right_column">
          <div id="templatemo_main">
            <h1>Article Details</h1>
            <p>Category ID: {id}</p>
            <ul className="article_list">
              {articles.length > 0 ? (
                articles.map((article, index) => (
                  <li key={index}>
                    <h3>{article.articles_name}</h3>
                    <p>{article.articles_description}</p>
                    <img
                      src={`https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/images/${article.image}`}
                      alt=""
                    />
                  </li>
                ))
              ) : (
                <p>No articles found.</p>
              )}
            </ul>
            <div className="comment_form_wrapper">
              <form onSubmit={handleSubmit}>
                <h3>Comments</h3>
                <div className="form_row">
                  <div className="form_col form_col_full">
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      value={inpData.name}
                      // onChange={(e) => setName(e.target.value)}
                      name="name"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="form_col">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      value={inpData.email}
                      // onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="form_col">
                    <input
                      type="text"
                      placeholder="Enter Your Number"
                      value={inpData.phone}
                      // onChange={(e) => setPhone(e.target.value)}
                      name="phone"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="form_col form_col_full">
                    <textarea
                      placeholder="Enter Your Message"
                      value={inpData.message}
                      // onChange={(e) => setMessage(e.target.value)}
                      name="message"
                      onChange={(e) => handleChange(e)}
                    ></textarea>
                  </div>
                  <div className="form_col form_col_full">
                    <input type="submit" />
                  </div>
                </div>
              </form>
            </div>
            <div className="approved_comment">
              <h3>Comment</h3>
              <ul className="approved_comment_list">
                {comments.map((comment, ind) => (
                  <li key={ind}>
                    {comment.message} by <span> {comment.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;

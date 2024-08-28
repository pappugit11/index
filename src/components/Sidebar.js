import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [state, setCat] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get(
      "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/categories/view_category.php"
    );
    setCat(result.data.records);
  };

  return (
    <div>
      <div id="templatemo_left_column">
        <div id="templatemo_header">
          <div id="site_title">
            <h1>
              <a href="index.html">
                Clean <strong>Blog</strong>
                <span>Free HTML-CSS Template</span>
              </a>
            </h1>
          </div>
        </div>
        <div id="templatemo_sidebar">
          <h4>Categories</h4>
          <ul className="templatemo_list">
            {state.map((abc, index) => (
              <li key={index}>
                <Link to={`/cat-list/${abc.id}`}>{abc.category_name}</Link>
              </li>
            ))}
          </ul>

          <div className="cleaner_h40" />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Contact() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    full_name: "",
    email_id: "",
    ph_number: "",
    message: "",
  });
  const { full_name, email_id, ph_number, message } = data;

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/comments/comments_insert.php",
        data
      );
      if (response.data.data.status === "valid") {
        navigate("/viewcontact");
      } else {
        alert("There is a problem in adding, please try again");
      }
    } catch (err) {
      alert("Somethings is wrong in API", err);
    }
  };
  return (
    <div>
      <>
        <div id="templatemo_wrapper">
          <div id="templatemo_right_column">
            <div id="templatemo_main">
              <h1>Contact Us</h1>
              <div className="cleaner_h50" />
              <div id="contact_form">
                <h2>Contact Form</h2>
                <form
                  onSubmit={handleSubmit}
                  method="post"
                  name="contact"
                  action="#"
                >
                  <input type="hidden" name="post" defaultValue="Send" />
                  <label htmlFor="author">Name:</label>{" "}
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={full_name}
                    className="required input_field"
                    onChange={handleChange}
                  />
                  <div className="cleaner_h10" />
                  <label htmlFor="email">Email Address:</label>{" "}
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={email_id}
                    className="validate-email required input_field"
                    onChange={handleChange}
                  />
                  <label htmlFor="email">Phone:</label>{" "}
                  <input
                    type="number"
                    id="number"
                    name="number"
                    value={ph_number}
                    className="required input_field"
                    onChange={handleChange}
                  />
                  <div className="cleaner_h10" />
                  <label htmlFor="text">Message:</label>{" "}
                  <textarea
                    id="text"
                    name="text"
                    rows={0}
                    cols={0}
                    value={message}
                    className="required"
                    defaultValue={""}
                    onChange={handleChange}
                  />
                  <div className="cleaner_h10" />
                  <input
                    type="submit"
                    className="submit_btn"
                    name="submit"
                    id="submit"
                    defaultValue="Send"
                  />
                  <input
                    type="reset"
                    className="submit_btn"
                    name="reset"
                    id="reset"
                    defaultValue="Reset"
                  />
                </form>
              </div>
            </div>{" "}
            <div className="cleaner" />
          </div>{" "}
        </div>{" "}
      </>
    </div>
  );
}

export default Contact;

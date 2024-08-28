import React from "react";

export default function Home() {
  return (
    <div>
      <div id="templatemo_right_column">
        <div id="templatemo_main">
          <div className="post_section">
            <h2>
              <a href="blog_post.html">Aliquam lorem ante dapibus</a>
            </h2>
            <img src="images/templatemo_image_01.jpg" alt="image 1" />
            <p>
              Clean Blog is a
              <a href="http://www.templatemo.com" target="_parent">
                Free HTML-CSS Template
              </a>
              provided by <a href="#">templatemo.com</a> for everyone. Validate
              <a
                href="http://validator.w3.org/check?uri=referer"
                rel="nofollow"
              >
                XHTML
              </a>
              &amp;
              <a
                href="http://jigsaw.w3.org/css-validator/check/referer"
                rel="nofollow"
              >
                CSS
              </a>
              . Donec enim enim, imperdiet quis, mollis a, elementum a, diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
              nunc commodo ante ornare imperdiet.
            </p>
            <a href="blog_post.html">Continue reading...</a>
          </div>
        </div>
        <div className="cleaner" />
      </div>
    </div>
  );
}

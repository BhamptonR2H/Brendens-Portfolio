import React from "react";
import "../sass/_Footer.scss";
const footer = () => {
  return (
    <>
      <footer id="footer">
        <div id="icon-container">
          <a href="https://twitter.com/home" target="_blank">
            <div class="icon">
              <i class="fab fa-twitter"></i>
            </div>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <div class="icon">
              <i class="fab fa-instagram"></i>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/brenden-hampton1/"
            target="_blank"
          >
            <div class="icon">
              <i class="fab fa-linkedin"></i>
            </div>
          </a>
        </div>
        <p>Copyright 2021, Brenden Hampton</p>
      </footer>
    </>
  );
};

export default footer;

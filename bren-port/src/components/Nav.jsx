import React from "react";
import "../sass/_Nav.scss";
const Nav = () => {
  return (
    <>
      <header className="container">
        <nav>
          <ul class="menu">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;

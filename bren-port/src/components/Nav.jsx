import React from "react";
import "../sass/_Nav.scss";
import Resume from "../BrendenHamptonResume1.pdf";
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
            <li>
              <a href={Resume} target="_blank">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;

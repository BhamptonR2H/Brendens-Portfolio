import React from "react";
import "../sass/_Home.scss";
import Cards from "./Cards";
import Contact from "./Contact";
const Home = () => {
  return (
    <>
      <main className="aboutsec" id="Home">
        <h1>Brenden Hampton</h1>
        <img
          className="profileimg"
          src="/imgs/bren.jpeg"
          alt="Brenden Hampton"
        />
        <h2>Software Developer</h2>
        <p>
          Hello! My name is Brenden Hampton I am a enthusiastic, flexible
          software engineer eager to contribute to team success through hard
          work, attention to detail, and excellent organizational skills. I'm
          Always looking to enhance or learn new skills in tech. On my free time
          I like to play videogames, play basketball with my friends, and I
          enjoy reading Comic Books!
        </p>
      </main>
      <Cards />
      <Contact />
    </>
  );
};

export default Home;

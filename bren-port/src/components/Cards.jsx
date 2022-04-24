import React from "react";
import "../sass/_Cards.scss";
import projects from "../projects.json";
const Cards = ({ Data }) => {
  return (
    <>
      <section className="cardsec" id="Projects">
        <h1> My Projects</h1>
        <section className="card-format">
          {projects.map((project) => {
            return (
              <div className="card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img"
                />
                <div className="card-body">
                  <h2 className="card-title">{project.name}</h2>
                  <p className="card-date">{project.date}</p>
                  <p className="card-description">{project.description}</p>
                  <p className="card-tech">{project.tech}</p>
                  <button className="btn-link1">
                    <a href={project.link} target="_blank">
                      Deployed Link
                    </a>
                  </button>
                  <button className="btn-link2">
                    <a href={project.github} target="_blank">
                      GitHub Link
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default Cards;

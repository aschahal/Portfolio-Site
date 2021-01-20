import React from "react";
import Project from "./Project";

const Projects = () => {
  const works = [
    {
      stack: ["react", "eCommerce", "React hooks"],
      description:
        "Cozy Space is an online furniture store for you to design your dream home. You can easily find your favorite piece from our various morden furnitures by using the filter function. It is built with React, React hooks(useReduce and useContext) are utlized to manage the state.",
      title: "Cozy Space",
      github: "https://github.com/HaochenQ/React-Furniture-Store",
      url: "https://cozyspace.co",
      image: "../../static/files/furniture-store.png",
      index: 0,
    },

    {
      stack: ["react", "recipe", "Restful API"],
      description:
        "Find the recipe you need on this recipe web app, simply by typing in the keywords like 'beef soap' or 'korean food'. Follow the instructions and make food for you and your family.",
      title: "Find your recipe",
      github: "https://github.com/HaochenQ/React-Furniture-Store",
      url: "https://recipe-app.haochenq.vercel.app/",
      image: "../../static/files/Recipe-hub.png",
      index: 1,
    },
    {
      stack: ["Django", "Blog", "Backend"],
      description:
        "This is a blog system where you could create and update your account, post and update your own content and view other people's posts. This project is ",
      title: "Django Blog",
      github: "https://github.com/HaochenQ/Django-blog",
      url: "https://quiet-escarpment-41189.herokuapp.com/",
      image: "../../static/files/django-blog.png",
      index: 2,
    },
  ];
  return (
    <div className="projects">
      <h1 className="recent-projects">Recent Projects</h1>
      <div className="underline"></div>
      <div className="section-center projects-center">
        {works.map(
          ({ description, stack, title, github, url, image, index }) => (
            <Project
              stack={stack}
              key={index}
              description={description}
              title={title}
              url={url}
              github={github}
              image={image}
              index={index}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Projects;

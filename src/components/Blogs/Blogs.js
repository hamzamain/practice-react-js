import React from "react";
import "./Blogs.css";

const Blogs = (props) => {
  return (
    <div className="blog">
      <article>
        <h3>{props.name}</h3>
        <p style={{ color: "white" }}>
          <small>Author: {props.author}</small>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
          laudantium nulla ab nemo quas iure ipsa pariatur corrupti repellat
          magni corporis iusto, id recusandae ducimus porro. Assumenda
          recusandae rerum saepe.
        </p>
      </article>
    </div>
  );
};

export default Blogs;

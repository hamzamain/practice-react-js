import React from "react";
import "./SingleDo.css";

const SingleDo = (props) => {
  const { title, id, userId } = props.todo;
  return (
    <div className="do">
      <h3>Title : {title}</h3>
      <h4>UserId : {userId}</h4>
      <h3>
        Id : <small>{id}</small>
      </h3>
    </div>
  );
};

export default SingleDo;

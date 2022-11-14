import React, { useEffect, useState } from "react";
import SingleDo from "../SingleDo/SingleDo";
import "./Todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
  return (
    <div>
      <h1>All Todo here</h1>
      <h3>Data count : {todos.length}</h3>
      {todos.map((abc) => console.log(abc))}
      <div className="todo-container">
        {todos.map((singleDo) => (
          <SingleDo todo={singleDo} key={singleDo.id}></SingleDo>
        ))}
      </div>
    </div>
  );
};

export default Todo;

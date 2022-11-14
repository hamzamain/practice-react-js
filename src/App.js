import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Mobile from "./components/Mobile/Mobile";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <div className="App">
      <Article></Article>
      <Mobile></Mobile>
      <Todo></Todo>
      <Blogs name={"Amar first Train Jurny"} author={"Mr. Kashem"}></Blogs>
      <Blogs name={"Kashem ekta goru Chor"} author={"Mr. Abul"}></Blogs>
      <Blogs name={"Abul mittha kotha bole"} author={"Mr. Sadik"}></Blogs>
    </div>
  );
}

const headingStyle = {
  color: "purple",
  backgroundColor: "lightgray",
  padding: "20px",
  border: "2px solid black",
  borderRadius: "20px",
  width: "50%",
  margin: "0 auto",
};

const Article = () => {
  return (
    <div className="blog">
      <h2 style={headingStyle}>All style gose here</h2>
      <article
        style={{
          backgroundColor: "lightgray",
          padding: "10px",
          margin: "20px",
          borderRadius: "20px",
          border: "2px solid black",
        }}
      >
        <h3 style={{ color: "orangered", fontSize: "30px" }}>Article</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          laudantium natus recusandae vero. Voluptas eius esse ullam, recusandae
          laudantium, ducimus eum veritatis ipsum eaque corporis incidunt
          inventore maiores libero id?
        </p>
      </article>
    </div>
  );
};

export default App;

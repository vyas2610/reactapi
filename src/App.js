import logo from "./logo.svg";
import "./App.css";
import { getPosts } from "./ApiExecute";
import { useEffect, useState } from "react";
import PostCard from "./Components/PostCard";
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getPosts().then((posts) => {
      setData(posts);
      console.log(posts);
    });
  }, []);
  return (
    <div className="App">
      {data ? (
        data.map((e) => <PostCard title={e.title} body={e.body} />)
      ) : (
        <>Data Not Found</>
      )}
    </div>
  );
}

export default App;

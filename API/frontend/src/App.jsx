import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import axios from "axios";
function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
      });
  }, []);

  return (
    <>
      <div>
        <div className="card">
          <h1>Welcome to my app</h1>
          {jokes.map((joke, index) => (
            <p key={index}>{joke}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

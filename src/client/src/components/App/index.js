import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [comment, setComment] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4040/users", {
      headers:{
        'x-api-key':'test_api_key' 
      }
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return <div className="App"></div>;
}

export default App;

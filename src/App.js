import React, { useState, useEffect } from "react";
import "./App.css";
import Photo from "./Photo";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => {
        console.log(res.data.hdurl);
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, [showPhoto]);

  const handleShowPhoto = () => {
    setShowPhoto(!showPhoto);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = date.toLocaleDateString(undefined, options);
    return formattedDate;
  };

  return (
    <div className="App">
      <h1>NASA Photo of The Day</h1>
      {showPhoto && <Photo img={data.hdurl} date={formatDate(data.date)} />}
      <button onClick={handleShowPhoto}>
        {showPhoto ? "Hide Photo" : "Show Photo"}
      </button>
    </div>
  );
}

export default App;

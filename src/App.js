import React, { useState, useEffect } from "react";
import "./App.css";
import Photo from "./Photo";
import Explanation from "./Explanation";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => {
        console.log(res);
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
      <h1>{data.title}</h1>
      {showPhoto && <Photo img={data.hdurl} date={formatDate(data.date)} />}
      <Explanation explanation={data.explanation} />
      <button className="button" onClick={handleShowPhoto}>
        {showPhoto ? "Hide Photo" : "Show Photo"}
      </button>
    </div>
  );
}

export default App;

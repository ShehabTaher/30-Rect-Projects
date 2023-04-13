import React, { useState } from "react";
import Title from "../components/Title";

const EsignatureApp = () => {
    const [name, setName] = useState("Your signature")
    const [date, setdate] = useState()

    const handleNameChange = (e) =>{
        setName(e.target.value)
    }
    const handledateChange = (e) =>{
        setdate(e.target.value)
    }
  const inputstyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: "0.35em 0",
  };
  document.body.style.background = "#eee";
  return (
    <div className="container text-center">
      <Title classes={"title"} text={name} />
      <Title classes={"subtitle mb-4"} text={!date ? "Select Date" : date} />
      <p>
        Hello , my Name is shehab and this is my first project in this course
      </p>

      <footer
        className="d-flex"
        style={{ 
            justifyContent: "space-around", 
            position: "relative",
            top: "40vh" }}
      >
        <input type="date" value={date} style={inputstyle} onChange={handledateChange}/>
        <input type="text" value={name} style={inputstyle} onChange={handleNameChange} />
      </footer>
    </div>
  );
};

export default EsignatureApp;

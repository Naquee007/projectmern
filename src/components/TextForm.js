import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };
  const handleLowClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };
  const handleClear = () => {
    console.log("Clear was clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const countWords = (text) => {
    let wordsArray = text.trim().split(/\s+/); // Split by any whitespace
    return wordsArray.filter((word) => word.length !== 0).length; // Filter out empty strings and count
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied", "success");
  };



  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{ color: props.mode1 === "dark" ? "white" : "black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode1 === "dark" ? "grey" : "white"}}
          ></textarea>
          <button className="btn my-2" onClick={handleUpClick} >
            Convert to Uppercase
          </button>
          <button className="btn my-3 mx-2" onClick={handleLowClick}>
            Convert to Lowercase
          </button>
          <button className="btn my-3 mx-2" onClick={handleClear}>
            Clear
          </button>
          <button className="btn my-3 mx-2" onClick={handleCopy}>
            Copy to Clipboard
          </button>
        </div>
      </div>
      <div className="container" style={{ color: props.mode1 === "dark" ? "white" : "black"}}>
        <h1>Your text summary</h1>
        <p>
          Number of words {countWords(text)} and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read the text</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

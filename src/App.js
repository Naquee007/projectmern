import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About.js";
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [darkModeColor, setDarkModeColor] = useState("#042743");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = darkModeColor;
      showAlert("Dark Mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode is disabled", "success");
    }
  };
  const handleModeColorChange = (color) => {
    setDarkModeColor(color); // Set dark mode color dynamically
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        setModeColor={handleModeColorChange}
      />
      <Alert alert={alert} />
      <div className="container my-3">
          <TextForm heading="Enter your text to be analyzed" mode1={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;

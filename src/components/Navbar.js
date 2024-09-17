/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import "../App.css";
import { useState } from "react";

function Navbar(props) {
  const [color, setColor] = useState("#000000"); // Default to black for dark mode

  // Handler to change color based on user's selection
  const handleColorChange = (event) => {
    setColor(event.target.value); // Capture the selected color
    props.setModeColor(event.target.value); // Notify parent about the color change
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">Home</li>
              <li className="nav-item">About</li>
            </ul>
            <form className="d-flex mx-auto" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary mx-3" type="submit">
                Search
              </button>
            </form>
            <div className="d-flex align-items-center">
              <input
                type="color"
                id="colorPicker"
                value={color}
                onChange={handleColorChange}
                className="form-control form-control-color mx-3"
                title="Choose your color"
                style={{ width: "40px", height: "40px" }}
              />
            </div>

            <div className={`form-check form-switch text-${props.mode}`}>
              <input
                className={"form-check-input"}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className={`form-check-label text-${props.mode}`}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.string.isRequired, // Expecting 'light' or 'dark'
  toggleMode: PropTypes.func.isRequired,
  setModeColor: PropTypes.func.isRequired, // New prop for setting color in parent
};
export default Navbar;

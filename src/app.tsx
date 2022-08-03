import React from "react";
import './styles.scss';
const logo = require("../assets/logo_1.png");

export const App = (props: {
  title: string;
}) => {
  return (
    <>
      <div className="main-container">
        <img className="main-logo" src={logo}></img>
        <h1 className="main-title">{props.title}</h1>
      </div>
      <h2 className="main-subtitle">in {process.env.REACT_APP_ENV_TITLE} mode :)</h2>
    </>
  )
};

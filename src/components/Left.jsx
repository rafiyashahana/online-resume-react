import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const Left = () => {
  return (
    <div className="left">
      <div className="bg-img">
        <div className="bg-container"></div>
      </div>
      <div className="info">
        <h2>Hey, I'm Rafiya</h2>
        <h4>Frontend developer based in KSA</h4>
        <FontAwesomeIcon
          icon={faReact}
          className="social"
          onClick={(e) => {
            e.preventDefault();
            window.open("https://rafiyashahana.github.io/", "_blank");
          }}
        />
        <FontAwesomeIcon
          icon={faGithub}
          className="social"
          onClick={(e) => {
            e.preventDefault();
            window.open("https://github.com/rafiyashahana", "_blank");
          }}
        />
        <FontAwesomeIcon
          icon={faLinkedinIn}
          className="social"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://www.linkedin.com/in/rafiya-shahana/",
              "_blank"
            );
          }}
        />
      </div>
    </div>
  );
};

export default Left;

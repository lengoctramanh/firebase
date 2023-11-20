import Lottie from "lottie-react";
import React from "react";
import { createDefaultOptions } from "../Utils/AnimationUtils";
import { JSON } from "../assets";
const ContentAuth = ({ onChangePage }) => {
  return (
    <React.Fragment>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Let's started </h3>
            <p> </p>
            <button></button>
          </div>
          <div className="image">
            <Lottie {...createDefaultOptions(JSON.COMPUTERJSON)} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContentAuth;

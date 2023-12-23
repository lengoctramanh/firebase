import Lottie from "lottie-react";
import React from "react";
import { createDefaultOptions } from "../Utils/AnimationUtils";
import { JSON } from "../assets";
import Button from "../Components/Button/Button";
const ContentAuth = ({ onChangePage }) => {
  return (
    <React.Fragment>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Let's started </h3>
            <p>  Have you had account yet? If not, Let's sign up</p>
            <Button
              className="btn transparent"
              id="sign-up-btn"
              onClick={onChangePage}
              title="Sign Up"
            />
          </div>
          <div className="image">
            <Lottie {...createDefaultOptions(JSON.COMPUTERJSON)} />
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Are you ready to go home website?</h3>
            <p>Thanks for your visiting to my website. Best wishes for you</p>
            <Button
              className="btn transparent"
              id="sign-up-btn"
              onClick={onChangePage}
              title="Sign In"
            />
          </div>
          <div className="image">
            <Lottie {...createDefaultOptions(JSON.MARKETING)}/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContentAuth;

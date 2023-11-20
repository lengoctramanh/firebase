// REACT
import React from "react";
import { useForm } from "react-hook-form";

//IMPORT
import { useDispatch } from "react-redux";
import {
  logOut,
  login,
  loginFacebook,
  loginGoogle,
  sendPasswordResetEmail,
} from "../../Redux/Auth/authThunk";
import { createDefaultOptions } from "../../Utils/AnimationUtils";
import { JSON } from "../../assets";
import ButtonSocial from "../../Components/Button/ButtonSocial";
import { Link } from "react-router-dom";
const Login = () => {
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const password = React.useRef({});
  password.current = watch("password");

  const dispatch = useDispatch();

  const handleLogin = async (data) => {
    dispatch(login(data));
  };
  const handleLoginGoogle = () => {
    dispatch(loginGoogle());
  };
  const handleFacbookLogin = () => {
    dispatch(loginFacebook());
  };
  const handleSendPasswordResetEmail = () => {
    dispatch(sendPasswordResetEmail());
  };
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <React.Fragment>
      <form
        className="sign-in-form form-main"
        onSubmit={handleSubmit(handleLogin)}
      >
        <h2 className="title">Sign in</h2>
        <div className="loginField">
          <div className="loginGoogle">
            <ButtonSocial
              content="Sign in Google +"
              optionAnimation={createDefaultOptions(JSON.GOOGLEJSON)}
              onHandleClick={handleLoginGoogle}
            />
          </div>

          <div className="loginFacebook">
            <ButtonSocial
              content="Sign in Facebook +"
              optionAnimation={createDefaultOptions(JSON.FACEBOOKJSON)}
              onHandleClick={handleFacbookLogin}
            />
          </div>
        </div>

        <div className="inputField">
          <i className="fas fa-user" />
          <input
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
            })}
            type="email"
            id="email"
            placeholder="Email address"
            name="email"
          />
        </div>
        <span style={{ color: "red" }}>
          {errors.email?.type === "required" && "Please enter your full email!"}
          {errors.email?.type === "pattern" && "Your email is invalid!"}
        </span>

        <div className="inputField">
          <i className="fas fa-lock" />
          <input
            {...register("password", {
              required: true,
            })}
            type="password"
            id="password"
            placeholder="password"
            name="password"
          />
        </div>
        <span style={{ color: "red" }}>
          {errors.password?.type === "required" &&
            "Please enter your full password! "}
          {errors.password?.type && "Your password is invalid!"}
        </span>
        <input type="submit" name="sign-in" className="btn solid" />
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Link to="/forget">
            <a href="" style={{ color: "#4590ef" }}>
              Forget Password
            </a>
          </Link>
        </p>
      </form>
      <button onClick={handleSendPasswordResetEmail}>Reset Password</button>
      <button onClick={handleLogout}>Log out</button>
    </React.Fragment>
  );
};

export default Login;

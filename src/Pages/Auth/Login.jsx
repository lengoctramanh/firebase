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
  // const handleSendPasswordResetEmail = () => {
  //   dispatch(sendPasswordResetEmail());
  // };
  // const handleLogout = () => {
  //   dispatch(logOut());
  // };
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

        <div className="input-field">
          <i className="fas fa-user" />
          <input
            {...register("email", {
              required: "Please enter your email!",
              pattern: {
                value:/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                message:"Your email is invalid!"
              }
            })}
            type="email"
            id="email"
            placeholder="Email address"
            name="email"
          />
        </div>
        <span style={{ color: "red" }}>
          {errors.email && errors.email.message}
        </span>



        <div className="input-field">
          <i className="fas fa-lock" />
          <input
            {...register("password", {
              required: "Please enter your password!",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: "Your password is invalid!",
              },
            })}
            type="password"
            id="password"
            placeholder="Password"
            name="password"
          />
        </div>
        <span style={{ color: "red" }}>
          {errors.password && errors.password.message}
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
      {/* <button onClick={handleSendPasswordResetEmail}>Reset Password</button>
      <button onClick={handleLogout}>Log out</button> */}
    </React.Fragment>
  );
};

export default Login;

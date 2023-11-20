// REACT
import React from "react";
// LIB
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
// IMPORT
import { registerForm } from "../../Redux/Auth/authThunk";

const Register = () => {
  const {
    register,
    formState: { error },
    handleSubmit,
    watch,
  } = useForm();

  const dispatch = useDispatch();

  const password = React.useRef({});
  password.current = watch("password");

  const handleSubmitRegister = (data) => {
    dispatch(registerForm(data));
  };
  return (
    <React.Fragment>
      <form
        className="sign-up-form form-main"
        onSubmit={handleSubmit(handleSubmitRegister)}
      >
        <h2 className="title">Sign up</h2>

        <div className="input-field">
          <i className="fas fa-user" />
          <input
            {...register("displayName", { required: true, maxLength: 15 })}
            type="text"
            placeholder="Full Name"
            name="displayName"
            id="displayName"
          />
        </div>

        <span style={{ color: "red" }}>
          {error.displayName?.type === "required" && "Enter your full name!"}
          {error?.displayName?.type === "maxLength" &&
            "Your full name must not surpassed 15 characters"}
        </span>

        <div className="input-field">
          <i className="fas fa-envelope" />
          <input
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
            })}
            type="email"
            placeholder="Email address"
            name="email"
            id="email"
          />
        </div>

        <span style={{ color: "red" }}>
          {error.email?.type === "required" && "Enter your email!"}
          {error?.email?.type === "pattern" && "Your email is invalid!"}
        </span>

        <div className="input-field">
          <i className="fas fa-lock" />
          <input
            {...register("password", {
              required: true,
            })}
            type="password"
            placeholder="Password"
            name="password"
            id="password"
          />
        </div>
        <span style={{ color: "red" }}>
          {error.password?.type === "required" && "Enter your password!"}
        </span>

        <div className="input-field">
          <i className="fas fa-lock" />
          <input
            {...register("passwordConfirm", {
              required: true,
              validate: (value) => {
                return (
                  value === password.current || "The password do not match!"
                );
              },
            })}
            type="password"
            placeholder="Confirm Password"
            name="passwordConfirm"
            id="passwordConfirm"
          />
        </div>

        <span style={{ color: "red" }}>
          {error.passwordConfirm?.type === "required" &&
            "Enter your password again!"}
          {error.passwordConfirm?.type === "validate" && "Do not match!"}
        </span>
        <input type="submit" className="btn" name="signup" />
      </form>
    </React.Fragment>
  );
};

export default Register;

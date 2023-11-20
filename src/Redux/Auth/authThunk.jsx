import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  showErrorToast,
  showSuccessToast,
  showWarningToast,
} from "../../Utils/Toast";
import { auth, facebookAuthProvider, googleAuthProvider } from "../../Configs";
import { handleError } from "../../Utils/HandleError";
export const login = createAsyncThunk(
  // Defines the action types
  "auth/login",
  async ({ email, password, rejectWithValue }) => {
    try {
      // User will login with their email and password
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      // If the credential are valid
      showSuccessToast("Login successfully");
      // Return data which user entered
      return user;
    } catch (error) {
      // Shows an error message from handelError
      showErrorToast(handleError(error));
      // Log the error to the console
      console.error("Error during registation", error);
      // Retun the error with Firebase Authenication's method
      return rejectWithValue(error);
    }
  }
);

export const registerForm = createAsyncThunk(
  // Defines the action types
  "auth/register",
  async ({ email, password, displayName }, { rejectWithValue }) => {
    try {
      // User will register with their email and password
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user;
      await user.updateProfile({
        displayName,
      });
      // If the credential are valid
      showSuccessToast("Register successfully");
      // Return data which user entered
      return user;
    } catch (error) {
      // Shows an error message from handelError
      showErrorToast(handleError(error));
      // Log the error to the console
      console.error("Error during registation", error);
      // Retun the error with Firebase Authenication's method
      return rejectWithValue(error);
    }
  }
);

export const loginGoogle = createAsyncThunk(
  // Defines the action types
  "auth/login/google",
  async ({ _, rejectWithValue }) => {
    try {
      // User will login with their google
      const { user } = await auth.signInWithPopup(googleAuthProvider);
      // If the credential are valid
      showSuccessToast("Login google successfully");
      // Return data which user entered
      return user;
    } catch (error) {
      // Shows an error message from handelError
      showErrorToast(handleError(error));
      // Log the error to the console
      console.error("Error during registation", error);
      // Retun the error with Firebase Authenication's method
      return rejectWithValue(error);
    }
  }
);

export const loginFacebook = createAsyncThunk(
  // Defines the action types
  "auth/login/facebook",
  async ({ _, rejectWithValue }) => {
    try {
      // User will login with their facebook
      const { user } = await auth.signInWithPopup(facebookAuthProvider);
      // If the credential are valid
      showSuccessToast("Login google successfully");
      // Return data which user entered
      return user;
    } catch (error) {
      // Shows an error message from handelError
      showErrorToast(handleError(error));
      // Log the error to the console
      console.error("Error during registation", error);
      // Retun the error with Firebase Authenication's method
      return rejectWithValue(error);
    }
  }
);

export const sendPasswordResetEmail = createAsyncThunk(
  "auth/reset/password",
  async (
    { email = "letramanh2182005@gmail.com" } = {},
    { rejectWithValue }
  ) => {
    try {
      auth.sendPasswordResetEmail(email);
      showSuccessToast(`Your password is reset into gmail ${email}`);
    } catch (error) {
      showWarningToast(handleError(error));
      console.error("Error during registation", error);
      return rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_ = {}, { rejectWithValue }) => {
    try {
      await auth.signOut();
      showSuccessToast("Logout successfully");
    } catch (error) {
      showWarningToast(handleError(error));
      console.error("Error during registation", error);
      return rejectWithValue(error);
    }
  }
);

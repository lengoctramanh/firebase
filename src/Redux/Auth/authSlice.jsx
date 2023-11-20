// LIB
import { createSlice } from "@reduxjs/toolkit";

// IMPORT
import { logOut, login, loginFacebook, loginGoogle, registerForm } from "./authThunk";

const initialState = {
  isLoading: false,
  error: null,
  authData: [],
  resetPassword: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthData: (state) => {
      return state;
    },
  },
  extraReducers: {
    // lOGIN
    [login.pending]: (state, _) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [login.fulfilled]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        authData: action.payload,
      };
    },
    [login.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },

    // LOGIN GOGGLE
    [loginGoogle.pending]: (state, _) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [loginGoogle.fulfilled]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        authData: action.payload,
      };
    },
    [loginGoogle.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },

    // LOGIN FACEBOOK
    [loginFacebook.pending]: (state, _) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [loginFacebook.fulfilled]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        authData: action.payload,
      };
    },
    [loginFacebook.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },

    // LOGOUT
    [logOut.pending]: (state, _) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [logOut.fulfilled]: (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    },
    [logOut.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },

    // REGISTER
    [registerForm.pending]: (state, _) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [registerForm.fulfilled]: (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    },
    [registerForm.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

export const { resetAuthData } = AuthSlice.actions;
const AuthReducer = AuthSlice.reducer;
export default AuthReducer;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/newUser";
import authReducer from "../features/auth/authLogin";

export const store = configureStore({
  reducer: { signup: userReducer, login: authReducer },
});

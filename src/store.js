import { configureStore } from "@reduxjs/toolkit";
import holderReducer from "./features/newsholder/holderSlice";
import authReducer from './features/authSlice/authSlice';
import addReducer from './features/postSlice/createSlice'

export const store = configureStore({
  reducer: {
    holder: holderReducer,
    authorizer: authReducer,
  },
});

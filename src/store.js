import { configureStore } from "@reduxjs/toolkit";
import holderReducer from "./features/newsholder/holderSlice";

export const store = configureStore({
  reducer: {
    holder: holderReducer,
  },
});

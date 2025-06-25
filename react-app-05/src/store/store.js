import { configureStore } from "@reduxjs/toolkit";
import { memberSice } from "./memberSlice";



const store = configureStore({
  reducer: {
    member: memberSice.reducer,
  }
});

export default store;
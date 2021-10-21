import { configureStore } from "@reduxjs/toolkit";

import componentReducer from "./componentSlice";

export default configureStore({
  reducer: {
    component: componentReducer,
  },
});

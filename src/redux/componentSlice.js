import React from "react";
import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  component: "dashboard",
};

const componentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    setComponent(state, action) {
      state = state;
    },
    resetComponent(state, action) {
      state = state;
    },
    // setUser: (
    //   state: Draft<typeof initialState>,
    //   action: PayloadAction<typeof initialState>
    // ) => {
    //   state.id = action.payload.id;
    //   state.username = action.payload.username;
    // },
    // resetUser: (state: Draft<typeof initialState>) => {
    //   state.id = null;
    //   state.username = null;
    // },
  },
});

// Selectors
export const getComponent = (state) => state.component;

// Reducers and actions
export const { setComponent, resetComponent } = componentSlice.actions;

export default componentSlice.reducer;

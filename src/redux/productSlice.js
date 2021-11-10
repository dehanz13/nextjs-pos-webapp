import React from "react";
import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  category: "",
  description: "",
  price: "",
  quantity: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    populateData(state, action) {
      state.name = action.payload.name;
      state.category = action.payload.category;
      state.description = action.payload.description;
      state.price = action.payload.price;
      state.quantity = action.payload.quantity;
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

// Reducers and actions
export const { populateData } = productSlice.actions;

export default productSlice.reducer;

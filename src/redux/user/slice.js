import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
          address: null,
        },
      };
    },
    logoutUser: (state) => {
      return {
        ...state,
        user: null,
      };
    },
    addAddress: (state, action) => {
      if (
        action.payload.addressName === "" ||
        action.payload.addressNumber === ""
      ) {
        alert("INFORME UM ENDEREÇO CORRETO");
        return {
          ...state,
        };
      }

      return {
        ...state,
        user: {
          ...state.user,
          address: {
            addressName: action.payload.addressName,
            addressNumber: action.payload.addressNumber,
          },
        },
      };
    },
    deleteAddress: (state) => {
      return {
        ...state,
        user: {
          ...state.user,
          address: null,
        },
      };
    },
  },
});

export const { createUser, logoutUser, addAddress, deleteAddress } =
  userSlice.actions;

export default userSlice.reducer;

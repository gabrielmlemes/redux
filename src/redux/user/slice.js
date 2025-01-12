// No slice, eu tenho o estado inicial que pode ser alterado através das actions e eu posso consumi-lo em outros componentes

import { createSlice } from "@reduxjs/toolkit";

// estado inicial:
const initialState = {
  user: null,
  users: [],
  loading: false,
  userId: {}
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //  Os reducers são funções que atualizam o estado com base na ação enviada.
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

      if (state.user === null) {
        alert("Você deve estar logado para poder adicionar um endereço!");
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
    fetchUsers: (state) => {
      state.loading = true;
    },
    fetchUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    fetchUsersFailure: (state, action) => {
      console.log("error: ", action.payload);
      state.loading = false;
    },
    fetchUserById: (state, action)=> {
      console.log("id do usuário: " + action.payload);
    },
    fetchUserByIdSuccess: (state, action) => {
      state.userId = action.payload
    },
  },
});

export const {
  createUser,
  logoutUser,
  addAddress,
  deleteAddress,
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchUserById,
  fetchUserByIdSuccess
} = userSlice.actions;

export default userSlice.reducer;

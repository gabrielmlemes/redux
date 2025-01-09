import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      console.log(state);

      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
          address: {
            location: 'rua x',
            number: 84
          }
        }
      }
    },
  },
});

export const { createUser } = userSlice.actions;

export default userSlice.reducer;

import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    setUsers(state, action) {
      return {
        ...state,
        users: action.payload,
      };
    },
  },
});

const selectUsers = (state) => state.users.users;
export const usersSelector = createSelector(selectUsers, (users) => users);

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;

import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const usersSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload,
      };
    },
  },
});

const selectCurrentUser = (state) => state.users.currentUser;
export const currentUserSelector = createSelector(
  selectCurrentUser,
  (currentUser) => currentUser
);

export const { setCurrentUser } = usersSlice.actions;

export default usersSlice.reducer;

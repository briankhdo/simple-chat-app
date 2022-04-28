import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  usersLoading: false,
  currentUser: null,
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
    setCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload,
      };
    },
    usersLoading(state, _action) {
      return {
        ...state,
        usersLoading: true,
      };
    },
  },
});

const selectCurrentUser = (state) => state.users.currentUser;
export const currentUserSelector = createSelector(
  selectCurrentUser,
  (currentUser) => currentUser
);

const selectUsers = (state) => state.users.currentUser;
export const usersSelector = createSelector(selectUsers, (users) => users);

const selectUserLoading = (state) => state.users.usersLoading;
export const usersLoadingSelector = createSelector(
  selectUserLoading,
  (userLoading) => userLoading
);

export const { setUsers, setCurrentUser, usersLoading } = usersSlice.actions;

export default usersSlice.reducer;

import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  rooms: [],
  currentRoom: null,
};

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    setCurrentRoom(state, action) {
      return {
        ...state,
        currentRoom: action.payload,
      };
    },
  },
});

const selectCurrentRoom = (state) => state.users.currentRoom;
export const currentRoomSelector = createSelector(
  selectCurrentRoom,
  (currentRoom) => currentRoom
);

const selectUsers = (state) => state.users.currentUser;
export const usersSelector = createSelector(selectUsers, (users) => users);

const selectUserLoading = (state) => state.users.usersLoading;
export const usersLoadingSelector = createSelector(
  selectUserLoading,
  (userLoading) => userLoading
);

export const { setCurrentRoom } = roomsSlice.actions;

export default roomsSlice.reducer;

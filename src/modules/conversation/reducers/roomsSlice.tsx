import { createSlice, createSelector, current } from "@reduxjs/toolkit";

const initialState = {
  rooms: [],
  currentRoom: null,
};

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    setRooms(state, action) {
      return {
        ...state,
        rooms: action.payload,
      };
    },
    setCurrentRoom(state, action) {
      return {
        ...state,
        currentRoom: action.payload,
      };
    },
  },
});

const selectRooms = (state) => state.rooms.rooms;
export const roomsSelector = createSelector(selectRooms, (rooms) => rooms);

const selectCurrentRoom = (state) => state.rooms.currentRoom;
export const currentRoomSelector = createSelector(
  selectCurrentRoom,
  (currentRoom) => currentRoom
);

export const { setRooms, setCurrentRoom } = roomsSlice.actions;

export default roomsSlice.reducer;

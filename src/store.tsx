import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./modules/accountSelector/reducers/usersSlice";
import roomsReducer from "./modules/conversation/reducers/roomsSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    rooms: roomsReducer,
  },
});

export default store;

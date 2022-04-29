import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
};

const roomsSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    appendMessage(state, action) {
      let messages = state.messages;
      messages.push(action.payload);
      return {
        ...state,
        messages: messages,
      };
    },
  },
});

const selectMessages = (state) => state.messages.messages;
export const messagesSelector = createSelector(
  selectMessages,
  (messages) => messages
);

export const { appendMessage } = roomsSlice.actions;

export default roomsSlice.reducer;

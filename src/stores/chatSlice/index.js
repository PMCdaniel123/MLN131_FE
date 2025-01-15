import { createSlice } from "@reduxjs/toolkit";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { v4 as uuidv4 } from "uuid";

const initData = {
  data: [],
};

const ChatSlice = createSlice({
  name: "chat",
  initialState: initData,
  reducers: {
    addChat: (state) => {
      state.data.push({
        id: "abc",
        title: "Chat",
        messages: [],
      });
    },
    addMessage: (state, action) => {
      const { idChat, userMess, botMess } = action.payload;
      const chat = state.data.find((chat) => chat.id === idChat);

      if (chat) {
        const messageFormat = marked.parse(botMess);
        const safeChat = DOMPurify.sanitize(messageFormat);
        const newMessage = [
          ...chat.messages,
          { id: uuidv4(), text: userMess, isBot: false },
          { id: uuidv4(), text: safeChat, isBot: true },
        ];

        chat.messages = newMessage;
      }
    },
    removeChat: (state, action) => {
      state.data = state.data.filter((chat) => chat.id !== action.payload);
    },
    setNameChat: (state, action) => {
      const { newTitle, chatId } = action.payload;
      const chat = state.data.find((chat) => chat.id === chatId);
      if (chat) {
        chat.title = newTitle;
      }
    },
  },
});

export const { addChat, removeChat, addMessage, setNameChat } =
  ChatSlice.actions;

export default ChatSlice.reducer;
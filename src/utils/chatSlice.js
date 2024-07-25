import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {

            // If messages goes beyond 200, delete the messages from the last
            // if (state.messages.length > 5) {
            //     state.messages.pop();
                // OR
                state.messages.splice(LIVE_CHAT_COUNT, 1);
            // }

            // Will add the object in the end
            // state.message.push(action.payload);
            // Will add the object from the top
            state.messages.unshift(action.payload);
        },
    },
})

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
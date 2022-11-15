import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "./slices/videoSlice";
import sidebarReducer from "./slices/sidebarSlice";
import channelReducer from "./slices/videoChannelSlice";

export const store = configureStore({
    reducer: {
        videos: videosReducer,
        sidebar: sidebarReducer,
        channel: channelReducer
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
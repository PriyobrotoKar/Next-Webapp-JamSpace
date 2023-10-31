import { configureStore } from "@reduxjs/toolkit";
import currenlyPlayingReducer from "@/reducer/currentlyPlaying/currenlyPlayingSlice";
import userQueueReducer from "@/reducer/userQueue/userQueueSlice";

export const store = configureStore({
  reducer: {
    currPlayingSong: currenlyPlayingReducer,
    userQueue: userQueueReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

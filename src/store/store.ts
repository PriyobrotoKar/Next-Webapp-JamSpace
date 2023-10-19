import { configureStore } from "@reduxjs/toolkit";
import currenlyPlayingReducer from "@/reducer/currentlyPlaying/currenlyPlayingSlice";

export const store = configureStore({
  reducer: {
    currPlayingSong: currenlyPlayingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

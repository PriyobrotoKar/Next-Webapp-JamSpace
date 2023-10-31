import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CurrentSong {
  song: any;
  isPlaying: boolean;
}

const initialState: CurrentSong = {
  song: null,
  isPlaying: false,
};

export const currPlayingSlice = createSlice({
  name: "currPlaying",
  initialState,
  reducers: {
    updateCurrSong: (state, action: PayloadAction<any>) => {
      let context = null;
      if (action.payload.item) {
        const progress_ms = action.payload.progress_ms;
        state.isPlaying = action.payload.is_playing;

        if (action.payload.context) {
          context = {
            type: action.payload.context.type,
            id: action.payload.context.uri.split(":")[2],
          };
        }

        state.song = { progress_ms, context, ...action.payload.item };
      } else if (action.payload.track) {
        state.song = {
          progress_ms: 0,
          context,
          ...action.payload.track,
        };
      }
    },
    updatePlayingState: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { updateCurrSong, updatePlayingState } = currPlayingSlice.actions;

export default currPlayingSlice.reducer;

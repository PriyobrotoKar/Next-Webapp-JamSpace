import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface userQueue {
  queue: any[];
}

const initialState: userQueue = {
  queue: [],
};

export const userQueueSlice = createSlice({
  name: "userQueue",
  initialState,
  reducers: {
    updateUserQueue: (state, action: PayloadAction<any[]>) => {
      state.queue = action.payload;
    },
  },
});

export const { updateUserQueue } = userQueueSlice.actions;

export default userQueueSlice.reducer;

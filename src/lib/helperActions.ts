import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { Session } from "next-auth";
import { putDataFromApi } from "@/hooks/useFetch";
import {
  updateCurrSong,
  updatePlayingState,
} from "@/reducer/currentlyPlaying/currenlyPlayingSlice";
import { updateUserQueue } from "@/reducer/userQueue/userQueueSlice";

export const playSong = async (
  uri: string,
  session: Session | null,
  currSong: any,
  queueItem: any,
  dispatch: Dispatch<AnyAction>,
) => {
  try {
    await putDataFromApi(
      "me/player/play",
      {
        uris: [uri],
      },
      session?.accessToken,
    );
    dispatch(updateCurrSong(currSong));
    dispatch(updateUserQueue([queueItem]));
    dispatch(updatePlayingState(true));
  } catch (error: any) {
    console.error(error.message);
  }
};

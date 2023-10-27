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
    throw new Error("Something went wrong!");
  }
};

export const playSongs = async (
  context: string,
  firstSong: any,
  queue: any[],
  session: Session | null,
  dispatch: Dispatch<AnyAction>,
) => {
  try {
    await putDataFromApi(
      "me/player/play",
      {
        context_uri: context,
        position_ms: 0,
      },
      session?.accessToken,
    );
    dispatch(updateCurrSong(firstSong));
    dispatch(updateUserQueue(queue));
    dispatch(updatePlayingState(true));
  } catch (error: any) {
    throw new Error("Something went wrong!");
  }
};

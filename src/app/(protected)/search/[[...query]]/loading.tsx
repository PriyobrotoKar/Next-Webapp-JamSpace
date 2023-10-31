import {
  LoadingSearchSongs,
  LoadingSearchTopResult,
} from "@/components/LoadingUI";

const loading = () => {
  return (
    <div className="flex flex-col gap-10 px-6 md:flex-row">
      <LoadingSearchTopResult />
      <LoadingSearchSongs />
    </div>
  );
};

export default loading;

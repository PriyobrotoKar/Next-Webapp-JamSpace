import React from "react";

const AboutErrorUI = () => {
  return (
    <div className="w-full space-y-4 rounded-2xl bg-orange-950/20 p-4">
      <div className="h-52 rounded-xl bg-orange-950/20"></div>
      <div className="h-6 rounded-xl bg-orange-950/20"></div>
      <div className="h-4 w-3/4 rounded-xl bg-orange-950/20"></div>
      <div className="flex gap-4">
        <div className="h-8 w-20 rounded-full bg-orange-950/20"></div>
        <div className="h-8 w-20 rounded-full bg-orange-950/20"></div>
        <div className="h-8 w-20 rounded-full bg-orange-950/20"></div>
      </div>
    </div>
  );
};

const SideQueueErrorUI = () => {
  return (
    <div className="flex  gap-4">
      <div className="rounded-xl bg-orange-950/20 md:h-12 md:w-12 xl:h-14 xl:w-14"></div>
      <div className="flex-1 space-y-2 md:hidden xl:block">
        <div className="h-5 rounded-xl bg-orange-950/20"></div>
        <div className="h-4 w-3/4 rounded-xl bg-orange-950/20"></div>
      </div>
    </div>
  );
};

export { AboutErrorUI, SideQueueErrorUI };

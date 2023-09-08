import React from "react";

const AboutErrorUI = () => {
  return (
    <div className="w-full bg-orange-950/20 p-4 rounded-2xl space-y-4">
      <div className="h-52 bg-orange-950/20 rounded-xl"></div>
      <div className="h-6 bg-orange-950/20 rounded-xl"></div>
      <div className="h-4 w-3/4 bg-orange-950/20 rounded-xl"></div>
      <div className="flex gap-4">
        <div className="w-20 h-8 bg-orange-950/20 rounded-full"></div>
        <div className="w-20 h-8 bg-orange-950/20 rounded-full"></div>
        <div className="w-20 h-8 bg-orange-950/20 rounded-full"></div>
      </div>
    </div>
  );
};

export { AboutErrorUI };

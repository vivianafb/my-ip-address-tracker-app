import React from "react";

export const CardInformation = () => {
  return (
    <div className="flex flex-row gap-10 bg-white text-black p-10 rounded-md absolute top-56 z-[999]">
      <div className="w-40 border-r-2 pr-5">
        <p className="text-sm text-gray-500 pb-2">IP ADDRESS</p>
        <h3 className="text-xl font-bold">192.212.174.101</h3>
      </div>

      <div className="w-40 border-r-2 pr-5">
        <p className="text-sm text-gray-500 pb-2">LOCATION</p>
        <h3 className="text-xl font-bold">Brooklyn, NY 10001</h3>
      </div>
      <div className="w-40 border-r-2 pr-5">
        <p className="text-sm text-gray-500 pb-2">TIMEZONE</p>
        <h3 className="text-xl font-bold">UTC -05:00</h3>
      </div>
      <div className="w-40">
        <p className="text-sm text-gray-500 pb-2">ISP</p>
        <h3 className="text-xl font-bold">SpaceX Starlink</h3>
      </div>
    </div>
  );
};

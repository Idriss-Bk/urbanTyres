import React from "react";

const Newsletter = () => {
  return (
    <form action="" className="mb-1 w-full">
      <div className="flex justify-start items-center gap-1.5 w-full">
        <input
            type="email"
            className="py-1.5 px-2 outline-none text-sm bg-white border-[1px] border-orange-200 text-black font-semibold"
            placeholder="Enter your email"
        />
        <button className="py-1.5 px-2 font-semibold bg-orange-500 transition-all hover:bg-orange-600 text-white rounded text-sm" type="button">Get Updates!</button>
      </div>
    </form>
  );
};

export default Newsletter;

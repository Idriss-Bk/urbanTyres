"use client";
import React from "react";
import { IoMdSearch } from "react-icons/io";

const Search = () => {
  const [showSearch, setShowSearch] = React.useState(false);

  const handleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleSearch}
        className="flex items-center"
      >
        <IoMdSearch className="text-slate-500 size-6" />
      </button>

      {showSearch && (
        <div className="absolute top-0 right-0 transform translate-y-full mt-3.5 w-full lg:w-auto">
          <form action="" className="flex justify-end">
            <input
              type="text"
              placeholder="Search..."
              className="w-full max-w-lg p-2 border focus:outline-none bg-white shadow text-sm text-black font-semibold"
            />
            <button type="submit" className="bg-orange-500 px-3">
              <IoMdSearch className="text-white size-6" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Search;

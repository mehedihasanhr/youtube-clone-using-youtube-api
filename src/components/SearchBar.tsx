import * as React from "react";
import { useOuterClick } from "../hooks/useOuterClick";
import SearchSuggestions from "./SearchSuggestions";

const SearchBar = () => {
  const [isActive, setIsActive] = React.useState(false);
  const [serach, setSearch] = React.useState("");

  const ref = React.useRef<HTMLDivElement>(null);
  useOuterClick(ref, () => setIsActive(false));

  return (
    <div className="flex items-center w-[600px]">
      <div className="flex items-center w-full rounded-sm">
        <div
          ref={ref}
          className={`flex items-center w-full relative ${
            isActive ? "border border-black shadow-inner" : "border-none"
          }`}
        >
          <div
            className={`py-1.5 px-2 hover:cursor-pointer ${
              isActive ? "visiable" : "invisible"
            }`}
          >
            <i className="bi bi-search" aria-hidden="true" />
          </div>
          <div className="w-full">
            <input
              type="text"
              onFocus={() => setIsActive(true)}
              placeholder="Search"
              value={serach}
              onChange={(e) => setSearch(e.target.value)}
              className={`w-full px-2 focus:border-none focus:outline-0 ${
                isActive ? "py-1" : "border py-1.5"
              }`}
            />
            {serach.length > 0 && (
              <div
                className="absolute top-1/2 right-2 -translate-y-1/2 hover:cursor-pointer"
                onClick={() => setSearch("")}
              >
                <i className="bi bi-x text-2xl" />
              </div>
            )}
          </div>
          {isActive && (
            <div
              className="absolute left-0 top-full w-full bg-white mt-0.5 py-3 z-10 shadow-sm"
              style={{ outline: "1px solid rgb(0 0 0 / 10%)" }}
            >
              <SearchSuggestions onSelect={setSearch} />
            </div>
          )}
        </div>
        <div className="relative group w-16 py-1.5 text-center bg-zinc-100 border border-l-0 hover:bg-zinc-200">
          <i className="bi bi-search" />
          <span className="absolute top-full left-7 -translate-x-1/2 mt-5 text-sm whitespace-nowrap rounded-sm py-1.5 px-2 bg-gray-500 text-white invisible group-hover:visible">
            Search
          </span>
        </div>
      </div>
      <div className="relative group ml-3 w-12 h-10 rounded-full flex items-center justify-center bg-zinc-50">
        <i className="bi bi-mic-fill text-xl" />
        <span className="absolute top-full left-7 -translate-x-1/2 mt-5 text-sm whitespace-nowrap rounded-sm py-1.5 px-2 bg-gray-500 text-white invisible group-hover:visible">
          Search with your voice
        </span>
      </div>
    </div>
  );
};

export default SearchBar;

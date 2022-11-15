// item

import React from "react";
import { Link } from "react-router-dom";

type propsType = {
  title: string;
  link: string;
  onRemove: () => void;
  onSelect: (value: string) => void;
};

const Item = ({ title, link = "/", onRemove, onSelect }: propsType) => {
  const handleSelectedItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onSelect(title);
  };

  return (
    <div className="flex items-center justify-between py-1 px-2 hover:bg-zinc-100 font-semibold hover:cursor-pointer">
      <Link
        to={link}
        className="flex items-center w-full"
        onClick={handleSelectedItem}
      >
        <i className="bi bi-arrow-counterclockwise text-lg" />
        <div className="px-2 mr-auto">{title}</div>
      </Link>
      <div className="mr-2">
        <Link
          to="/"
          onClick={onRemove}
          className="text-sm font-normal text-blue-700 hover:cursor-pointer hover:underline"
        >
          remove
        </Link>
      </div>
    </div>
  );
};

// suggestions
const SearchSuggestions = ({ onSelect }: any) => {
  return (
    <div className="">
      <Item
        title="king of darkness vs grand priest"
        link="/"
        onSelect={onSelect}
        onRemove={() => {}}
      />
    </div>
  );
};

export default SearchSuggestions;

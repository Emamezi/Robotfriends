import React from "react";
import "tachyons";

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        className="pa3 b-light-green bg-light-green ma2"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;

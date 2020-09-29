import React from "react";

const FilterLink = ({ filter, boundVisibilityFilter, active }) => {
  return (
    <div>
      <button onClick={() => boundVisibilityFilter()}>{filter}</button>
    </div>
  );
};

export default FilterLink;

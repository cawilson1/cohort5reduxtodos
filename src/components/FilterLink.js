import React from "react";

const FilterLink = ({ filter, setVisibilityFilter }) => {
  return (
    <div>
      <button onClick={() => setVisibilityFilter(filter)}>{filter}</button>
    </div>
  );
};

export default FilterLink;

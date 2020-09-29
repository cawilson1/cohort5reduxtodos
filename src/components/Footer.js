import React from "react";
import FilterLink from "./FilterLink";

const Footer = ({ setVisibilityFilter }) => {
  return (
    <div>
      Show:
      <FilterLink setVisibilityFilter={setVisibilityFilter} filter="SHOW_ALL" />
      <FilterLink
        setVisibilityFilter={setVisibilityFilter}
        filter="SHOW_COMPLETED"
      />
      <FilterLink
        setVisibilityFilter={setVisibilityFilter}
        filter="SHOW_ACTIVE"
      />
    </div>
  );
};

export default Footer;

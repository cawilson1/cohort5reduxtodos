import React from "react";
import FilterLinkContainer from "../containers/FilterLinkContainer";

const Footer = () => {
  return (
    <div>
      Show:
      <FilterLinkContainer filter="SHOW_ALL" />
      <FilterLinkContainer filter="SHOW_COMPLETED" />
      <FilterLinkContainer filter="SHOW_ACTIVE" />
    </div>
  );
};

export default Footer;

import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const ActiveLink = ({ children, path, activeOnlyWhenExact }) => {
  const match = useRouteMatch({
    path,
    exact: activeOnlyWhenExact,
  });

  return (
    <Link to={path} className={`list-side-bar ${match ? "active-nav" : ""}`}>
      {children}
    </Link>
  );
};

export default ActiveLink;

import React from "react";

const Container = ({
  children,
  className = "",
  as: Component = "div",
}) => {
  return (
    <Component className={`container-premium ${className}`}>
      {children}
    </Component>
  );
};

export default Container;
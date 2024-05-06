import React from "react";

const sizes = {
  xs: "text-sm font-light",
  lg: "text-2xl font-normal",
  s: "text-base font-light",
  md: "text-lg font-light",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-600 font-publicsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };

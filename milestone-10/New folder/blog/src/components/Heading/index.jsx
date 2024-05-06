import React from "react";

const sizes = {
  "3xl": "text-[50px] font-black",
  "2xl": "text-5xl font-bold",
  xl: "text-4xl font-bold",
  s: "text-base font-bold",
  md: "text-lg font-bold",
  xs: "text-sm font-bold",
  lg: "text-2xl font-bold",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-600_01 font-publicsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };

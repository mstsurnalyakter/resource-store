import React from "react";

import { Button, Input, Typography } from "@material-tailwind/react";

const Banner = ({ setValue, handleSearch, value }) => {
  const clearInput = () => {
    setValue("");
  };
  return (
    <div className="h-[450px] relative flex justify-center items-center flex-col">
      <div className="absolute inset-0 bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat opacity-30"></div>

      <Typography className="mb-4" variant="h2">
        I Grow By Helping People In Need
      </Typography>
      <div className="relative flex w-full max-w-[24rem]">
        <Input
          type="text"
          label="Search.."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          onClick={() => {
            handleSearch();
            clearInput();
          }}
          size="sm"
          color="red"
          className="!absolute right-1 top-1 rounded"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Banner;

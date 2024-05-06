import React from "react";
import { Img, Text } from "./..";

export default function BloggerDetailsPagination({
  grouptwentyfive = "1",
  grouptwentyfour = "2",
  next = "Next",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start h-[40px] w-[40px]">
        <Text
          as="p"
          className="flex justify-center items-center h-[40px] w-[40px] !text-white-A700 !font-normal bg-indigo-900 text-center rounded-[50%]"
        >
          {grouptwentyfive}
        </Text>
      </div>
      <div className="flex flex-col items-center justify-start h-[40px] w-[40px] ml-5">
        <Text
          as="p"
          className="flex justify-center items-center h-[40px] w-[40px] !text-indigo-900 !font-normal bg-white-A700 text-center rounded-[50%]"
        >
          {grouptwentyfour}
        </Text>
      </div>
      <div className="flex flex-row justify-start items-center w-[34%] ml-10 gap-[15px] sm:ml-5">
        <Text as="p" className="!text-indigo-900">
          {next}
        </Text>
        <Img src="images/img_arrow_pointing_to_right.svg" alt="arrowpointing" className="h-[16px] w-[16px]" />
      </div>
    </div>
  );
}

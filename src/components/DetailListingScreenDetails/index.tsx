import { Text, Heading } from "./..";
import React from "react";

interface Props {
  className?: string;
  k1?: React.ReactNode;
  p46576mtwo?: React.ReactNode;
  fifty?: React.ReactNode;
  fortythousandon?: React.ReactNode;
  fiftyone?: React.ReactNode;
  p40100one?: React.ReactNode;
}

export default function DetailListingScreenDetails({
  k1 = "K1",
  p46576mtwo = "(46.576 m2)",
  fifty = "50%",
  fortythousandon = "40-100%",
  fiftyone = "50%",
  p40100one = "40-100%",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col justify-center items-center self-stretch px-[1.13rem] border-blue_gray-50_02 border border-solid flex-1`}
    >
      <div className="flex flex-col items-center gap-[0.38rem] sm:gap-[0.38rem]">
        <Heading size="headings" as="h6" className="text-[1.00rem] font-semibold sm:text-[0.81rem]">
          {k1}
        </Heading>
        <Text as="p" className="text-[1.00rem] font-normal sm:text-[0.81rem]">
          {p46576mtwo}
        </Text>
      </div>
      <div className="ml-[0.50rem] flex flex-1 items-center justify-between gap-[1.25rem] sm:self-stretch">
        <div className="ml-[0.63rem] h-[5.00rem] w-[0.06rem] bg-blue_gray-50_02" />
        <Text as="p" className="text-[1.00rem] font-normal sm:text-[0.81rem]">
          {fifty}
        </Text>
        <div className="h-[5.00rem] w-[0.06rem] bg-blue_gray-50_02" />
      </div>
      <Text as="p" className="ml-[1.13rem] text-[1.00rem] font-normal sm:text-[0.81rem]">
        {fortythousandon}
      </Text>
      <div className="ml-[1.13rem] h-[5.00rem] w-[0.06rem] bg-blue_gray-50_02" />
      <Text as="p" className="ml-[2.13rem] text-[1.00rem] font-normal sm:text-[0.81rem]">
        {fiftyone}
      </Text>
      <div className="flex flex-1 items-center justify-end gap-[1.13rem] sm:self-stretch">
        <div className="h-[5.00rem] w-[0.06rem] bg-blue_gray-50_02" />
        <Text as="p" className="text-[1.00rem] font-normal sm:text-[0.81rem]">
          {p40100one}
        </Text>
      </div>
    </div>
  );
}

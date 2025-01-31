import { Heading, Text, Img } from "./..";
import React from "react";

interface Props {
  name: string;
  value: string
  icon?: string;
  alt?: string;
}

export default function PropertySpesification({
  name,
  value,
  icon,
  alt,
}: Props) {
  return (
    <div className="flex justify-center md:w-full rounded-tl-lg rounded-tr-lg border border-solid border-blue_gray-50_02 px-[1.00rem] py-[1.13rem]">
      <div className="flex flex-1 gap-[0.50rem]">
        {icon && (
          <Img src={icon} width={20} height={20} alt={alt} className="h-[1.25rem]" />
        )}
        <Text as="p" className="text-[1.00rem] font-normal tracking-[0.00rem]">
          {name}
        </Text>
      </div>
      <Heading size="headings" as="h6" className="text-[1.00rem] font-semibold tracking-[0.00rem]">
        {value}
      </Heading>
    </div>
  );
}

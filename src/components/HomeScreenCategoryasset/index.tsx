import { Text, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  rumahDinasOne?: string;
  rumahdinas?: React.ReactNode;
}

export default function HomeScreenCategoryasset({
  rumahDinasOne = "img_home.svg",
  rumahdinas = "Rumah Dinas",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-start w-full px-[1.13rem] py-[1.88rem] sm:py-[1.25rem] border-teal-50 border border-solid bg-gray-50_01 rounded-lg`}
    >
      <div className="relative mb-[0.25rem] h-[2.75rem] w-[26%]">
        <div className="absolute left-[0.00rem] top-[0.00rem] m-auto h-[2.00rem] w-[2.00rem] rounded bg-gray-100" />
        <Img
          src={rumahDinasOne}
          width={40}
          height={40}
          alt="Rumah Dinas"
          className="absolute bottom-[-0.06rem] right-[-0.06rem] m-auto h-[2.50rem]"
        />
      </div>
      <Text as="p" className="self-center !font-manrope text-[1.00rem] font-medium tracking-[0.00rem] !text-indigo-900">
        {rumahdinas}
      </Text>
    </div>
  );
}

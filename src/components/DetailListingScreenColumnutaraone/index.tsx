import { Text, Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  utaratwo?: React.ReactNode;
  perniagaan?: React.ReactNode;
}

export default function DetailListingScreenColumnutaraone({
  utaratwo = "Utara",
  perniagaan = "Perniagaan, Pemukiman Warga, Taman Kota",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} border-blue_gray-50_02 p-4`}>
      <div className="flex self-stretch">
        <Img src="img_iconoir_maps_arrow.svg" width={20} height={20} alt="Utara" className="h-[1.25rem]" />
        <Heading size="headings" as="h6" className="text-[1.00rem] font-semibold">
          {utaratwo}
        </Heading>
      </div>
      <Text as="p" className="w-full text-[1.00rem] font-normal leading-[1.25rem] pt-3 !text-text-disable">
        {perniagaan}
      </Text>
    </div>
  );
}

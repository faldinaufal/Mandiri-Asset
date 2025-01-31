import { Img, Text, Heading } from "./..";
import React from "react";

interface Props {
  className?: string;
  berpengalaman?: React.ReactNode;
  description?: React.ReactNode;
  tentangkami?: React.ReactNode;
}

export default function HomeScreenContent({
  berpengalaman = "Berpengalaman dan Terpercaya di Industri Properti",
  description = "Sebagai pelaku di industri properti, kami telah membantu ribuan pelanggan menemukan properti impian yang sesuai dengan kebutuhan mereka.",
  tentangkami = "Tentang Kami",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-[50%] md:w-full gap-[1.38rem]`}>
      <Img
        src="img_image.png"
        width={598}
        height={384}
        alt="Image"
        className="h-[24.00rem] w-full rounded-lg object-cover sm:h-auto"
      />
      <div className="flex flex-col gap-[1.38rem] self-stretch sm:gap-[1.38rem]">
        <div className="flex flex-col gap-[0.88rem] sm:gap-[0.88rem]">
          <Heading
            size="title_large"
            as="p"
            className="!font-manrope text-[2.00rem] font-medium leading-[2.69rem] tracking-[0.00rem] !text-indigo-900 sm:text-[1.69rem]"
          >
            {berpengalaman}
          </Heading>
          <Text
            size="textmd"
            as="p"
            className="!font-notosans text-[1.13rem] font-normal leading-[140%] !text-text-disable sm:text-[0.94rem]"
          >
            {description}
          </Text>
        </div>
        <div className="flex items-center gap-[0.56rem] py-[0.25rem]">
          <Text size="textmd" as="p" className="self-end text-[1.13rem] font-medium !text-blue-700 sm:text-[0.94rem]">
            {tentangkami}
          </Text>
          <Img src="img_arrow_left.svg" width={20} height={20} alt="Tentang Kami" className="h-[1.25rem]" />
        </div>
      </div>
    </div>
  );
}

import { Text, Img, Heading } from "./..";
import React from "react";

interface Props {
  className?: string;
  lb?: React.ReactNode;
  p120mtwo?: React.ReactNode;
  lt?: React.ReactNode;
  p155mtwo?: React.ReactNode;
  lantaitwentytwo?: React.ReactNode;
  kuningan?: React.ReactNode;
  threehundred?: React.ReactNode;
  three?: React.ReactNode;
  one?: React.ReactNode;
}

export default function DetailListingScreenCardproperty({
  lb = "LB",
  p120mtwo,
  lt = "LT",
  p155mtwo,
  lantaitwentytwo = "Lantai 22, Entire floor, Menara Mandiri, SCBD, Mega Kuningan",
  kuningan = "Jakarta Barat",
  threehundred = "300",
  three = "3",
  one = "1",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-[24%] md:w-full gap-[0.75rem]`}>
      <div className="flex h-[11.00rem] items-end justify-between gap-[1.25rem] self-stretch rounded-lg bg-[url(/images/img_frame_427320476.png)] bg-cover bg-no-repeat p-[0.50rem]">
        <div className="mt-[8.38rem] flex flex-wrap gap-[0.25rem] rounded bg-white-a700">
          <Heading as="p" className="text-[0.88rem] font-semibold tracking-[0.00rem]">
            {lb}
          </Heading>
          <Heading as="p" className="text-[0.88rem] font-normal tracking-[0.00rem]">
            <span>lbl_120m</span>
            <span>lbl_2</span>
          </Heading>
        </div>
        <div className="flex flex-wrap gap-[0.25rem] rounded bg-white-a700">
          <Heading as="p" className="text-[0.88rem] font-semibold tracking-[0.00rem]">
            {lt}
          </Heading>
          <Heading as="p" className="text-[0.88rem] font-normal tracking-[0.00rem]">
            <span>lbl_155m</span>
            <span>lbl_2</span>
          </Heading>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[0.75rem] self-stretch">
        <Text as="p" className="w-full !font-manrope text-[1.00rem] font-normal leading-[150%] tracking-[0.00rem]">
          {lantaitwentytwo}
        </Text>
        <Text
          size="textxs"
          as="p"
          className="!font-manrope text-[0.88rem] font-normal tracking-[0.00rem] !text-text-disable"
        >
          {kuningan}
        </Text>
        <div className="mb-[0.38rem] flex gap-[0.25rem] self-stretch">
          <div className="flex gap-[0.63rem]">
            <Img src="img_fi_747376.svg" width={20} height={20} alt="Image" className="h-[1.25rem]" />
            <Text as="p" className="text-[1.00rem] font-normal">
              {threehundred}
            </Text>
          </div>
          <div className="flex w-[22%] justify-center gap-[0.50rem]">
            <div className="h-[1.25rem] w-[0.13rem] bg-blue_gray-50_02" />
            <div className="flex flex-1 justify-center gap-[0.63rem]">
              <Img src="img_fi_807498.svg" width={20} height={20} alt="Image" className="h-[1.25rem]" />
              <Text as="p" className="text-[1.00rem] font-normal">
                {three}
              </Text>
            </div>
            <div className="h-[1.25rem] w-[0.13rem] bg-blue_gray-50_02" />
          </div>
          <div className="flex flex-1 gap-[0.63rem]">
            <Img src="img_fi_15611050.svg" width={20} height={20} alt="Image" className="h-[1.25rem]" />
            <Text as="p" className="text-[1.00rem] font-normal">
              {one}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

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
  lbOne?: React.ReactNode;
  p120mtwoone?: React.ReactNode;
  ltOne?: React.ReactNode;
  p155mtwoone?: React.ReactNode;
  lantaitwentytwo1?: React.ReactNode;
  kuninganOne?: React.ReactNode;
  threeOne?: React.ReactNode;
  oneOne?: React.ReactNode;
  ltTwo?: React.ReactNode;
  p155mtwotwo?: React.ReactNode;
  lantaitwentytwo2?: React.ReactNode;
  kuninganTwo?: React.ReactNode;
  lbTwo?: React.ReactNode;
  p120mtwotwo?: React.ReactNode;
  ltThree?: React.ReactNode;
  p155mtwothree?: React.ReactNode;
  lantaitwentytwo3?: React.ReactNode;
  kuninganThree?: React.ReactNode;
  threeTwo?: React.ReactNode;
  oneTwo?: React.ReactNode;
  semua?: React.ReactNode;
  az?: React.ReactNode;
  za?: React.ReactNode;
  rekomendasi?: React.ReactNode;
  terluas?: React.ReactNode;
}

export default function CategoryScreenDefaultFilterStacklb({
  lb = "LB",
  p120mtwo,
  lt = "LT",
  p155mtwo,
  lantaitwentytwo = "Lantai 22, Entire floor, Menara Mandiri, SCBD, Mega Kuningan",
  kuningan = "Jakarta Barat",
  threehundred = "300",
  three = "3",
  one = "1",
  lbOne = "LB",
  p120mtwoone,
  ltOne = "LT",
  p155mtwoone,
  lantaitwentytwo1 = "Rumah Dinas Jakarta Selatan, Jln. Abdi Kusuma Bahkti, G20 No. 68, ",
  kuninganOne = "Jakarta Selatan",
  threeOne = "3",
  oneOne = "1",
  ltTwo = "LT",
  p155mtwotwo,
  lantaitwentytwo2 = "Tanah Kavling 350m2 , Jakarta Selatan, PPJB siap balik nama",
  kuninganTwo = "Jakarta Selatan",
  lbTwo = "LB",
  p120mtwotwo,
  ltThree = "LT",
  p155mtwothree,
  lantaitwentytwo3 = "Rumah Tinggal, LT100m2, dekat Gandaria City, Jakarta Selatan",
  kuninganThree = "Jakarta Selatan",
  threeTwo = "2",
  oneTwo = "1",
  semua = "Semua",
  az = "A-Z",
  za = "Z-A",
  rekomendasi = "Rekomendasi",
  terluas = "Terluas",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} self-stretch flex-1 relative container-xs md:flex-none`}>
      <div className="absolute bottom-[0.00rem] left-0 right-0 mx-auto flex flex-1 gap-[1.25rem] md:relative md:flex-col">
        <div className="flex w-full flex-col gap-[0.75rem]">
          <div className="flex h-[11.00rem] items-end justify-between gap-[1.25rem] rounded-lg bg-[url(/images/img_frame_427320476.png)] bg-cover bg-no-repeat p-[0.50rem] md:h-auto">
            <div className="mt-[8.38rem] flex flex-wrap gap-[0.25rem] rounded bg-white-a700">
              <Heading as="p" className="text-[0.88rem] font-semibold tracking-[0.00rem]">
                {lb}
              </Heading>
              <Heading as="p" className="text-[0.88rem] font-normal tracking-[0.00rem]">
                <span>120m</span>
                <span>2</span>
              </Heading>
            </div>
            <div className="flex flex-wrap gap-[0.25rem] rounded bg-white-a700">
              <Heading as="p" className="text-[0.88rem] font-semibold tracking-[0.00rem]">
                {lt}
              </Heading>
              <Heading as="p" className="text-[0.88rem] font-normal tracking-[0.00rem]">
                <span>155m</span>
                <span>2</span>
              </Heading>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[0.50rem]">
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
            <div className="flex self-stretch py-[0.38rem]">
              <div className="flex gap-[0.63rem]">
                <Img src="img_fi_747376.svg" width={20} height={20} alt="Image" className="h-[1.25rem]" />
                <Text as="p" className="text-[1.00rem] font-normal">
                  {threehundred}
                </Text>
              </div>
              <div className="ml-[0.50rem] h-[1.25rem] w-[0.13rem] bg-blue_gray-50_02" />
              <div className="flex gap-[0.63rem]">
                <Img src="img_fi_807498.svg" width={20} height={20} alt="Image" className="h-[1.25rem]" />
                <Text as="p" className="text-[1.00rem] font-normal">
                  {three}
                </Text>
              </div>
              <div className="ml-[0.50rem] h-[1.25rem] w-[0.13rem] bg-blue_gray-50_02" />
              <div className="flex flex-1 gap-[0.63rem] px-[0.50rem]">
                <Img src="img_fi_15611050.svg" width={20} height={20} alt="Image" className="h-[1.25rem]" />
                <Text as="p" className="text-[1.00rem] font-normal">
                  {one}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-[0.75rem]">
          <div className="flex h-[11.00rem] items-end justify-between gap-[1.25rem] rounded-lg bg-[url(/images/img_frame_427320476_176x294.png)] bg-cover bg-no-repeat p-[0.50rem] md:h-auto">
            <div className="mt-[8.38rem] flex flex-wrap gap-[0.25rem] rounded bg-white-a700">
              <Heading as="p" className="text-[0.88rem] font-semibold tracking-[0.00rem]">
                {lbOne}
              </Heading>
              <Heading as="p" className="text-[0.88rem] font-normal tracking-[0.00rem]">
                <span>120m</span>
                <span>2</span>
              </Heading>
            </div>
            <div className="flex flex-wrap gap-[0.25rem] rounded bg-white-a700">
              <Heading as="p" className="text-[0.88rem] font-semibold tracking-[0.00rem]">
                {ltOne}
              </Heading>
              <Heading as="p" className="text-[0.88rem] font-normal tracking-[0.00rem]">
                <span>155m</span>
                <span>2</span>
              </Heading>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[0.50rem]">
            <Text as="p" className="w-full !font-manrope text-[1.00rem] font-normal leading-[150%] tracking-[0.00rem]">
              {lantaitwentytwo1}
            </Text>
            <Text
              size="textxs"
              as="p"
              className="!font-manrope text-[0.88rem] font-normal tracking-[0.00rem] !text-text-disable"
            >
              {kuninganOne}
            </Text>
            <div className="flex self-stretch py-[0.38rem]">
              <div className="flex gap-[0.63rem]">
                <Img src="img_icon.svg" width={20} height={20} alt="Image" className="h-[1.25rem]" />
                <Text as="p" className="text-[1.00rem] font-normal">
                  {threeOne}
                </Text>
              </div>
              <div className="ml-[0.50rem] h-[1.25rem] w-[0.13rem] bg-blue_gray-50_02" />
              <div className="flex flex-1 gap-[0.63rem] px-[0.50rem]">
                <Img
                  src="img_thumbs_up_indigo_900.png"
                  width={20}
                  height={20}
                  alt="Image"
                  className="h-[1.25rem] object-cover"
                />
                <Text as="p" className="text-[1.00rem] font-normal">
                  {oneOne}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-[0.75rem]">
          <div className="flex h-[11.00rem] items-end justify-end rounded-lg bg-[url(/images/img_frame_427320476_1.png)] bg-cover bg-no-repeat p-[0.50rem] md:h-auto">
            <div className="mt-[8.38rem] flex flex-wrap gap-[0.25rem] rounded bg-white-a700">
              <Heading as="p" className="text-[0.88rem] font-semibold tracking-[0.00rem]">
                {ltTwo}
              </Heading>
              <Heading as="p" className="text-[0.88rem] font-normal tracking-[0.00rem]">
                <span>155m</span>
                <span>2</span>
              </Heading>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[0.50rem]">
            <Text as="p" className="w-full !font-manrope text-[1.00rem] font-normal leading-[150%] tracking-[0.00rem]">
              {lantaitwentytwo2}
            </Text>
            <Text
              size="textxs"
              as="p"
              className="mb-[2.75rem] !font-manrope text-[0.88rem] font-normal tracking-[0.00rem] !text-text-disable"
            >
              {kuninganTwo}
            </Text>
          </div>
        </div>
        <div className="flex w-full flex-col gap-[0.75rem]">
          <div className="flex h-[11.00rem] items-end justify-between gap-[1.25rem] rounded-lg bg-[url(/images/img_frame_427320476_2.png)] bg-cover bg-no-repeat p-[0.50rem] md:h-auto">
            <div className="mt-[8.38rem] flex flex-wrap gap-[0.25rem] rounded bg-white-a700">
              <Heading as="p" className="text-[0.88rem] font-semibold tracking-[0.00rem]">
                {lbTwo}
              </Heading>
              <Heading as="p" className="text-[0.88rem] font-normal tracking-[0.00rem]">
                <span>120m</span>
                <span>2</span>
              </Heading>
            </div>
            <div className="flex flex-wrap gap-[0.25rem] rounded bg-white-a700">
              <Heading as="p" className="text-[0.88rem] font-semibold tracking-[0.00rem]">
                {ltThree}
              </Heading>
              <Heading as="p" className="text-[0.88rem] font-normal tracking-[0.00rem]">
                <span>155m</span>
                <span>2</span>
              </Heading>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[0.50rem]">
            <Text as="p" className="w-full !font-manrope text-[1.00rem] font-normal leading-[150%] tracking-[0.00rem]">
              {lantaitwentytwo3}
            </Text>
            <Text
              size="textxs"
              as="p"
              className="!font-manrope text-[0.88rem] font-normal tracking-[0.00rem] !text-text-disable"
            >
              {kuninganThree}
            </Text>
            <div className="flex self-stretch py-[0.38rem]">
              <div className="flex gap-[0.63rem]">
                <Img src="img_icon.svg" width={20} height={20} alt="Image" className="h-[1.25rem]" />
                <Text as="p" className="text-[1.00rem] font-normal">
                  {threeTwo}
                </Text>
              </div>
              <div className="ml-[0.50rem] h-[1.25rem] w-[0.13rem] bg-blue_gray-50_02" />
              <div className="flex flex-1 gap-[0.63rem] px-[0.50rem]">
                <Img
                  src="img_thumbs_up_indigo_900.png"
                  width={20}
                  height={20}
                  alt="Image"
                  className="h-[1.25rem] object-cover"
                />
                <Text as="p" className="text-[1.00rem] font-normal">
                  {oneTwo}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-[0.00rem] top-[0.00rem] m-auto flex w-[12%] flex-col items-start gap-[0.38rem] rounded border border-solid border-text-disable bg-gray-50_01 px-[0.75rem] py-[0.88rem]">
        <Text size="textxs" as="p" className="!font-manrope text-[0.88rem] font-normal tracking-[0.00rem]">
          {semua}
        </Text>
        <div className="h-[0.06rem] self-stretch bg-blue_gray-50_02" />
        <Text size="textxs" as="p" className="!font-manrope text-[0.88rem] font-normal tracking-[0.00rem]">
          {az}
        </Text>
        <div className="h-[0.06rem] self-stretch bg-blue_gray-50_02" />
        <Text size="textxs" as="p" className="!font-manrope text-[0.88rem] font-normal tracking-[0.00rem]">
          {za}
        </Text>
        <div className="h-[0.06rem] self-stretch bg-blue_gray-50_02" />
        <Text size="textxs" as="p" className="!font-manrope text-[0.88rem] font-normal tracking-[0.00rem]">
          {rekomendasi}
        </Text>
        <div className="h-[0.06rem] self-stretch bg-blue_gray-50_02" />
        <Text size="textxs" as="p" className="!font-manrope text-[0.88rem] font-normal tracking-[0.00rem]">
          {terluas}
        </Text>
      </div>
    </div>
  );
}

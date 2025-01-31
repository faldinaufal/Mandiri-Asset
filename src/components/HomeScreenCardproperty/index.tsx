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
  fi747376oneone?: string;
  threehundred?: React.ReactNode;
  lineOne?: boolean;
  fi807498oneone?: string;
  three?: React.ReactNode;
  lineoneOne?: boolean;
  fi15611050one?: string;
  one?: React.ReactNode;
}

export default function HomeScreenCardproperty({
  lb,
  p120mtwo,
  lt,
  p155mtwo,
  lantaitwentytwo,
  kuningan,
  fi747376oneone,
  threehundred,
  lineOne,
  fi807498oneone,
  three,
  lineoneOne,
  fi15611050one,
  one,
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col gap-[0.75rem]`}>
      <div className="flex h-[11.00rem] items-end justify-between gap-[1.25rem] self-stretch rounded-lg bg-[url(/images/img_frame_427320476.png)] bg-cover bg-no-repeat p-[0.50rem]">
        <div className="mt-[8.38rem] flex flex-wrap gap-[0.25rem] rounded bg-white-a700">
          {!!lb ? (
            <Heading as="p" className="text-[0.88rem] font-semibold tracking-[0.00rem]">
              {lb}
            </Heading>
          ) : null}
          {!!p120mtwo ? (
            <Heading as="p" className="text-[0.88rem] font-normal tracking-[0.00rem]">
              <span>lbl_120m</span>
              <span>lbl_2</span>
            </Heading>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-[0.25rem] rounded bg-white-a700">
          {!!lt ? (
            <Heading as="p" className="text-[0.88rem] font-semibold tracking-[0.00rem]">
              {lt}
            </Heading>
          ) : null}
          {!!p155mtwo ? (
            <Heading as="p" className="text-[0.88rem] font-normal tracking-[0.00rem]">
              <span>lbl_155m</span>
              <span>lbl_2</span>
            </Heading>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col items-start gap-[0.50rem] self-stretch">
        {!!lantaitwentytwo ? (
          <Text as="p" className="w-full !font-manrope text-[1.00rem] font-normal leading-[150%] tracking-[0.00rem]">
            {lantaitwentytwo}
          </Text>
        ) : null}
        {!!kuningan ? (
          <Text
            size="textxs"
            as="p"
            className="!font-manrope text-[0.88rem] font-normal tracking-[0.00rem] !text-text-disable"
          >
            {kuningan}
          </Text>
        ) : null}
        <div className="flex justify-between gap-[1.25rem] self-stretch py-[0.38rem]">
          <div className="flex gap-[0.63rem]">
            {!!fi747376oneone ? (
              <Img src={fi747376oneone} width={20} height={20} alt="Fi747376one" className="h-[1.25rem]" />
            ) : null}
            {!!threehundred ? (
              <Text as="p" className="text-[1.00rem] font-normal">
                {threehundred}
              </Text>
            ) : null}
          </div>
          <div className="flex flex-1 justify-center">
            {!!lineOne ? <div className="h-[1.25rem] w-[0.13rem] bg-blue_gray-50_02" /> : null}
            <div className="flex gap-[0.63rem]">
              {!!fi807498oneone ? (
                <Img src={fi807498oneone} width={20} height={20} alt="Fi807498one" className="h-[1.25rem]" />
              ) : null}
              {!!three ? (
                <Text as="p" className="text-[1.00rem] font-normal">
                  {three}
                </Text>
              ) : null}
            </div>
            <div className="flex flex-1 justify-center">
              {!!lineoneOne ? <div className="h-[1.25rem] w-[0.13rem] bg-blue_gray-50_02" /> : null}
              <div className="flex flex-1 gap-[0.63rem] px-[0.50rem]">
                {!!fi15611050one ? (
                  <Img src={fi15611050one} width={20} height={20} alt="Fi15611050one" className="h-[1.25rem]" />
                ) : null}
                {!!one ? (
                  <Text as="p" className="text-[1.00rem] font-normal">
                    {one}
                  </Text>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

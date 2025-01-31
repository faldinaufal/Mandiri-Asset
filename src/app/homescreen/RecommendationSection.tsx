"use client";

import { Button, Img, Slider, Text, Heading } from "../../components";
import HomeScreenCardproperty from "../../components/HomeScreenCardproperty";
import React from "react";
import AliceCarousel, { EventObject } from "react-alice-carousel";

export default function RecommendationSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);

  return (
    <>
      {/* recommendation section */}
      <div className="mt-[4.50rem] flex flex-col items-center gap-[2.50rem] self-stretch">
        <div className="container-xs md:px-[1.25rem]">
          <div className="flex items-center justify-center sm:flex-col">
            <Heading
              size="title_large"
              as="h1"
              className="!font-manrope text-[2.00rem] font-medium tracking-[0.00rem] !text-indigo-900_01 md:text-[1.88rem] sm:text-[1.75rem]"
            >
              Rekomendasi Aset
            </Heading>
            <div className="flex flex-1 justify-end gap-[0.69rem] sm:self-stretch">
              <Text as="p" className="text-[1.00rem] font-normal !text-blue-700">
                Lihat Semua
              </Text>
              <Img src="img_arrow_left.svg" width={20} height={20} alt="Arrowleftone" className="h-[1.25rem]" />
            </div>
          </div>
        </div>
        <div className="relative h-[19.25rem] w-[88%]">
          <div className="container-xs absolute bottom-0 left-0 right-0 top-0 m-auto w-full gap-[1.25rem] md:relative md:flex-col md:px-[1.25rem]">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              responsive={{ "0": { items: 1 }, "551": { items: 1 }, "1051": { items: 4 } }}
              disableDotsControls
              activeIndex={sliderState}
              onSlideChanged={(e: EventObject) => {
                setSliderState(e?.item);
              }}
              ref={sliderRef}
              items={[...Array(12)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="px-[0.63rem]">
                    <HomeScreenCardproperty />
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
          <div className="absolute left-0 right-0 top-[30%] mx-auto flex flex-1 justify-between gap-[1.25rem]">
            <Button
              color="gray_200_01"
              size="md"
              shape="circle"
              onClick={() => {
                sliderRef?.current?.slidePrev();
              }}
              className="w-[2.50rem] rotate-[-180deg] rounded-[20px] px-[0.75rem]"
            >
              <Img src="img_arrow_down.svg" width={16} height={16} />
            </Button>
            <Button
              size="md"
              shape="circle"
              onClick={() => {
                sliderRef?.current?.slideNext();
              }}
              className="w-[2.50rem] rounded-[20px] px-[0.75rem] shadow-sm"
            >
              <Img src="img_arrow_left_indigo_900_1.svg" width={16} height={16} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

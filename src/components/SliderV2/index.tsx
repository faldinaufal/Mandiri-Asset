"use client";
import React, { useEffect, useImperativeHandle, forwardRef, useState } from "react";
import { Swiper, SwiperSlide, SwiperRef, SwiperProps } from "swiper/react";
import "swiper/css";

type SliderComponentProps = SwiperProps &
  Partial<{
    items: React.ReactElement[];
    centerMode: boolean;
    magnifiedIndex: number;
    activeSlideCSS: string;
    activeIndex: number;
    swipeable: boolean;
    [x: string]: any;
  }>;

const SliderV2 = forwardRef<SwiperRef, SliderComponentProps>(
  (
    {
      items = [],
      activeIndex: propActiveIndex = 0,
      centerMode = false,
      magnifiedIndex = 0,
      activeSlideCSS = "scale-50",
      ...props
    },
    ref
  ) => {
    const [internalActiveIndex, setInternalActiveIndex] = useState(propActiveIndex);
    const swiperRef = React.useRef<SwiperRef>(null);

    useImperativeHandle(ref, () => swiperRef.current!);

    useEffect(() => {
      if (swiperRef.current?.swiper && !swiperRef.current.swiper.destroyed) {
        swiperRef.current.swiper.slideTo(propActiveIndex);
      }
    }, [propActiveIndex]);

    const handleSlideChange = (swiper: any) => {
      const newIndex = swiper.realIndex;
      setInternalActiveIndex(newIndex);
      props.onSlideChange?.(swiper);
    };

    return (
      <Swiper
        ref={swiperRef}
        loop={true}
        initialSlide={propActiveIndex}
        onSlideChangeTransitionEnd={handleSlideChange}
        navigation={false}
        mousewheel={false}
        allowTouchMove={true}
        {...props}
      >
        {items.map((child:React.ReactElement, index: number) => {
          const totalItems = items.length;
          const targetIndex = (internalActiveIndex + magnifiedIndex) % totalItems;
          const isActive = index === targetIndex;
          const className = centerMode && !isActive
            ? `${child.props.className || ""} ${activeSlideCSS}`.trim()
            : child.props.className;

          return (
            <SwiperSlide key={index}>
              {React.cloneElement(child, { className })}
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }
);

export { SliderV2 };
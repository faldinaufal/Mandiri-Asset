"use client";

import { Heading, Text, Button, Img, GoogleMap, Input, SelectBox, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "../../components";
import DetailListingScreenCardproperty from "../../components/DetailListingScreenCardproperty";
import DetailListingScreenColumnutaraone from "../../components/DetailListingScreenColumnutaraone";
import DetailListingScreenDetails from "../../components/DetailListingScreenDetails";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";
import DetailListingSection from "./DetailListingSection";
import React, { Suspense, useEffect } from "react";
import DetailPage from "../../constant/detail-page-id.json"
import PropertySpesification from "../../components/DetailListingScreenColumnkamar";
import { twMerge } from "tailwind-merge";
import { MediaPreviewer } from "@/components/MediaPreview/MediaPreview";
import { SliderV2 } from "@/components/SliderV2";
import { SwiperRef } from "swiper/react";
import { Swiper as SwiperType } from 'swiper';

type AccessibilityType = "nearbyLocation" | "accessibility";

export default function DetailListingScreenPage() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [sliderStateSlide, setSliderStateSlide] = React.useState(0);
  const [isOpenMedia, setIsOpenMedia] = React.useState<boolean>(false);
  const [accessibility, setAccessibility] = React.useState<AccessibilityType>("nearbyLocation")
  const sliderRef3 = React.useRef<SwiperRef>(null);
  const [isCopied, setIsCopied] = React.useState<boolean>(false);
  const urlToCopy = "https://url-yang-akan-disalin.com";
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);

  function handleCloseMedia () {
    setIsOpenMedia(false);
  }

  function handleOpenMedia (index:number)  {
    setIsOpenMedia(true)
    setSelectedIndex(index)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(urlToCopy);
      setIsCopied(true);
    } catch (err) {
      console.error('Gagal menyalin:', err);
    }
  };

  const handleSlideChange = (swiper: any) => {
    setSliderStateSlide(swiper.snapIndex + 1);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  // Reset status salin setelah 2 detik
  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => setIsCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  return (
    <div className="w-full bg-white-a700">
      <Header className="border-b border-solid border-black-900_19 bg-white-a700" />
      <div className="mt-[2.38rem] flex flex-col items-center gap-[2.50rem]">
        <div className="container md:px-[1.25rem] flex flex-col gap-6">
          <Breadcrumb
            separator={
              <Img
                src="img_frame_427320547_20x1238.svg"
                width={16}
                height={16}
                alt="Arrow Right"
                className="h-4 w-4"
              />
            }
            className="flex flex-wrap w-full items-center gap-[0.50rem] md:flex-col"
          >
            {DetailPage?.breadcrumb?.map((item, index) => (
              <BreadcrumbItem isCurrentPage={item.isCurrentPage} key={index}>
                <BreadcrumbLink>
                  <Text
                    size="textxs"
                    as="p"
                    className={twMerge(
                      "!font-notosans text-[0.88rem] tracking-[0.00rem]",
                      item.isCurrentPage 
                        ? "!text-text-disable font-light md:line-clamp-1" 
                        : "!text-indigo-900 font-medium whitespace-nowrap" // <-- tambahkan ini
                    )}
                  >
                    {item.text}
                  </Text>
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
          {/* detail listing section */}
          <DetailListingSection 
            breadcrumbData={DetailPage?.breadcrumb}
            thumbnail={DetailPage?.thumbnail}
            isCopied={isCopied}
            handLeCopy={handleCopy}
            openMedia={handleOpenMedia}
          />
        </div>
        <div className="container md:px-[1.25rem]">
          <div className="flex items-start md:flex-col justify-between">
            <div className="flex flex-1 flex-col self-center max-w-[39.25rem]">
              <Heading
                size="textxl"
                as="h1"
                className="!font-manrope text-[1.50rem] font-medium leading-[150%] tracking-[0.00rem] md:w-full md:text-[1.38rem]"
              >
                {DetailPage?.title}
              </Heading>
              <div className="detail-page-address mt-[1.00rem] flex sm:grid sm:gap-2 items-center justify-between">
                <div className="flex items-center">
                  <Img
                    src="img_fluent_location_28_regular.svg"
                    width={24}
                    height={24}
                    alt="Fluentlocation"
                    className="h-[1.50rem]"
                  />
                  <Text as="p" className="!font-notosans text-[1.00rem] font-normal tracking-[0.00rem]">
                    {DetailPage?.address}
                  </Text>
                </div>
                <Button
                  size="lg"
                  variant="outline"
                  shape="round"
                  onClick={handleCopy}
                  leftIcon={
                    <Img
                      src={isCopied ? "img_fe_check.svg" : "img_iconparkoutlinecopy.svg"}
                      width={24}
                      height={24}
                      alt="Copy icon"
                      className="h-[1.50rem] w-[1.50rem] object-contain"
                    />
                  }
                  className="min-w-[7.50rem] gap-[0.25rem] hidden lg:flex rounded sm:max-w-[100px] !border px-[0.56rem] font-notosans font-medium tracking-[0.00rem]"
                >
                  {isCopied ? "Tersalin!" : "Salin Link"}
                </Button>
              </div>
              <div className="detail-page-info-panel mt-[1.50rem] flex flex-col gap-[2.38rem]">
                <div className="flex flex-col gap-[1.50rem]">
                  <div className="flex gap-[0.81rem]">
                    <Button
                      size="lg"
                      variant={accessibility === "nearbyLocation" ? "fill" : "outline"}
                      shape="round"
                      onClick={()=>setAccessibility("nearbyLocation")}
                      className={twMerge("min-w-[7.00rem] rounded border border-solid px-[0.56rem] font-notosans !text-indigo-900",
                        accessibility === "nearbyLocation" && "border-[#459DDA] bg-[#459DDA]/10"
                      )}
                    >
                      {DetailPage?.nearbyLocation?.text}
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      shape="round"
                      onClick={()=>setAccessibility("accessibility")}
                      className={twMerge("min-w-[6.38rem] rounded !border px-[0.56rem] font-notosans !text-indigo-900",
                        accessibility === "accessibility" && "border-[#459DDA] bg-[#459DDA]/10"
                      )}
                    >
                      {DetailPage?.accessibility?.text}
                    </Button>
                  </div>
                  <div className={twMerge("flex flex-col gap-[1.00rem]", 
                    accessibility === 'accessibility' && 'hidden')}
                  >
                    {DetailPage?.nearbyLocation?.data?.map((item,index) => (
                      <div className="flex items-center gap-2">
                        <Img
                          src="img_settings_black_900_1.svg"
                          width={20}
                          height={20}
                          alt="Settingsthree"
                          className="h-[1.25rem]"
                        />
                        <Text as="p" className="!font-notosans text-[1.00rem] font-normal">
                          {item?.name}
                        </Text>
                      </div>
                    ))}
                  </div>
                  <div className={twMerge("flex flex-col gap-[1.00rem]", 
                    accessibility === 'nearbyLocation' && 'hidden')}
                  >
                    {DetailPage?.accessibility?.data?.map((item,index) => (
                      <div className="flex items-center gap-2">
                        <Img
                          src="img_settings_black_900_1.svg"
                          width={20}
                          height={20}
                          alt="Settingsthree"
                          className="h-[1.25rem]"
                        />
                        <Text as="p" className="!font-notosans text-[1.00rem] font-normal">
                          {item?.name}
                        </Text>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center gap-[0.88rem]">
                  <Heading
                    size="textxl"
                    as="h2"
                    className="!font-notosans text-[1.50rem] font-medium tracking-[0.00rem] !text-indigo-900 md:text-[1.38rem]"
                  >
                    {DetailPage?.description?.name}
                  </Heading>
                  <Text
                    as="p"
                    className="text-[1.00rem] font-light leading-[150%] tracking-[0.00rem] md:w-full"
                  >
                    {DetailPage?.description?.text}
                  </Text>
                </div>
                <div className="flex flex-col items-start gap-[0.88rem]">
                  <Heading
                    size="textxl"
                    as="h3"
                    className="!font-notosans text-[1.50rem] font-medium tracking-[0.00rem] !text-indigo-900 md:text-[1.38rem]"
                  >
                    {DetailPage?.specification?.name}
                  </Heading>
                  <div className="mb-[40px] grid grid-cols-2 sm:grid-cols-1 gap-x-[40px] gap-y-0 w-full">  
                    {DetailPage?.specification?.data?.map((item, index) => (
                      <PropertySpesification   
                        key={index}  
                        name={item?.name}  
                        value={item?.value}
                        className={twMerge(index > 2 && "sm:hidden")}
                      />  
                    ))}
                    <div className="flex items-center justify-center pt-4">
                      <Button
                        variant={"fill"}
                        rightIcon={
                          <Img
                            src={"img_arrow_left.svg"}
                            width={24}
                            height={24}
                            alt="Arrow icon"
                            className="h-[1.50rem] w-[1.50rem] object-contain text-blue-400"
                          />
                        }
                        className="hidden sm:flex bg-transparent text-base gap-1 text-blue-400"
                      >
                        Lihat Semua
                      </Button>
                    </div>
                  </div>  
                </div>
              </div>
              <div className="mt-[2.50rem] flex flex-col items-start gap-[1.25rem]">
                <Heading
                  size="textxl"
                  as="h4"
                  className="!font-notosans text-[1.50rem] font-medium tracking-[0.00rem] !text-indigo-900 md:text-[1.38rem]"
                >
                  {DetailPage?.facility?.name}
                </Heading>
                <div className="mb-[40px] grid grid-cols-2 sm:grid-cols-1 gap-x-[40px] gap-y-0 w-full">
                  {DetailPage?.facility?.data?.map((item, index) => (
                    <div key={index} className={twMerge("flex items-center w-full justify-between gap-[1.25rem] rounded-tl-lg rounded-tr-lg border border-solid border-blue_gray-50_02 px-[1.00rem] py-[1.13rem]",
                      index > 2 && "sm:hidden"
                    )}>
                      <Text as="p" className="self-end text-[1.00rem] font-normal tracking-[0.00rem]">
                        {item}
                      </Text>
                      <Img src="img_fe_check.svg" width={24} height={24} alt="Fecheckone" className="h-[1.50rem]" />
                    </div>
                  ))}
                  <div className="flex items-center justify-center pt-4">
                    <Button
                      variant={"fill"}
                      rightIcon={
                        <Img
                          src={"img_arrow_left.svg"}
                          width={24}
                          height={24}
                          alt="Arrow icon"
                          className="h-[1.50rem] w-[1.50rem] object-contain text-blue-400"
                        />
                      }
                      className="hidden sm:flex bg-transparent text-base gap-1 text-blue-400"
                    >
                      Lihat Semua
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[34%] md:hidden flex-col items-start gap-[0.88rem] rounded-[16px] bg-gray-100_01 px-[1.38rem] py-[2.00rem] md:w-full sm:p-[1.25rem]">
              <Heading
                size="headinglg"
                as="h6"
                className="!font-notosans text-[1.50rem] font-semibold tracking-[0.00rem] md:text-[1.38rem]"
              >
                {DetailPage?.propertyInfo?.text}
              </Heading>
              <div className="flex flex-col gap-[1.25rem] w-full">
                {DetailPage?.propertyInfo?.label?.map((item, index) => (
                  (!item?.isDropDown ?
                    <div key={index} className="flex flex-col items-start justify-center gap-[0.25rem]">
                      <Text as="p" className="!font-notosans text-[1.00rem] font-medium tracking-[0.00rem]">
                        <span className="text-gray-900_01">{item?.lbl_name}</span>
                        <span className="text-red-500">*</span>
                      </Text>
                      <Input
                        shape="round"
                        name="inputone_one"
                        placeholder={item?.placeholder}
                        className="self-stretch rounded-lg border border-solid border-gray-200 px-[0.75rem] font-light tracking-[0.00rem]"
                      />
                    </div>
                  :
                    <div key={index} className="flex flex-col items-start justify-center gap-[0.13rem]">
                      <Text as="p" className="!font-notosans text-[1.00rem] font-medium tracking-[0.00rem]">
                        Jenis Perusahaan
                      </Text>
                      <SelectBox
                        indicator={
                          <Img
                            src="img_arrowdown_gray_900_01_1.svg"
                            width={16}
                            height={16}
                            alt="Arrow Down"
                            className="h-[1.00rem] w-[1.00rem]"
                          />
                        }
                        name="inputthree_one"
                        placeholder={`-${item?.placeholder}-`}
                        options={item?.options}
                        className="gap-[1.50rem] self-stretch rounded-lg border border-solid border-gray-200 px-[0.88rem] font-light tracking-[0.00rem] !text-gray-900_01"
                      />
                    </div>
                  )
                ))}
              </div>
              <div className="flex gap-[10px]">
                <div className="w-7">
                  <Img src="img_weui_info_filled.svg" width={24} height={24} alt="Fecheckone"/>
                </div>
                <div className="w-full">
                  <Text className="font-notosans font-medium text-sm text-text-disable">{DetailPage?.propertyInfo?.inquiry}</Text>
                </div>
              </div>
              <div className="w-full">
                <Button
                  size="lg"
                  shape="round"
                  disabled
                  className="w-full rounded p-4 font-semibold text-text-disable"
                >
                  {DetailPage?.propertyInfo?.button}
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-[5.00rem] md:gap-[3.75rem] sm:gap-[2.50rem]">
            <div className="mt-[2.50rem] max-w-[39.25rem] flex flex-col items-start justify-center gap-[1.50rem]">
              <Heading
                size="textxl"
                as="h5"
                className="!font-notosans text-[1.50rem] font-medium tracking-[0.00rem] !text-indigo-900 md:text-[1.38rem]"
              >
                Lokasi
              </Heading>
              <div className="flex relative items-start justify-between gap-[1.25rem] w-full self-stretch md:flex-col">
                <GoogleMap
                  showMarker={false}
                  className="h-[28.38rem] w-full self-center rounded-lg bg-[url(/images/img_frame_427320573.png)] bg-cover bg-no-repeat"
                />
                <Button
                  color="gray_50_01"
                  size="xl"
                  shape="round"
                  leftIcon={
                    <Img
                      src="img_hugeiconsmaps.svg"
                      width={20}
                      height={20}
                      alt="Hugeicons:maps"
                      className="h-[1.25rem] w-[1.25rem] object-contain"
                    />
                  }
                  className="absolute top-4 left-4 m-auto min-w-[8.88rem] gap-[0.50rem] rounded px-[0.88rem] font-inter font-medium tracking-[0.00rem]"
                >
                  Lihat Maps
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-[0.88rem]">
              <div className="flex justify-center md:flex-col">
                <Heading
                  size="textxl"
                  as="p"
                  className="!font-notosans text-[1.50rem] font-medium tracking-[0.00rem] !text-indigo-900 md:text-[1.38rem]"
                >
                  Bentuk Pengembangan yang Diharapkan
                </Heading>
                <div className="flex md:hidden flex-1 items-center justify-end md:self-stretch gap-6">
                  <Text as="p" className="!font-manrope hidden sm:block text-[1.00rem] font-normal tracking-[0.00rem] !text-indigo-900">
                    <span>{sliderStateSlide + 1 || "1"}</span>
                    <span> / </span>
                    <span>{DetailPage?.targetState?.data?.length|| "1"}</span>
                  </Text>
                  <Text as="p" className="!font-manrope sm:hidden md:block lg:hidden text-[1.00rem] font-normal tracking-[0.00rem] !text-indigo-900">
                    <span>{sliderStateSlide + 1 || "1"}</span>
                    <span> / </span>
                    <span>{Math.ceil((DetailPage?.targetState?.data?.length) / 2) || "1"}</span>
                  </Text>
                  <Text as="p" className="!font-manrope hidden lg:block text-[1.00rem] font-normal tracking-[0.00rem] !text-indigo-900">
                    <span>{sliderStateSlide + 1 || "1"}</span>
                    <span> / </span>
                    <span>{Math.ceil((DetailPage?.targetState?.data?.length) / 4) || "1"}</span>
                  </Text>
                  <div className="flex gap-[0.50rem]">
                    <Button
                      onClick={() => sliderRef3.current?.swiper.slidePrev()}
                      disabled={isBeginning}
                      size="xs"
                      variant="outline"
                      shape="circle"
                      className={twMerge("w-[2.00rem] rotate-[-180deg] rounded-[16px] border border-solid px-[0.63rem]",
                        isBeginning ? "border-gray-200" : "border-indigo-900"
                      )}
                    >
                      <Img src={isBeginning ? "img_arrow_right_text_disable.svg" : "img_arrow_right_indigo_900_1.svg"} width={6} height={10} />
                    </Button>
                    <Button
                      onClick={() => sliderRef3.current?.swiper.slideNext()}
                      disabled={isEnd}
                      size="xs"
                      variant="outline"
                      shape="circle"
                      className={twMerge("w-[2.00rem] rounded-[16px] border border-solid px-[0.63rem]",
                        isEnd ? "border-gray-200" : "border-indigo-900" 
                      )}
                    >
                      <Img src={isEnd ? "img_arrow_right_text_disable.svg" : "img_arrow_right_indigo_900_1.svg"} width={6} height={10}/>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mx-auto flex w-full gap-[0.75rem]">
                <SliderV2
                  ref={sliderRef3}
                  onSlideChange={(swiper: SwiperType) => {
                    setSliderStateSlide(swiper.snapIndex);
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                  }}
                  slidesPerView={1}
                  slidesPerGroup={1}
                  loop={true}
                  breakpoints={{
                    680: {
                      slidesPerView: 2,
                      slidesPerGroup: 2, // Geser 2 item untuk tablet
                    },
                    1024: {
                      slidesPerView: 4,
                      slidesPerGroup: 4, // Geser 4 item untuk desktop
                      allowTouchMove: false,
                    }
                  }}
                  items={DetailPage?.targetState?.data?.map((item, index) => (
                    <React.Fragment key={index}>
                      <div className="px-[0.38rem] h-[160px]">
                        <div className="flex flex-col gap-[0.50rem] h-full rounded-lg border border-solid border-blue_gray-50_02 p-[1.00rem]">
                          <div className="relative h-[2.50rem]">
                            <div className="absolute left-[0.00rem] top-[0.00rem] m-auto h-[2.00rem] w-[2.00rem] rounded bg-gray-100" />
                            <Img
                              src="img_hugeicons_house_03.svg"
                              width={32}
                              height={32}
                              alt="Hugeiconshouse"
                              className="absolute bottom-[0.00rem] left-[0.50rem] m-auto h-[2.00rem]"
                            />
                          </div>
                          <div className="mx-[0.50rem] mb-[0.38rem] flex flex-col items-start justify-center gap-[0.25rem] md:mx-0">
                            <Heading size="headings" as="h6" className="text-[1.00rem] font-semibold">
                              {item.labelHeading}
                            </Heading>
                            <ul className="list-disc pl-4">
                              {item?.data?.map((_item,_index) =>(
                                <li className="text-text-disable" key={_index}>{_item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-[1.50rem]">
              <Heading
                size="textxl"
                as="p"
                className="!font-notosans text-[1.50rem] font-medium tracking-[0.00rem] !text-indigo-900 md:text-[1.38rem]"
              >
                Kondisi Aset
              </Heading>
              <div className="flex items-start justify-between gap-[1.25rem] self-stretch md:flex-col">
                <GoogleMap
                  showMarker={false}
                  className="h-[28.38rem] w-full lg:w-[48%] self-center rounded-lg bg-cover bg-no-repeat"
                />
                <div className="flex w-[46%] flex-col items-start justify-center gap-[1.00rem] md:w-full">
                  <Heading
                    size="headingmd"
                    as="h6"
                    className="!font-notosans text-[1.13rem] font-semibold tracking-[0.00rem]"
                  >
                    Detail Fisik Aset
                  </Heading>
                  <Text as="p" className="w-[96%] text-[1.00rem] font-light leading-[140%] md:w-full">
                    <>
                      Aset berupa komplek dengan sebagian berupa tanah kosong dan fasilitas pendukung kawasan (gudang,
                      lapangan olahraga, gedung serba guna, masjid) Aset dipergunakan sebagai rumah, arsip
                      <br />
                      <br />
                      Bentuk lahan tidak beraturan, memiliki kontur rata dengan jalan raya
                      <br />
                      <br />
                      Kontur tidak rata, ada slope di barat daya aset
                      <br />
                      <br />
                      Aset scattered, terbagi oleh jalan umum
                      <br />
                      <br />
                      Terdapat SPBU yang berbatasan langsung dengan aset
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col">
              <DetailListingScreenColumnutaraone className="flex-1 border-2 rounded-l-lg" />
              <DetailListingScreenColumnutaraone className="flex-1 border-t-2 border-b-2 border-r-2" />
              <DetailListingScreenColumnutaraone 
                className="flex-1 border-t-2 border-b-2"
                  perniagaan="Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet "
                />
              <DetailListingScreenColumnutaraone className="flex-1 border-2 rounded-r-lg" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-[1.38rem]">
              <Heading
                size="textxl"
                as="p"
                className="!font-notosans text-[1.50rem] font-medium tracking-[0.00rem] !text-indigo-900 md:text-[1.38rem]"
              >
                {DetailPage?.developmentLimitation?.text}
              </Heading>
              <div className="self-stretch">
                <div className="flex items-start md:flex-col lg:gap-16">
                  <div className="relative h-[28.38rem] w-[55%] content-center self-center md:h-auto md:w-full">
                    <div className="mx-auto flex h-[28.38rem] justify-end w-full rounded-lg bg-[url(/images/img_frame_427320574.png)] bg-cover bg-no-repeat px-[1.00rem] py-[12.38rem] md:mr-0 md:h-auto md:py-[1.25rem]">
                      <Img
                        src="img_slide_gray_50_01.svg"
                        width={56}
                        height={56}
                        alt="Slideone"
                        className="h-[3.50rem] rounded-[50%]"
                      />
                    </div>
                  </div>
                  <div className="flex w-[46%] flex-col items-start justify-center gap-[1.00rem] md:w-full">
                    <Heading
                      size="headingmd"
                      as="h6"
                      className="!font-notosans text-[1.13rem] font-semibold tracking-[0.00rem]"
                    >
                      Peruntukan
                    </Heading>
                    <div className="self-stretch">
                      <div className="flex flex-wrap justify-end rounded-tl-lg rounded-tr-lg border border-solid border-blue_gray-50_02 px-[2.38rem] py-[0.88rem] sm:px-[1.25rem]">
                        <Heading size="headings" as="h6" className="text-[1.00rem] font-semibold">
                          KDB
                        </Heading>
                        <Heading size="headings" as="h6" className="ml-[4.63rem] text-[1.00rem] font-semibold">
                          KLB
                        </Heading>
                        <Heading size="headings" as="h6" className="ml-[4.63rem] !font-sen text-[1.00rem] font-bold">
                          KDH
                        </Heading>
                        <Heading size="headings" as="h6" className="ml-[4.50rem] !font-sen text-[1.00rem] font-bold">
                          KTB
                        </Heading>
                      </div>
                      <div className="flex flex-col">
                        <Suspense fallback={<div>Loading feed...</div>}>
                          {DetailPage?.developmentLimitation?.data?.map((d, index) => (
                            <DetailListingScreenDetails {...d} key={"list46576Mtwo" + index} />
                          ))}
                        </Suspense>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[1.50rem]">
              <div className="flex items-center">
                <Heading
                  size="textxl"
                  as="p"
                  className="self-end !font-notosans text-[1.50rem] font-medium tracking-[0.00rem] !text-indigo-900 md:text-[1.38rem]"
                >
                  Potensi Pengembangan
                </Heading>
              </div>
              <div className="mx-auto flex w-full">
                <div className="flex gap-[1.25rem] md:flex-col">
                  <div className="flex w-full flex-col items-start justify-center gap-[0.88rem]">
                    <Heading
                      size="headingmd"
                      as="h6"
                      className="!font-notosans text-[1.13rem] font-semibold tracking-[0.00rem]"
                    >
                      K1 - Perdagangan & Jasa Skala Kota
                    </Heading>
                    <div className="self-stretch">
                      <div className="flex items-center justify-between gap-[1.25rem] rounded-tl-lg rounded-tr-lg border border-solid border-blue_gray-50_02 px-[1.00rem] sm:flex-col">
                        <div className="flex items-center gap-[1.00rem]">
                          <Button
                            color="green_300"
                            shape="round"
                            className="min-w-[5.38rem] rounded px-[0.63rem] font-sen"
                          >
                            Diizinkan
                          </Button>
                          <div className="h-[4.75rem] w-[0.06rem] bg-blue_gray-50_02" />
                        </div>
                        <Text as="p" className="w-[82%] text-[1.00rem] font-normal leading-[140%] sm:w-full">
                          Rumah tapak, rumah flat, perkantoran, pusat perbelanjaan, gedung serba guna, lapangan
                          olahraga)
                        </Text>
                      </div>
                      <div className="flex items-center gap-[1.00rem] border border-solid border-blue_gray-50_02 px-[1.00rem] sm:flex-col">
                        <Button
                          color="yellow_700"
                          shape="round"
                          className="min-w-[5.38rem] rounded px-[0.63rem] font-sen"
                        >
                          Terbatas
                        </Button>
                        <div className="h-[4.25rem] w-[0.06rem] bg-blue_gray-50_02 sm:h-[0.06rem] sm:w-[4.25rem]" />
                        <Text as="p" className="mb-[1.25rem] self-end text-[1.00rem] font-normal sm:mb-0">
                          Rumah susun, rumah sakit, bangunan pendidikan
                        </Text>
                      </div>
                      <div className="flex items-center gap-[1.31rem] rounded-bl-lg rounded-br-lg border border-solid border-blue_gray-50_02 px-[1.00rem]">
                        <div className="flex items-center gap-[1.00rem]">
                          <Button
                            color="blue_50"
                            shape="round"
                            className="min-w-[5.38rem] rounded px-[0.63rem] font-sen"
                          >
                            Bersyarat
                          </Button>
                          <div className="h-[4.25rem] w-[0.06rem] bg-blue_gray-50_02" />
                        </div>
                        <Text as="p" className="mb-[1.25rem] self-end text-[1.00rem] font-normal">
                          Rumah susun, pergudangan
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-center gap-[0.88rem]">
                    <Heading
                      size="headingmd"
                      as="h6"
                      className="!font-notosans text-[1.13rem] font-semibold tracking-[0.00rem]"
                    >
                      R1 - Perumahan Kepadatan Sangat Tinggi
                    </Heading>
                    <div className="self-stretch">
                      <div className="flex items-center gap-[1.00rem] border border-solid border-blue_gray-50_02 px-[1.00rem] sm:flex-col">
                        <Button
                          color="green_300"
                          shape="round"
                          className="min-w-[5.38rem] rounded px-[0.63rem] font-sen"
                        >
                          Diizinkan
                        </Button>
                        <div className="h-[4.25rem] w-[0.06rem] bg-blue_gray-50_02 sm:h-[0.06rem] sm:w-[4.25rem]" />
                        <Text as="p" className="mb-[1.25rem] self-end text-[1.00rem] font-normal sm:mb-0">
                          Rumah tapak, rumah flat, perkantoran, lapangan olahraga
                        </Text>
                      </div>
                      <div className="flex items-center gap-[1.00rem] border border-solid border-blue_gray-50_02 px-[1.00rem] sm:flex-col">
                        <Button
                          color="yellow_700"
                          shape="round"
                          className="min-w-[5.38rem] rounded px-[0.63rem] font-sen"
                        >
                          Terbatas
                        </Button>
                        <div className="h-[4.25rem] w-[0.06rem] bg-blue_gray-50_02 sm:h-[0.06rem] sm:w-[4.25rem]" />
                        <Text as="p" className="mb-[1.25rem] self-end text-[1.00rem] font-normal sm:mb-0">
                          Rumah susun, bangunan data center, rumah sakit
                        </Text>
                      </div>
                      <div className="flex items-center justify-center gap-[1.00rem] rounded-bl-lg rounded-br-lg border border-solid border-blue_gray-50_02 px-[1.00rem] sm:flex-col">
                        <div className="flex py-[1.00rem]">
                          <Button
                            color="blue_50"
                            shape="round"
                            className="min-w-[5.38rem] rounded px-[0.63rem] font-sen"
                          >
                            Bersyarat
                          </Button>
                        </div>
                        <div className="h-[4.75rem] w-[0.06rem] bg-blue_gray-50_02 sm:h-[0.06rem] sm:w-[4.75rem]" />
                        <Text as="p" className="w-[84%] text-[1.00rem] font-normal leading-[140%] sm:w-full">
                          Rumah susun , perkantoran, gedung serba guna, bangunan pendidikan, rumah sakit
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[2.50rem]">
              <div className="flex">
                <Heading
                  size="textxl"
                  as="p"
                  className="self-end !font-notosans text-[1.50rem] font-medium tracking-[0.00rem] !text-indigo-900 md:text-[1.38rem]"
                >
                  {DetailPage?.propertyCardList?.text}
                </Heading>
              </div>
              <div className="flex gap-[1.25rem] md:flex-col">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {DetailPage?.propertyCardList?.data?.map((d, index) => (
                    <DetailListingScreenCardproperty {...d} key={"cards" + index} />
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer1 className="mt-[13.88rem]" />
      <div>
      <MediaPreviewer
        media={DetailPage?.thumbnail}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        onOpen={isOpenMedia}
        onClose={handleCloseMedia}
      />
    </div>
    </div>
  );
}

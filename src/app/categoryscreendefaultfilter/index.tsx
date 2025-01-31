"use client";

import { Button, Img, Text, SelectBox, BreadcrumbLink, Breadcrumb, BreadcrumbItem, Input } from "../../components";
import CategoryScreenDefaultFilterStacklb from "../../components/CategoryScreenDefaultFilterStacklb";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";
import { CloseSVG } from "../../components/Input/close";
import Link from "next/link";
import React, { Suspense } from "react";

const propertyList = [
  {
    lb: "LB",
    p120mtwo: "120m2",
    lt: "LT",
    p155mtwo: "155m2",
    lantaitwentytwo: "Lantai 22, Entire floor, Menara Mandiri, SCBD, Mega Kuningan",
    kuningan: "Jakarta Barat",
    threehundred: "300",
    three: "3",
    one: "1",
    lbOne: "LB",
    p120mtwoOne: "120m2",
    ltOne: "LT",
    p155mtwoOne: "155m2",
    lantaitwentytwo1: "Rumah Dinas Jakarta Selatan, Jln. Abdi Kusuma Bahkti, G20 No. 68, ",
    kuninganOne: "Jakarta Selatan",
    threeOne: "3",
    oneOne: "1",
    ltTwo: "LT",
    p155mtwoTwo: "155m2",
    lantaitwentytwo2: "Tanah Kavling 350m2 , Jakarta Selatan, PPJB siap balik nama",
    kuninganTwo: "Jakarta Selatan",
    lbTwo: "LB",
    p120mtwoTwo: "120m2",
    ltThree: "LT",
    p155mtwoThree: "155m2",
    lantaitwentytwo3: "Rumah Tinggal, LT100m2, dekat Gandaria City, Jakarta Selatan",
    kuninganThree: "Jakarta Selatan",
    threeTwo: "2",
    oneTwo: "1",
    semua: "Semua",
    az: "A-Z",
    za: "Z-A",
    rekomendasi: "Rekomendasi",
    terluas: "Terluas",
  },
  {
    lb: "LB",
    p120mtwo: "120m2",
    lt: "LT",
    p155mtwo: "155m2",
    lantaitwentytwo: "Lantai 22, Entire floor, Menara Mandiri, SCBD, Mega Kuningan",
    kuningan: "Jakarta Barat",
    threehundred: "300",
    three: "3",
    one: "1",
    lbOne: "LB",
    p120mtwoOne: "120m2",
    ltOne: "LT",
    p155mtwoOne: "155m2",
    lantaitwentytwo1: "Rumah Dinas Jakarta Selatan, Jln. Abdi Kusuma Bahkti, G20 No. 68, ",
    kuninganOne: "Jakarta Selatan",
    threeOne: "3",
    oneOne: "1",
    ltTwo: "LT",
    p155mtwoTwo: "155m2",
    lantaitwentytwo2: "Tanah Kavling 350m2 , Jakarta Selatan, PPJB siap balik nama",
    kuninganTwo: "Jakarta Selatan",
    lbTwo: "LB",
    p120mtwoTwo: "120m2",
    ltThree: "LT",
    p155mtwoThree: "155m2",
    lantaitwentytwo3: "Rumah Tinggal, LT100m2, dekat Gandaria City, Jakarta Selatan",
    kuninganThree: "Jakarta Selatan",
    threeTwo: "2",
    oneTwo: "1",
    semua: "Semua",
    az: "A-Z",
    za: "Z-A",
    rekomendasi: "Rekomendasi",
    terluas: "Terluas",
  },
  {
    lb: "LB",
    p120mtwo: "120m2",
    lt: "LT",
    p155mtwo: "155m2",
    lantaitwentytwo: "Lantai 22, Entire floor, Menara Mandiri, SCBD, Mega Kuningan",
    kuningan: "Jakarta Barat",
    threehundred: "300",
    three: "3",
    one: "1",
    lbOne: "LB",
    p120mtwoOne: "120m2",
    ltOne: "LT",
    p155mtwoOne: "155m2",
    lantaitwentytwo1: "Rumah Dinas Jakarta Selatan, Jln. Abdi Kusuma Bahkti, G20 No. 68, ",
    kuninganOne: "Jakarta Selatan",
    threeOne: "3",
    oneOne: "1",
    ltTwo: "LT",
    p155mtwoTwo: "155m2",
    lantaitwentytwo2: "Tanah Kavling 350m2 , Jakarta Selatan, PPJB siap balik nama",
    kuninganTwo: "Jakarta Selatan",
    lbTwo: "LB",
    p120mtwoTwo: "120m2",
    ltThree: "LT",
    p155mtwoThree: "155m2",
    lantaitwentytwo3: "Rumah Tinggal, LT100m2, dekat Gandaria City, Jakarta Selatan",
    kuninganThree: "Jakarta Selatan",
    threeTwo: "2",
    oneTwo: "1",
    semua: "Semua",
    az: "A-Z",
    za: "Z-A",
    rekomendasi: "Rekomendasi",
    terluas: "Terluas",
  },
  {
    lb: "LB",
    p120mtwo: "120m2",
    lt: "LT",
    p155mtwo: "155m2",
    lantaitwentytwo: "Lantai 22, Entire floor, Menara Mandiri, SCBD, Mega Kuningan",
    kuningan: "Jakarta Barat",
    threehundred: "300",
    three: "3",
    one: "1",
    lbOne: "LB",
    p120mtwoOne: "120m2",
    ltOne: "LT",
    p155mtwoOne: "155m2",
    lantaitwentytwo1: "Rumah Dinas Jakarta Selatan, Jln. Abdi Kusuma Bahkti, G20 No. 68, ",
    kuninganOne: "Jakarta Selatan",
    threeOne: "3",
    oneOne: "1",
    ltTwo: "LT",
    p155mtwoTwo: "155m2",
    lantaitwentytwo2: "Tanah Kavling 350m2 , Jakarta Selatan, PPJB siap balik nama",
    kuninganTwo: "Jakarta Selatan",
    lbTwo: "LB",
    p120mtwoTwo: "120m2",
    ltThree: "LT",
    p155mtwoThree: "155m2",
    lantaitwentytwo3: "Rumah Tinggal, LT100m2, dekat Gandaria City, Jakarta Selatan",
    kuninganThree: "Jakarta Selatan",
    threeTwo: "2",
    oneTwo: "1",
    semua: "Semua",
    az: "A-Z",
    za: "Z-A",
    rekomendasi: "Rekomendasi",
    terluas: "Terluas",
  },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function CategoryScreenDefaultFilterPage() {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  return (
    <div className="flex w-full flex-col items-center bg-white-a700">
      <Header className="self-stretch border-b border-solid border-black-900_19 bg-white-a700" />
      <div className="container-xs mt-[1.50rem] md:px-[1.25rem]">
        <div className="flex flex-col gap-[2.63rem]">
          <div className="flex flex-col gap-[1.63rem]">
            <div className="flex gap-[1.00rem] md:flex-col">
              <Input
                color="blue_gray_50"
                name="search"
                placeholder={`Jakarta`}
                value={searchBarValue1}
                onChange={(e) => setSearchBarValue1(e.target.value)}
                prefix={
                  <Img
                    src="img_search_indigo_900.svg"
                    width={20}
                    height={14}
                    alt="Search"
                    className="my-[0.13rem] h-[0.88rem] w-[1.25rem] object-contain"
                  />
                }
                suffix={
                  searchBarValue1?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue1("")} height={14} fillColor="#0c396dff" />
                  ) : null
                }
                className="flex-grow gap-[0.50rem] rounded px-[0.88rem] font-manrope tracking-[0.00rem] text-indigo-900"
              />
              <div className="flex w-[38%] items-center justify-center gap-[1.00rem] md:w-full sm:flex-col">
                <SelectBox
                  shape="round"
                  indicator={
                    <Img
                      src="img_arrowdown.svg"
                      width={16}
                      height={14}
                      alt="Arrow Down"
                      className="h-[0.88rem] w-[1.00rem]"
                    />
                  }
                  name="link_one"
                  placeholder={`Tipe Properti`}
                  options={dropDownOptions}
                  className="flex-grow gap-[1.25rem] rounded border border-solid border-gray-300 px-[0.88rem] font-manrope tracking-[0.00rem]"
                />
                <Button
                  color="white_A700"
                  size="2xl"
                  shape="round"
                  leftIcon={
                    <Img
                      src="img_lets_icons_filter.svg"
                      width={20}
                      height={20}
                      alt="Lets-icons:filter"
                      className="h-[1.25rem] w-[1.25rem] object-contain"
                    />
                  }
                  className="min-w-[5.75rem] gap-[0.25rem] rounded border border-solid border-gray-300 px-[0.94rem] tracking-[0.00rem]"
                >
                  Filter
                </Button>
                <div className="h-[2.88rem] w-[0.13rem] bg-blue_gray-50_02 sm:h-[0.13rem] sm:w-[2.88rem]" />
                <Button
                  color="amber_500"
                  size="2xl"
                  shape="round"
                  className="min-w-[9.13rem] rounded px-[2.13rem] font-manrope font-semibold tracking-[0.00rem] sm:px-[1.25rem]"
                >
                  Cari Aset
                </Button>
              </div>
            </div>
            <Breadcrumb
              separator={
                <Img
                  src="img_frame_427320547.svg"
                  width={7}
                  height={16}
                  alt="Arrow Right"
                  className="h-[1.00rem] w-[0.44rem] object-contain"
                />
              }
              className="flex flex-wrap items-center gap-[0.50rem]"
            >
              <BreadcrumbItem>
                <BreadcrumbLink href="#" as={Link}>
                  <Text
                    size="textxs"
                    as="p"
                    className="!font-notosans text-[0.88rem] font-medium tracking-[0.00rem] !text-indigo-900"
                  >
                    Beranda
                  </Text>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#" as={Link}>
                  <Text
                    size="textxs"
                    as="p"
                    className="!font-notosans text-[0.88rem] font-medium tracking-[0.00rem] !text-indigo-900"
                  >
                    Properti & Aset
                  </Text>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-between gap-[1.25rem] self-stretch">
                <Text as="p" className="!font-manrope text-[1.00rem] font-normal tracking-[0.00rem]">
                  <span>Hasil pencarian “</span>
                  <span className="font-bold">Jakarta” (24)</span>
                </Text>
                <SelectBox
                  shape="round"
                  indicator={
                    <Img
                      src="img_arrowdown_indigo_900_1.svg"
                      width={16}
                      height={14}
                      alt="Arrow Down"
                      className="h-[0.88rem] w-[1.00rem]"
                    />
                  }
                  name="link_three"
                  placeholder={`Rekomendasi`}
                  options={dropDownOptions}
                  className="w-[12%] gap-[1.25rem] rounded border border-solid border-gray-300 px-[0.88rem] font-manrope tracking-[0.00rem]"
                />
              </div>
              <div className="mt-[0.50rem] flex flex-col gap-[2.50rem] self-stretch">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {propertyList.map((d, index) => (
                    <CategoryScreenDefaultFilterStacklb {...d} key={"listlb" + index} className="h-[21.25rem]" />
                  ))}
                </Suspense>
              </div>
              <div className="mt-[5.00rem] flex w-[16%] items-center justify-between gap-[1.25rem] md:w-full">
                <Img
                  src="img_arrow_left_text_disable_1.svg"
                  width={32}
                  height={32}
                  alt="Arrowleft"
                  className="h-[2.00rem] w-[16%] rotate-[-180deg] rounded-[50%]"
                />
                <div className="flex w-[42%] justify-center">
                  <Button
                    color="indigo_900"
                    size="lg"
                    shape="round"
                    className="min-w-[2.50rem] rounded-sm px-[1.00rem] font-manrope font-bold"
                  >
                    1
                  </Button>
                  <div className="flex h-[2.63rem] w-[2.50rem] flex-col items-center justify-center rounded md:h-auto">
                    <Text as="p" className="!font-manrope text-[1.00rem] font-normal !text-text-disable">
                      2
                    </Text>
                  </div>
                </div>
                <Button size="xs" shape="circle" className="w-[2.00rem] rounded-[16px] px-[0.63rem]">
                  <Img src="img_arrow_right.svg" width={4} height={10} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer1 className="mt-[11.63rem] self-stretch" />
    </div>
  );
}

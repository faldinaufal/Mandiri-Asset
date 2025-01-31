"use client";

import { Button, Text, Img, SelectBox, Input } from "../../components";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";
import HomeScreenContent from "../../components/HomeScreenContent";
import { CloseSVG } from "../../components/Input/close";
import PropertyTypesSection from "./PropertyTypesSection";
import RecommendationSection from "./RecommendationSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function HomescreenPage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <div className="flex w-full flex-col items-center bg-white-a700">
      <div className="relative h-[26.13rem] content-center self-stretch md:h-auto">
        <div className="flex-1">
          <div className="relative z-[1] flex h-[23.00rem] flex-col items-center gap-[4.50rem] bg-[url(/images/img_header.png)] bg-cover bg-no-repeat py-[1.38rem] md:h-auto md:gap-[3.38rem] sm:gap-[2.25rem] sm:py-[1.25rem]">
            <Header className="self-stretch" />
            <div className="container-xs mb-[8.00rem] flex flex-col items-center px-[3.50rem] md:px-[1.25rem]">
              <Text
                size="text3xl"
                as="p"
                className="!font-manrope text-[2.25rem] font-normal !text-gray-50_01 md:text-[2.13rem] sm:text-[2.00rem]"
              >
                Temukan Properti Impian Anda hanya di Digital Asset Card
              </Text>
            </div>
          </div>
          <div className="relative mx-[4.50rem] mt-[-3.13rem] h-[6.38rem] bg-gradient md:mx-0" />
        </div>
        <div className="container-xs absolute bottom-[-0.06rem] left-0 right-0 z-[2] flex md:px-[1.25rem]">
          <div className="flex w-full gap-[1.00rem] rounded-lg bg-white-a700 p-[1.50rem] md:flex-col sm:p-[1.25rem]">
            <Input
              color="blue_gray_50"
              name="search"
              placeholder={`Cari Properti ....`}
              value={searchBarValue}
              onChange={(e) => setSearchBarValue(e.target.value)}
              prefix={
                <Img
                  src="img_search.svg"
                  width={20}
                  height={16}
                  alt="Search"
                  className="my-[0.13rem] h-[1.00rem] w-[1.25rem] object-contain"
                />
              }
              suffix={
                searchBarValue?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue("")} height={16} fillColor="#0c396dff" />
                ) : null
              }
              className="flex-grow gap-[0.50rem] rounded px-[0.88rem] font-manrope tracking-[0.00rem] text-text-disable md:px-[1.25rem]"
            />
            <div className="flex w-[40%] items-center justify-center gap-[1.00rem] md:w-full sm:flex-col">
              <SelectBox
                color="gray_300"
                variant="outline"
                shape="round"
                indicator={
                  <Img
                    src="img_arrowdown_indigo_900.svg"
                    width={16}
                    height={16}
                    alt="Arrow Down"
                    className="h-[1.00rem] w-[1.00rem]"
                  />
                }
                name="linkone_one"
                placeholder={`Tipe Properti`}
                options={dropDownOptions}
                className="flex-grow gap-[1.50rem] rounded !border px-[0.88rem] font-manrope tracking-[0.00rem]"
              />
              <div className="flex gap-[0.25rem] rounded border border-solid border-gray-300 bg-white-a700 p-[1.00rem]">
                <Img
                  src="img_lets_icons_filter.svg"
                  width={20}
                  height={20}
                  alt="Letsiconsone"
                  className="h-[1.25rem]"
                />
                <Text as="p" className="text-[1.00rem] font-normal tracking-[0.00rem] !text-indigo-900">
                  Filter
                </Text>
              </div>
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
        </div>
      </div>

      {/* recommendation section */}
      <RecommendationSection />

      {/* property types section */}
      <PropertyTypesSection />
      <div className="container-xs mt-[7.50rem] md:px-[1.25rem]">
        <div className="flex gap-[2.50rem] md:flex-col">
          <HomeScreenContent />
          <HomeScreenContent
            berpengalaman="Terbukti Memberikan Pilihan Aset Terbaik kepada Mitra"
            description="Kami berkomitmen untuk selalu membantu Anda dalam memenuhi administrasi dan dokumen selama 24 jam. Pelayanan terbaik adalah janji kami."
            tentangkami="Hubungi Kami"
          />
        </div>
      </div>

      {/* why choose us section */}
      <WhyChooseUsSection />
      <Footer1 className="mt-[7.00rem] self-stretch" />
    </div>
  );
}

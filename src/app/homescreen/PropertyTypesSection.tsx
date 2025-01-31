import { Text, Heading } from "../../components";
import HomeScreenCategoryasset from "../../components/HomeScreenCategoryasset";
import React, { Suspense } from "react";

const assetCategoriesGrid = [
  { rumahDinasOne: "img_home.svg", rumahdinas: "Rumah Dinas" },
  { rumahDinasOne: "img_gedung.svg", rumahdinas: "Gedung" },
  { rumahDinasOne: "img_tanah.svg", rumahdinas: "Tanah Kosong" },
  { rumahDinasOne: "img_olahraga.svg", rumahdinas: "Sarana Olahraga" },
  { rumahDinasOne: "img_kawasan.svg", rumahdinas: "Kawasan" },
  { rumahDinasOne: "img_villa.svg", rumahdinas: "Villa" },
  { rumahDinasOne: "img_perniagaan.svg", rumahdinas: "Perniagaan" },
  { rumahDinasOne: "img_heritage.svg", rumahdinas: "Warisan Budaya" },
  { rumahDinasOne: "img_lainnya.svg", rumahdinas: "Sarana Lainnya" },
];

export default function PropertyTypesSection() {
  return (
    <>
      {/* property types section */}
      <div className="mt-[7.50rem] self-stretch">
        <div className="rounded-br-lg rounded-tr-lg bg-gray-100_01">
          <div className="flex items-center justify-between gap-[1.25rem] md:flex-col">
            <div className="h-[34.00rem] w-[40%] bg-[url(/images/img_group_16.png)] bg-cover bg-no-repeat py-[4.50rem] md:h-auto md:w-full md:p-[1.25rem]">
              <div className="mb-[13.50rem] flex flex-col items-end gap-[1.00rem]">
                <Heading
                  size="title_large"
                  as="h2"
                  className="w-[80%] !font-manrope text-[2.00rem] font-medium leading-[2.69rem] tracking-[0.00rem] !text-indigo-900 md:w-full md:text-[1.88rem] sm:text-[1.75rem]"
                >
                  Berbagai Jenis Properti Untuk Anda
                </Heading>
                <Text
                  size="textmd"
                  as="p"
                  className="w-[80%] !font-notosans text-[1.13rem] font-normal leading-[150%] tracking-[0.00rem] !text-text-disable md:w-full"
                >
                  Mulai dari rumah, gedung, lahan, hingga kebutuhan untuk ruangan atau lantai bisa Anda temukan.
                </Text>
              </div>
            </div>
            <div className="ml-[7.38rem] mr-[6.25rem] grid w-[58%] grid-cols-3 gap-[0.75rem] md:mx-0 md:grid-cols-2 md:px-[1.25rem] sm:grid-cols-1">
              <Suspense fallback={<div>Loading feed...</div>}>
                {assetCategoriesGrid.map((d, index) => (
                  <HomeScreenCategoryasset {...d} key={"gridview" + index} className="gap-[1.13rem]" />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

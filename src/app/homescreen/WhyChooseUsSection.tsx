import { Text, Heading } from "../../components";
import HomeScreenUspcard from "../../components/HomeScreenUspcard";
import React, { Suspense } from "react";

const documentationGrid = [
  {
    dokumentasi: "img_fi_4603456.svg",
    dokumentasi1: "Dokumentasi Lengkap",
    semuadokumen: "Semua dokumen dan surat-surat dari aset kami terjamin lengkap sesuai aturan yang berlaku",
  },
  {
    dokumentasi: "img_fi_2020773.svg",
    dokumentasi1: "Layanan Konsultasi Bisnis",
    semuadokumen: "Semua dokumen dan surat-surat dari aset kami terjamin lengkap sesuai aturan yang berlaku",
  },
  {
    dokumentasi: "img_fi_9663935.svg",
    dokumentasi1: "Partnership Program",
    semuadokumen: "Semua dokumen dan surat-surat dari aset kami terjamin lengkap sesuai aturan yang berlaku",
  },
  {
    dokumentasi: "img_fi_4603456.svg",
    dokumentasi1: "Dokumentasi Lengkap",
    semuadokumen: "Semua dokumen dan surat-surat dari aset kami terjamin lengkap sesuai aturan yang berlaku",
  },
  {
    dokumentasi: "img_fi_2020773.svg",
    dokumentasi1: "Layanan Konsultasi Bisnis",
    semuadokumen: "Semua dokumen dan surat-surat dari aset kami terjamin lengkap sesuai aturan yang berlaku",
  },
  {
    dokumentasi: "img_fi_9663935.svg",
    dokumentasi1: "Partnership Program",
    semuadokumen: "Semua dokumen dan surat-surat dari aset kami terjamin lengkap sesuai aturan yang berlaku",
  },
];

export default function WhyChooseUsSection() {
  return (
    <>
      {/* why choose us section */}
      <div className="mt-[7.50rem] flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col items-center gap-[2.38rem] md:px-[1.25rem]">
          <div className="flex w-[40%] flex-col gap-[0.88rem] md:w-full">
            <div className="flex justify-center px-[3.50rem] md:px-[1.25rem]">
              <Heading
                size="title_large"
                as="h2"
                className="self-end !font-manrope text-[2.00rem] font-medium tracking-[0.00rem] !text-indigo-900 md:text-[1.88rem] sm:text-[1.75rem]"
              >
                Kenapa Memilih Aset Card
              </Heading>
            </div>
            <Text
              as="p"
              className="text-center !font-notosans text-[1.00rem] font-normal leading-[140%] !text-text-disable"
            >
              kami telah membantu ribuan pelanggan menemukan properti impian yang sesuai dengan kebutuhan mereka.
            </Text>
          </div>
          <div className="grid grid-cols-3 justify-center gap-[1.38rem] self-stretch md:grid-cols-2 sm:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {documentationGrid.map((d, index) => (
                <HomeScreenUspcard {...d} key={"griddokumentasi" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

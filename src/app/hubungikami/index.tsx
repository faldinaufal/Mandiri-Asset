"use client";

import { Button, Text, Img, Input, SelectBox, Heading } from "../../components";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function HubungiKamiPage() {
  return (
    <div className="flex w-full flex-col items-center gap-[4.38rem] bg-white-a700 md:gap-[3.25rem] sm:gap-[2.19rem]">
      <Header className="self-stretch border-b border-solid border-black-900_19 bg-white-a700" />
      <div className="container-xs md:px-[1.25rem]">
        <div className="flex items-start md:flex-col">
          <div className="flex w-full flex-col items-start gap-[0.88rem]">
            <Heading
              size="text2xl"
              as="h1"
              className="mt-[0.25rem] !font-manrope text-[2.00rem] font-medium tracking-[0.00rem] !text-indigo-900 md:text-[1.88rem] sm:text-[1.75rem]"
            >
              Hubungi Kami
            </Heading>
            <Text as="p" className="text-[1.00rem] font-normal tracking-[0.00rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </Text>
            <div className="flex flex-col gap-[1.00rem] self-stretch">
              <div className="mt-[1.50rem] flex gap-[1.00rem]">
                <Img
                  src="img_material_symbol.svg"
                  width={20}
                  height={20}
                  alt="Materialsymbol"
                  className="h-[1.25rem]"
                />
                <Text as="p" className="self-end !font-notosans text-[1.00rem] font-normal tracking-[0.00rem]">
                  halo@digitalAsetcard.co.id
                </Text>
              </div>
              <div className="flex items-center gap-[1.00rem]">
                <Img
                  src="img_material_symbols_light_call.svg"
                  width={20}
                  height={20}
                  alt="Materialone"
                  className="h-[1.25rem]"
                />
                <Text as="p" className="!font-notosans text-[1.00rem] font-normal tracking-[0.00rem]">
                  (021) 5299-7777
                </Text>
              </div>
              <div className="flex items-start gap-[0.88rem]">
                <Img
                  src="img_material_symbol_gray_900_01.svg"
                  width={20}
                  height={20}
                  alt="Materialsymbol"
                  className="h-[1.25rem]"
                />
                <Text as="p" className="self-center !font-notosans text-[1.00rem] font-normal tracking-[0.00rem]">
                  <>
                    Jl. Jenderal Gatot Subroto Kav. 36-38
                    <br />
                    Jakarta 12190 Indonesia
                  </>
                </Text>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-end self-center">
            <div className="flex w-[94%] flex-col gap-[1.25rem] rounded-[16px] bg-gray-100_01 px-[1.38rem] py-[1.50rem] md:w-full sm:p-[1.25rem]">
              <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                <Text as="p" className="!font-notosans text-[1.00rem] font-medium tracking-[0.00rem]">
                  <span className="text-gray-900_01">lbl_nama_perusahaan</span>
                  <span className="text-red-500">lbl</span>
                </Text>
                <Input
                  size="sm"
                  shape="round"
                  name="inputone_one"
                  placeholder={`e.g PT. Sukamaju, Tbk.`}
                  className="self-stretch rounded-lg border border-solid border-gray-200 px-[0.75rem] font-light tracking-[0.00rem]"
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                <Text as="p" className="!font-notosans text-[1.00rem] font-medium tracking-[0.00rem]">
                  Jenis Perusahaan
                </Text>
                <SelectBox
                  size="sm"
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
                  placeholder={`-Pilih Jenis Perusahaan-`}
                  options={dropDownOptions}
                  className="gap-[1.00rem] self-stretch rounded-lg border border-solid border-gray-200 px-[0.75rem] font-light tracking-[0.00rem] !text-gray-900_01"
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                <Text as="p" className="!font-notosans text-[1.00rem] font-medium tracking-[0.00rem]">
                  <span className="text-gray-900_01">lbl_nama_lengkap2</span>
                  <span className="text-red-500">lbl</span>
                </Text>
                <Input
                  size="sm"
                  shape="round"
                  name="inputfive_one"
                  placeholder={`e.g Indra Herlambang`}
                  className="self-stretch rounded-lg border border-solid border-gray-200 px-[0.75rem] font-light tracking-[0.00rem]"
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                <Text as="p" className="!font-notosans text-[1.00rem] font-medium tracking-[0.00rem]">
                  <span className="text-gray-900_01">lbl_email2</span>
                  <span className="text-red-600">lbl</span>
                </Text>
                <Input
                  size="sm"
                  shape="round"
                  type="email"
                  name="email"
                  placeholder={`email@gmail.com`}
                  className="self-stretch rounded-lg border border-solid border-gray-200 px-[0.75rem] font-light tracking-[0.00rem]"
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                <Text as="p" className="!font-notosans text-[1.00rem] font-medium tracking-[0.00rem]">
                  <span className="text-gray-900_01">lbl_nomor_whatsapp2</span>
                  <span className="text-red-500">lbl</span>
                </Text>
                <Input
                  size="sm"
                  shape="round"
                  name="price"
                  placeholder={`08XXXXXXXXXX`}
                  className="self-stretch rounded-lg border border-solid border-gray-200 px-[0.75rem] font-light tracking-[0.00rem]"
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                <Text as="p" className="!font-notosans text-[1.00rem] font-medium tracking-[0.00rem]">
                  Catatan
                </Text>
                <Input
                  size="sm"
                  shape="round"
                  name="inputseven_one"
                  placeholder={`e.g Rumah Dinas`}
                  className="self-stretch rounded-lg border border-solid border-gray-200 px-[0.75rem] font-light tracking-[0.00rem]"
                />
              </div>
              <div className="flex items-start justify-center gap-[0.50rem] sm:flex-col">
                <Img
                  src="img_weui_info_filled.svg"
                  width={24}
                  height={24}
                  alt="Weuiinfoone"
                  className="h-[1.50rem] sm:w-full"
                />
                <Text
                  size="textxs"
                  as="p"
                  className="w-[94%] self-center !font-notosans text-[0.88rem] font-medium leading-[150%] tracking-[0.00rem] !text-text-disable sm:w-full"
                >
                  Dengan memilih tanya marketing, Anda akan kami hubungi kembali via WhatsApp untuk mendapatkan
                  informasi properti ini.
                </Text>
              </div>
              <Button
                color="amber_600"
                size="2xl"
                className="self-stretch rounded-lg px-[2.13rem] font-semibold tracking-[0.00rem] sm:px-[1.25rem]"
              >
                Kirim
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer1 className="self-stretch" />
    </div>
  );
}

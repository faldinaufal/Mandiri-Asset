import { Text, Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  dokumentasi?: string;
  dokumentasi1?: React.ReactNode;
  semuadokumen?: React.ReactNode;
}

export default function HomeScreenUspcard({
  dokumentasi = "img_fi_4603456.svg",
  dokumentasi1 = "Dokumentasi Lengkap",
  semuadokumen = "Semua dokumen dan surat-surat dari aset kami terjamin lengkap sesuai aturan yang berlaku",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start justify-center w-full px-[1.50rem] py-[1.88rem] sm:p-[1.25rem] bg-white-a700 shadow-xs rounded-lg`}
    >
      <Img src={dokumentasi} width={48} height={48} alt="Dokumentasi" className="h-[3.00rem]" />
      <Heading size="textlg" as="p" className="mt-[0.63rem] !font-manrope text-[1.25rem] font-medium !text-indigo-900">
        {dokumentasi1}
      </Heading>
      <Text
        size="textxs"
        as="p"
        className="mt-[0.25rem] w-full !font-notosans text-[0.88rem] font-light leading-[1.19rem] !text-text-disable"
      >
        {semuadokumen}
      </Text>
    </div>
  );
}

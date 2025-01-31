import { Text, Heading, Img } from "../../components";
import Link from "next/link";
import React from "react";

export default function FooterSection() {
  return (
    <>
      {/* footer section */}
      <div>
        <div className="flex flex-col items-center gap-[1.00rem]">
          <div className="container-xs flex flex-col gap-[1.38rem] md:px-[1.25rem]">
            <div className="flex items-center justify-between gap-[1.25rem] md:flex-col">
              <div className="flex flex-col items-start gap-[0.38rem]">
                <Img
                  src="img_footer_logo.png"
                  width={146}
                  height={36}
                  alt="Footerlogoone"
                  className="mt-[1.00rem] h-[2.25rem] w-[9.13rem] object-contain"
                />
                <Text as="p" className="text-[1.00rem] font-medium tracking-[0.00rem] !text-indigo-900">
                  PT. Digital Asset Card
                </Text>
              </div>
              <ul className="!mb-[1.00rem] flex w-[54%] items-center justify-between gap-[1.25rem] self-end px-[0.75rem] md:w-full sm:flex-col">
                <li>
                  <Link href="#" className="ml-[1.50rem] self-end md:ml-0">
                    <Heading
                      size="textlg"
                      as="p"
                      className="text-[1.25rem] font-medium tracking-[0.00rem] !text-indigo-900_01"
                    >
                      Beranda
                    </Heading>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <div className="flex w-[76%] flex-wrap justify-between gap-[1.25rem] self-end sm:w-full">
                      <Heading
                        size="textlg"
                        as="p"
                        className="text-[1.25rem] font-medium tracking-[0.00rem] !text-indigo-900_01"
                      >
                        Properti & Aset
                      </Heading>
                      <Heading
                        size="textlg"
                        as="p"
                        className="text-[1.25rem] font-medium tracking-[0.00rem] !text-indigo-900_01"
                      >
                        Tentang Kami
                      </Heading>
                      <Heading
                        size="textlg"
                        as="p"
                        className="text-[1.25rem] font-medium tracking-[0.00rem] !text-indigo-900_01"
                      >
                        Hubungi Kami
                      </Heading>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <Text
              as="p"
              className="w-[26%] !font-notosans text-[1.00rem] font-normal leading-[150%] tracking-[0.00rem] !text-text-disable md:w-full"
            >
              <>
                Jl. Jenderal Gatot Subroto Kav. 36-38
                <br />
                Jakarta 12190 Indonesia
              </>
            </Text>
          </div>
          <div className="flex justify-center self-stretch bg-gray-200_02 py-[0.88rem]">
            <div className="container-xs flex justify-center self-end px-[3.50rem] md:px-[1.25rem]">
              <Text as="p" className="text-[1.00rem] font-normal tracking-[0.00rem] !text-gray-700">
                Berizin dan Diawasi oleh Otoritas Jasa Keuangan dan Bank Indonesia, Serta Merupakan Peserta Penjaminan
                LPS
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

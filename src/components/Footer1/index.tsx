import { Text, Heading } from "./..";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export default function Footer1({ ...props }: Props) {
  return (
    <footer {...props} className={`${props.className} flex bg-gray-100_01`}>
      <div className="mt-[0.75rem] w-full">
        {/* home header section */}
        <div className="flex justify-center">
          <div className="container-xs flex justify-center md:px-[1.25rem]">
            <div className="flex w-full flex-col gap-[1.38rem]">
              <div className="flex items-center justify-between gap-[1.25rem] md:flex-col">
                <div className="flex flex-col items-start gap-[0.38rem]">
                  <Heading
                    size="headingxl"
                    as="h3"
                    className="mt-[1.00rem] text-[1.75rem] font-semibold tracking-[0.00rem] !text-indigo-900 md:text-[1.63rem] sm:text-[1.50rem]"
                  >
                    Asset Card.
                  </Heading>
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
          </div>
        </div>
        <div className="mt-[1.00rem] flex justify-center bg-gray-200_02 py-[0.88rem]">
          <div className="container-xs flex justify-center self-end px-[3.50rem] md:px-[1.25rem]">
            <Text as="p" className="text-[1.00rem] font-normal tracking-[0.00rem] !text-gray-700">
              Berizin dan Diawasi oleh Otoritas Jasa Keuangan dan Bank Indonesia, Serta Merupakan Peserta Penjaminan LPS
            </Text>
          </div>
        </div>
        <div className="flex justify-center bg-indigo-900 py-[0.38rem]">
          <div className="container-xs flex items-center justify-between gap-[1.25rem] md:px-[1.25rem] sm:flex-col">
            <Text
              size="textxs"
              as="p"
              className="self-end text-[0.88rem] font-medium tracking-[0.00rem] !text-gray-50_01"
            >
              © 2024 PT. Digital Asset Card
            </Text>
            <div className="flex w-[20%] justify-center gap-[0.75rem] sm:w-full">
              <div className="flex w-full justify-center border-b border-solid border-gray-50_01">
                <Text
                  size="textxs"
                  as="p"
                  className="self-end text-[0.88rem] font-medium tracking-[0.00rem] !text-gray-50_01"
                >
                  Syarat & Ketentuan.
                </Text>
              </div>
              <div className="flex w-full justify-center border-b border-solid border-gray-50_01">
                <Text
                  size="textxs"
                  as="p"
                  className="self-end text-[0.88rem] font-medium tracking-[0.00rem] !text-gray-50_01"
                >
                  Kebijakan Privasi.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

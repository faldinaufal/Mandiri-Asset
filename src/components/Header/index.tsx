import { Text, Heading, Img } from "./..";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  return (
    <header {...props} className={`${props.className} flex justify-center items-center py-[1.00rem]`}>
      <div className="container-xs flex items-center justify-between gap-[1.25rem] md:flex-col md:px-[1.25rem]">
        <Img
          src="img_settings.svg"
          width={96}
          height={40}
          alt="Settingsone"
          className="h-[2.50rem] w-[8%] object-contain md:w-full"
        />
        <div className="mb-[0.38rem] mr-[1.00rem] flex w-[48%] items-center justify-between gap-[1.25rem] self-end md:mr-0 md:w-full sm:flex-col">
          <ul className="flex flex-wrap gap-[2.00rem]">
            <li>
              <Link href="#">
                <Heading
                  size="headings"
                  as="h6"
                  className="!font-manrope text-[1.00rem] font-semibold tracking-[0.00rem] !text-gray-50_01"
                >
                  Beranda
                </Heading>
              </Link>
            </li>
            <li>
              <Link href="#" className="cursor-pointer">
                <Text
                  as="p"
                  className="!font-manrope text-[1.00rem] font-light tracking-[0.00rem] !text-gray-50_01 hover:font-semibold"
                >
                  Properti & Aset
                </Text>
              </Link>
            </li>
            <li>
              <Link href="#" className="cursor-pointer">
                <Text
                  as="p"
                  className="!font-manrope text-[1.00rem] font-light tracking-[0.00rem] !text-gray-50_01 hover:font-semibold"
                >
                  Tentang Kami
                </Text>
              </Link>
            </li>
            <li>
              <Link href="#" className="cursor-pointer">
                <Text
                  as="p"
                  className="!font-manrope text-[1.00rem] font-light tracking-[0.00rem] !text-gray-50_01 hover:font-semibold"
                >
                  Hubungi Kami
                </Text>
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-[0.50rem]">
            <Heading as="p" className="!font-manrope text-[0.88rem] font-semibold !text-amber-600">
              IND
            </Heading>
            <div className="h-[1.00rem] w-[0.06rem] bg-text-disable" />
            <Text size="textxs" as="p" className="!font-manrope text-[0.88rem] font-light !text-text-disable">
              EN
            </Text>
          </div>
        </div>
      </div>
    </header>
  );
}

import { Text, Heading } from "../../components";
import SettingsIcon from "../../components/SettingsIcon";
import React, { Suspense } from "react";

export default function TrustedPartnersSection() {
  return (
    <>
      {/* trusted partners section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col items-center gap-[2.88rem] md:px-[1.25rem]">
          <div className="flex flex-col items-center gap-[0.88rem] px-[3.50rem] md:px-[1.25rem]">
            <Heading
              size="text2xl"
              as="h2"
              className="mt-[0.25rem] !font-manrope text-[2.00rem] font-medium tracking-[0.00rem] !text-indigo-900 md:text-[1.88rem] sm:text-[1.75rem]"
            >
              Mitra Terpercaya Kami
            </Heading>
            <Text as="p" className="!font-notosans text-[1.00rem] font-normal !text-text-disable">
              Bergabung dengan Kami untuk Tumbuh Bersama.
            </Text>
          </div>
          <div className="flex gap-[0.88rem] self-stretch md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {[...Array(5)].map((d, index) => (
                <SettingsIcon key={"aboutpage" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

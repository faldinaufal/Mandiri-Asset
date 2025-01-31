import { Text } from "../../components";
import Header from "../../components/Header";
import FooterSection from "./FooterSection";
import PrivacyPolicySection from "./PrivacyPolicySection";
import React from "react";

export default function SnKPage() {
  return (
    <div className="flex w-full flex-col gap-[4.00rem] bg-white-a700 sm:gap-[2.00rem]">
      <Header className="border-b border-solid border-black-900_19 bg-white-a700" />

      {/* privacy policy section */}
      <PrivacyPolicySection />
      <footer className="flex bg-gray-100_01">
        <div className="mt-[0.75rem] w-full">
          {/* footer section */}
          <FooterSection />
          <div className="flex justify-center bg-indigo-900 py-[0.38rem]">
            <div className="container-xs flex items-center justify-between gap-[1.25rem] md:px-[1.25rem] sm:flex-col">
              <Text
                size="textxs"
                as="p"
                className="self-end text-[0.88rem] font-medium tracking-[0.00rem] !text-gray-50_01"
              >
                © 2024 PT. Digital Asset Card
              </Text>
              <div className="flex flex-wrap gap-[0.75rem]">
                <Text
                  size="textxs"
                  as="p"
                  className="self-end text-[0.88rem] font-medium tracking-[0.00rem] !text-gray-50_01"
                >
                  Syarat & Ketentuan.
                </Text>
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
      </footer>
    </div>
  );
}

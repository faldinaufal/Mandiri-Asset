import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";
import AboutUsSection from "./AboutUsSection";
import TrustedPartnersSection from "./TrustedPartnersSection";
import React from "react";

export default function AboutpagePage() {
  return (
    <div className="w-full bg-white-a700">
      <Header className="border-b border-solid border-black-900_19 bg-white-a700" />
      <div className="mt-[2.50rem] flex flex-col gap-[6.50rem] md:gap-[4.88rem] sm:gap-[3.25rem]">
        {/* about us section */}
        <AboutUsSection />

        {/* trusted partners section */}
        <TrustedPartnersSection />
      </div>
      <Footer1 className="mt-[7.50rem]" />
    </div>
  );
}

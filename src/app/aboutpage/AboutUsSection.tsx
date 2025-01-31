import { Heading, Text, Img } from "../../components";
import React from "react";

export default function AboutUsSection() {
  return (
    <>
      {/* about us section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col gap-[5.25rem] md:gap-[3.94rem] md:px-[1.25rem] sm:gap-[2.63rem]">
          <div className="mx-[14.63rem] flex flex-col items-center justify-center gap-[0.75rem] md:mx-0">
            <Text
              size="text3xl"
              as="p"
              className="!font-manrope text-[2.25rem] font-medium tracking-[0.00rem] !text-indigo-900 md:text-[2.13rem] sm:text-[2.00rem]"
            >
              Sekilas Tentang Kami
            </Text>
            <Text as="p" className="!font-roboto text-[1.00rem] font-normal !text-text-disable">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </Text>
          </div>
          <div className="flex flex-col gap-[4.63rem] md:gap-[3.44rem] sm:gap-[2.31rem]">
            <Img
              src="img_frame_427320581.png"
              width={1236}
              height={454}
              alt="Image"
              className="h-[28.38rem] rounded-lg object-cover"
            />
            <div className="flex items-start md:flex-col">
              <div className="flex flex-1 flex-col items-start justify-center gap-[0.88rem] md:self-stretch">
                <Heading size="headings" as="h1" className="!font-manrope text-[1.00rem] font-semibold !text-blue-700">
                  Tentang Kami
                </Heading>
                <Heading
                  size="text2xl"
                  as="h2"
                  className="w-[88%] !font-manrope text-[2.00rem] font-medium leading-[140%] tracking-[0.00rem] !text-indigo-900 md:w-full md:text-[1.88rem] sm:text-[1.75rem]"
                >
                  Tentang Digital Aset Card dan Kontribusinya di Industri Properti
                </Heading>
              </div>
              <Text
                as="p"
                className="w-[46%] self-center text-[1.00rem] font-normal leading-[150%] tracking-[0.00rem] md:w-full"
              >
                <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet
                  augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac
                  adipiscing velit non nulla in amet pellentesque.
                  <br />
                  <br />
                  Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet
                  pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec, habitasse
                  vulputate. Eget dictum quis est sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu
                  aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum cras porta. <br />
                  <br />
                  Sed elementum, sed dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit sagittis in eleifend
                  dignissim. Natoque mauris cras molestie velit. Maecenas eget adipiscing quisque viverra lectus arcu,
                  tincidunt ultrices pellentesque.
                </>
              </Text>
            </div>
          </div>
          <div className="flex items-center md:flex-col">
            <Img
              src="img_banner.png"
              width={578}
              height={370}
              alt="Bannerone"
              className="h-[23.13rem] w-[46%] rounded-lg object-contain md:w-full"
            />
            <div className="flex flex-1 flex-col items-end gap-[1.50rem] md:self-stretch">
              <div className="flex w-[88%] flex-col items-start gap-[0.88rem] md:w-full">
                <Heading
                  size="text2xl"
                  as="h3"
                  className="mt-[0.25rem] !font-manrope text-[2.00rem] font-medium tracking-[0.00rem] !text-indigo-900 md:text-[1.88rem] sm:text-[1.75rem]"
                >
                  Pencapaian Kami Selama Ini
                </Heading>
                <Text as="p" className="w-full text-[1.00rem] font-normal leading-[150%] tracking-[0.00rem]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet
                  augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac
                  adipiscing velit non nulla in amet pellentesque.
                </Text>
              </div>
              <div className="flex justify-center self-stretch p-[0.38rem]">
                <div className="flex flex-col items-start gap-[0.38rem]">
                  <Heading
                    size="heading2xl"
                    as="h4"
                    className="text-[3.00rem] font-semibold !text-indigo-900 md:text-[2.75rem] sm:text-[2.38rem]"
                  >
                    500+
                  </Heading>
                  <Heading
                    size="headings"
                    as="h5"
                    className="!font-manrope text-[1.00rem] font-semibold !text-text-disable"
                  >
                    Projects completed
                  </Heading>
                </div>
                <div className="flex flex-col items-start gap-[0.38rem]">
                  <Heading
                    size="heading2xl"
                    as="h6"
                    className="text-[3.00rem] font-semibold !text-indigo-900 md:text-[2.75rem] sm:text-[2.38rem]"
                  >
                    120%
                  </Heading>
                  <Heading
                    size="headings"
                    as="h6"
                    className="!font-manrope text-[1.00rem] font-semibold !text-text-disable"
                  >
                    Year on year growth
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { Img } from "./..";
import React from "react";

interface Props {
  className?: string;
}

export default function SettingsIcon({ ...props }: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center w-[20%] md:w-full p-[1.50rem] sm:p-[1.25rem] bg-gray-100_01 rounded`}
    >
      <Img
        src="img_settings_blue_gray_800.svg"
        width={100}
        height={50}
        alt="Settingsone"
        className="h-[3.13rem] w-[52%] object-contain"
      />
    </div>
  );
}

import React from "react";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded",
} as const;
const variants = {
  fill: {
    gray_200_01: "bg-gray-200_01 shadow-sm",
    blue_gray_50_02: "bg-blue_gray-50_02",
    white_A700: "bg-white-a700 text-indigo-900",
    indigo_900: "bg-indigo-900 shadow-md text-gray-50_01",
    gray_50: "bg-gray-50 text-indigo-900",
    blue_gray_50_01: "bg-blue_gray-50_01 text-text-disable",
    amber_600: "bg-amber-600 text-indigo-900",
    amber_500: "bg-amber-500 text-indigo-900",
    gray_50_01: "bg-gray-50_01 text-gray-900_01",
    green_300: "bg-green-300 text-white-a700",
    yellow_700: "bg-yellow-700 text-white-a700",
    blue_50: "bg-blue-50 text-gray-900",
  },
  outline: {
    text_disable: "border-text-disable border border-solid",
    blue_gray_50_02: "border-blue_gray-50_02 border border-solid text-gray-900_01",
  },
} as const;
const sizes = {
  md: "h-[2.50rem] px-[0.75rem]",
  xl: "h-[3.00rem] px-[0.88rem] text-[1.00rem]",
  lg: "h-[2.63rem] px-[1.00rem] text-[1.00rem]",
  xs: "h-[2.00rem] px-[0.63rem]",
  "2xl": "h-[3.38rem] px-[2.13rem] text-[1.00rem]",
  sm: "h-[2.25rem] px-[0.63rem] text-[0.88rem]",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "blue_gray_50_02",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };

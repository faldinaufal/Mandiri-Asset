"use client";
import React from "react";

const shapes = {
  round: "rounded-lg",
} as const;

const variants = {
  fill: {
    blue_gray_50: "bg-blue_gray-50",
    white_A700: "bg-white-a700 text-text-disable",
  },
} as const;

const sizes = {
  sm: "h-[4.00rem] px-[0.75rem] text-[1.00rem]",
  xs: "h-[3.38rem] px-[0.88rem] text-[1.00rem]",
} as const;

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "prefix" | "size"> &
  Partial<{
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "xs",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text tracking-[0.00rem] text-[1.00rem]  ${shape && shapes[shape]} ${variant && (variants[variant]?.[color as keyof (typeof variants)[typeof variant]] || variants[variant])} ${size && sizes[size]}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
        {!!suffix && suffix}
      </label>
    );
  },
);

export { Input };

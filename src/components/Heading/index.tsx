import React from "react";

const sizes = {
  title_large: "tracking-[0.00rem] font-manrope text-[2.00rem] font-medium md:text-[1.88rem] sm:text-[1.75rem]",
  textlg: "text-[1.25rem] font-medium",
  textxl: "text-[1.50rem] font-medium md:text-[1.38rem]",
  text2xl: "text-[2.00rem] font-medium md:text-[1.88rem] sm:text-[1.75rem]",
  headingxs: "text-[0.88rem] font-semibold",
  headings: "text-[1.00rem] font-semibold",
  headingmd: "text-[1.13rem] font-semibold",
  headinglg: "text-[1.50rem] font-semibold md:text-[1.38rem]",
  headingxl: "text-[1.75rem] font-semibold md:text-[1.63rem] sm:text-[1.50rem]",
  heading2xl: "text-[3.00rem] font-semibold md:text-[2.75rem] sm:text-[2.38rem]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "headingxs",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-gray-900_01 font-ibmplexsans ${className} ${sizes[size] as keyof typeof sizes}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };

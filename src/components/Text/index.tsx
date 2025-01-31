import React from "react";

const sizes = {
  textxs: "text-[0.88rem] font-normal",
  texts: "text-[1.00rem] font-normal",
  textmd: "text-[1.13rem] font-normal",
  text3xl: "text-[2.25rem] font-normal md:text-[2.13rem] sm:text-[2.00rem]",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "texts",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-gray-900_01 font-ibmplexsans ${className} ${sizes[size as keyof typeof sizes]} `}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

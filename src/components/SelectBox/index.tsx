"use client";
import React from "react";
import Select, { Props } from "react-select";

const shapes = {
  round: "rounded",
} as const;
const variants = {
  outline: {
    gray_300: "border-gray-300 border border-solid text-indigo-900",
  },
  fill: {
    white_A700: "bg-white-a700 text-indigo-900",
  },
} as const;
const sizes = {
  sm: "h-[4.00rem] px-[0.75rem] text-[1.00rem]",
  xs: "h-[3.38rem] px-[0.88rem] text-[1.00rem]",
} as const;

// Define valid combinations of variant and color
type VariantColorMap = {
  [K in keyof typeof variants]: keyof (typeof variants)[K];
};

type selectOptionType = { value: string; label: React.ReactNode };
type SelectProps = Omit<Props, "getOptionLabel"> &
  Partial<{
    className: string;
    options: selectOptionType[];
    isSearchable: boolean;
    isMulti: boolean;
    onChange: (option: any) => void;
    value: string;
    indicator: React.ReactElement;
    getOptionLabel: (e: any) => string;
    children: React.ReactNode;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: VariantColorMap[keyof VariantColorMap];
  }>;

const SelectBox = React.forwardRef<any, SelectProps>(
  (
    {
      children,
      className = "",
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      shape,
      variant = "fill",
      size = "xs",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    const [menuPortalTarget, setMenuPortalTarget] = React.useState<HTMLElement | null>(null);

    React.useEffect(() => {
      setMenuPortalTarget(document.body);
    }, []);

    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className} flex ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]}`}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          styles={{
            indicatorsContainer: (provided) => ({
              ...provided,
              padding: undefined,
              flexShrink: undefined,
              width: "max-content",
              "& > div": { padding: 0 },
            }),
            container: (provided) => ({
              ...provided,
              zIndex: 0,
              alignItems: "center",
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "none !important",
              minHeight: "auto",
              width: "100%",
              flexWrap: undefined,
              "&:hover": {
                border: "0 !important",
              },
            }),
            input: (provided) => ({
              ...provided,
              color: "inherit",
            }),
            option: (provided, state) => ({
              ...provided,
              display: "flex",
              minWidth: "max-content",
              width: "100%",
              backgroundColor: state.isSelected ? "#fbfbfb" : "transparent",
              color: state.isSelected ? "#212121" : "inherit",
              "&:hover": {
                backgroundColor: "#fbfbfb",
                color: "#212121",
              },
            }),
            singleValue: (provided) => ({
              ...provided,
              display: "flex",
              marginLeft: undefined,
              marginRight: undefined,
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: 0,
              display: "flex",
              flexWrap: undefined,
            }),
            placeholder: (provided) => ({
              ...provided,
              margin: 0,
            }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
            menu: (base) => ({ ...base, minWidth: "max-content", width: "max-content" }),
          }}
          menuPortalTarget={menuPortalTarget}
          closeMenuOnScroll={(event: any) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
        {children}
      </>
    );
  },
);

export { SelectBox };

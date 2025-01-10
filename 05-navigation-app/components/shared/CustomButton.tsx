import React from "react";
import { Pressable, PressableProps, Text, View } from "react-native";

interface Props extends PressableProps {
  children?: string;
  bg?: "primary" | "secondary" | "secondary-100" | "secondary-200" | "terciary";
  color?:
    | "primary"
    | "secondary"
    | "secondary-100"
    | "secondary-200"
    | "terciary"
    | "default-light"
    | "default-dark";
  variant?: "text" | "contained";
  clasName?: string;
}

const CustomButton = React.forwardRef(
  (
    {
      bg = "primary",
      color = "default-light",
      children = "My button",
      variant = "contained",
      clasName,
      ...rest
    }: Props,
    ref: React.Ref<View>
  ) => {
    const btnBgColor = {
      primary: "bg-primary",
      secondary: "bg-secondary",
      "secondary-100": "bg-secondary-100",
      "secondary-200": "bg-secondary-200",
      terciary: "bg-terciary",
    }[bg];

    let btnTextColor = {
      primary: "text-primary",
      secondary: "text-secondary",
      "secondary-100": "text-secondary-100",
      "secondary-200": "text-secondary-200",
      terciary: "text-terciary",
      "default-light": "text-default-light",
      "default-dark": "text-default-dark",
    }[color];

    if (variant === "text") {
      return (
        <Pressable className={`p-3 ${clasName}`} {...rest} ref={ref}>
          <Text
            className={`text-xl text-center font-work-medium ${btnTextColor}`}
          >
            {children}
          </Text>
        </Pressable>
      );
    }

    return (
      <Pressable
        className={`p-3 rounded-md ${btnBgColor} active:opacity-90 ${clasName}`}
        {...rest}
        ref={ref}
      >
        <Text
          className={`text-xl text-center font-work-medium ${btnTextColor}`}
        >
          {children}
        </Text>
      </Pressable>
    );
  }
);

export default CustomButton;

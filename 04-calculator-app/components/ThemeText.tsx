import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import { View, Text, type TextProps } from "react-native";

interface Props extends TextProps {
  //   children: string; ya contenido
  variant?: "h1" | "h2";
}

const ThemeText = ({ children, variant = "h1", ...rest }: Props) => {
  return (
    <View>
      <Text
        style={[
          { color: "white", fontFamily: "SpaceMono" },
          variant === "h1" && globalStyles.mainResult,
          variant === "h2" && globalStyles.subResult,
        ]}
        numberOfLines={1}
        adjustsFontSizeToFit
        {...rest}
      >
        {children}
      </Text>
    </View>
  );
};

export default ThemeText;

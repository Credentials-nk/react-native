import { View } from "react-native";
import { Buttons } from "@/constants/Buttons";
import { globalStyles } from "@/styles/global-styles";
import { useCalculator } from "@/hooks/useCalculator";
import CalculatorBotton from "@/components/CalculatorBotton";
import ThemeText from "@/components/ThemeText";

const CalculatorApp = () => {
  const { formula, number, prevNumber, onPress } = useCalculator();

  return (
    // Reults
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText>{formula}</ThemeText>

        {formula !== prevNumber && (
          <ThemeText variant="h2">{prevNumber}</ThemeText>
        )}
      </View>

      {/* Botton Files */}
      {Buttons.map((group, i) => (
        <View key={i} style={globalStyles.row}>
          {group.map((button, j) => (
            <CalculatorBotton
              key={j}
              label={button.label}
              onPress={() => onPress(button.target, button.label)}
              blackText={button.blackText}
              color={button.color}
              doubleSize={button.doubleSize}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default CalculatorApp;

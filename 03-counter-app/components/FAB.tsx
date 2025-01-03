import { Pressable, StyleSheet, Text } from "react-native";

interface Props {
  label: string;
  position?: "left" | "right";
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({
  label,
  position = "right",
  onPress,
  onLongPress,
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.floatingButton,
        position === "left" ? styles.positionLeft : styles.positionRight,
        pressed ? { opacity: 0.7 } : { opacity: 1 },
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ color: "white", fontSize: 20 }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "#65558f",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 4,
  },

  positionLeft: {
    left: 20,
  },
  positionRight: {
    right: 20,
  },
});

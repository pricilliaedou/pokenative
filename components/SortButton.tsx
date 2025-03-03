import { useThemeColors } from "@/hooks/useThemeColors";
import { StyleSheet, View, Image } from "react-native";
type Props = {
  value: "id" | "name";
  onChange: (v: "id" | "name") => void;
};

export function SortButton({ value, onChange }: Props) {
  const colors = useThemeColors();
  return (
    <View style={[styles.button, { backgroundColor: colors.grayWhite }]}>
      <Image
        source={
          value === "id"
            ? require("@/assets/images/numberBtn.png")
            : require("@/assets/images/alpha.png")
        }
        width={16}
        height={16}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 32,
    height: 32,
    borderRadius: 32,
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

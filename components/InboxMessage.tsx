import { View, Text } from "./Themed";
import { StyleSheet } from "react-native";
import GlobalStyles from "../GlobalStyles";
import { ThemeDark, ThemeLight } from "../Theme";

export interface Message {
  id: number;
  name: string;
  date: string;
  message: string;
}

export default function InboxMessage({ message }: { message: Message }) {
  return (
    <View
      style={[
        styles.flexCols,
        styles.padding,
        {
          borderBottomColor: ThemeLight.border,
          borderBottomWidth: 1,
          marginHorizontal: 30,
        },
      ]}
    >
      <View style={[styles.InboxMessageHeaderContainer, styles.paddingV]}>
        <Text style={{ color: "black", fontSize: 18 }}>{message.name}</Text>
        <Text>{message.date}</Text>
      </View>
      <Text
        style={{
          fontSize: 15,
          paddingRight: 10,
          color: ThemeLight.foregroundMuted,
        }}
      >
        {message.message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ...GlobalStyles,
  InboxMessageHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

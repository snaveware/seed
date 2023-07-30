import GlobalStyles from "../../GlobalStyles";
import { ThemeLight } from "../../Theme";
import InboxMessage, { Message } from "../../components/InboxMessage";
import { Text, View } from "../../components/Themed";
import { FlatList, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function InboxTabScreen() {
  const messages: Message[] = [
    {
      id: 1,
      name: "Brian M.",
      date: "01 Dec, 01:20 PM",
      message:
        "Good evening, I would like to request for a slot to charge my car battery, is one available at the moment?",
    },
    {
      id: 2,
      name: "Brian M.",
      date: "01 Dec, 01:20 PM",
      message:
        "Good evening, I would like to request for a slot to charge my car battery, is one available at the moment?",
    },
    {
      id: 3,
      name: "Brian M.",
      date: "01 Dec, 01:20 PM",
      message:
        "Good evening, I would like to request for a slot to charge my car battery, is one available at the moment?",
    },
    {
      id: 4,
      name: "Brian M.",
      date: "01 Dec, 01:20 PM",
      message:
        "Good evening, I would like to request for a slot to charge my car battery, is one available at the moment?",
    },
    {
      id: 5,
      name: "Brian M.",
      date: "01 Dec, 01:20 PM",
      message:
        "Good evening, I would like to request for a slot to charge my car battery, is one available at the moment?",
    },
    {
      id: 6,
      name: "Brian M.",
      date: "01 Dec, 01:20 PM",
      message:
        "Good evening, I would like to request for a slot to charge my car battery, is one available at the moment?",
    },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: ThemeLight.background }}>
      <FlatList
        data={messages}
        style={{
          marginTop: 0,
          // marginBottom: 100,
          padding: 0,
          flex: 1,
        }}
        renderItem={({ item }) => <InboxMessage message={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ...GlobalStyles,
});

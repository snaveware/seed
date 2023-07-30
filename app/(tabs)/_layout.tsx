import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
// import ChatsIcon from "../../assets/images/ChatsIcon.svg";
import ChatsIcon from "../../components/custom-icons/ChatsIcon";
import { Text, View } from "../../components/Themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import GlobalStyles from "../../GlobalStyles";

import Colors from "../../constants/Colors";
import { ThemeLight } from "../../Theme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: ThemeLight.backgroundMuted,
        tabBarInactiveTintColor: ThemeLight.background,
        tabBarInactiveBackgroundColor: ThemeLight.primary,
        tabBarActiveBackgroundColor: ThemeLight.primary,
        headerStyle: {
          backgroundColor: ThemeLight.primary,
        },
        headerTitleStyle: {
          color: "white",
        },
        headerTitleAlign: "center",
        // tabBarStyle: {
        //   borderTopWidth: 3,
        //   borderTopRightRadius: 20,
        //   borderTopLeftRadius: 20,
        // },
        tabBarBackground: () => {
          return (
            <View
              style={{ borderWidth: 3, borderRadius: 20, borderColor: "green" }}
            ></View>
          );
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",

          tabBarIcon: ({ color }) => {
            return (
              <View style={[styles.tabIcon, { backgroundColor: color }]}>
                <MaterialCommunityIcons name="home" size={24} />
              </View>
            );
          },

          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="Transactions"
        options={{
          title: "Transactions",
          tabBarIcon: ({ color }) => (
            <View style={[styles.tabIcon, { backgroundColor: color }]}>
              <MaterialCommunityIcons
                name="swap-horizontal-circle-outline"
                size={24}
                color="black"
              />
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="Inbox"
        options={{
          title: "Inbox",
          tabBarIcon: ({ color }) => {
            return (
              <View style={[styles.tabIcon, { backgroundColor: color }]}>
                <MaterialIcons name="mail-outline" size={24} color="black" />
              </View>
            );
          },
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  ...GlobalStyles,
  tabIcon: {
    backgroundColor: "white",
    borderRadius: 9999,
    padding: 5,
  },
});

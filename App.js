import "react-native-gesture-handler"

import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import MainNavigation from "./src/Navigation/MainNavigation"
import Screen from "./src/components/Screen"
import LoginScreen from "./src/screens/LoginScreen"
import constants from "./src/utils/constants"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Screen>
        {/* <MainNavigation /> */}
        <LoginScreen />
      </Screen>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.colors.black,
  },
})

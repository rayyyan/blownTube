import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createDrawerNavigator } from "@react-navigation/drawer"
const Drawer = createDrawerNavigator()

import HomeScreen from "../screens/HomeScreen"
import CampaignScreen from "../screens/CampaignScreen"
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
    </Drawer.Navigator>
  )
}

const Tab = createBottomTabNavigator()
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen" //Home
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Campaign" component={CampaignScreen} />
    </Tab.Navigator>
  )
}
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}

export default MainNavigation

const styles = StyleSheet.create({})

import React, { useState } from "react";
import { Profile, NearBy, Exchange, Post, Home } from "../screens/index";
import { icons, COLORS, SIZES } from "../constants/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Alert, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const Navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleProfileClick = () => {
    if (isLoggedIn) {
      // User is logged in, navigate to the profile screen
      return Navigation.navigate("Profile");
    } else {
      // User is not logged in, show a login prompt or navigate to the login screen
      // For example, you can display an alert asking the user to log in
      return (
        
      )
    }
  };
  const TabIcon = ({ icon, focused, Onpress }) => {
    return (
      // <TouchableOpacity onPress={Onpress}>
      <Image
        resizeMode="cover"
        source={icon}
        style={{
          width: 30,
          height: 30,
          tintColor: focused === true ? COLORS.primary : COLORS.grey,
        }}
      />
      // </TouchableOpacity>
    );
  };
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            TabIcon({
              icon: icons.cube,
              focused: focused,
              // Onpress: () => Navigation.navigate("Home"),
            }),
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: "white",
          headerTitleAllowFontScaling: true,

          // headerLeft: () => HeaderLeft({ icon: icons.logo }),
          // headerRight: () => HeaderRight({ icon: icons.bell }),
        }}
        component={Home}
      />
      <Tab.Screen
        name="NearBy"
        options={{
          tabBarIcon: ({ focused }) =>
            TabIcon({
              icon: icons.pinMap,
              focused: focused,
              // Onpress: () => Navigation.navigate("NearBy"),
            }),
        }}
        component={NearBy}
      />
      <Tab.Screen
        name="Post"
        options={{
          tabBarIcon: ({ focused }) =>
            TabIcon({
              icon: icons.addPost,
              focused: focused,
              // Onpress: () => Navigation.navigate("Post"),
            }),
        }}
        component={Post}
      />
      <Tab.Screen
        name="Exchange"
        options={{
          tabBarIcon: ({ focused }) =>
            TabIcon({
              icon: icons.exchange,
              focused: focused,
              // Onpress: () => Navigation.navigate("Exchange"),
            }),
        }}
        component={Exchange}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) =>
            TabIcon({
              icon: icons.person,
              focused: focused,
              // Onpress: handleProfileClick,
            }),
        }}
        listeners={{
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();
            handleProfileClick();
          },
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

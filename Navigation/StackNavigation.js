import { createStackNavigator } from "@react-navigation/stack";
import {
  Welcome,
  Walkthrough,
  OTO_Verification,
  ChangePassword,
  AuthMain,
  ForgetPassword,
  Search,
} from "../screens/index";
import React from "react";
import TabNavigation from "./TabNavigation";

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Welcome"
    >
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={TabNavigation}
      />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Walkthrough" component={Walkthrough} />
      <Stack.Screen name="AuthMain" component={AuthMain} />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: true,
          title: "Search",
          headerStyle: {
            height: 70,
          },
        }}
      />

      <Stack.Screen
        name="ChangePassword"
        options={{
          headerShown: true,
          title: "Forgot password",
          headerStyle: {
            height: 70,
          },
        }}
        component={ChangePassword}
      />
      <Stack.Screen
        name="ForgetPassword"
        options={{
          headerShown: true,
          title: "Forget Password",
          headerStyle: {
            height: 70,
          },
        }}
        component={ForgetPassword}
      />
      <Stack.Screen
        name="VerificationCod"
        options={{
          headerShown: true,
          title: "Verification",
          headerStyle: {
            height: 70,
          },
        }}
        component={OTO_Verification}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;

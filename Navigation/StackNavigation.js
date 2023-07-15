import { createStackNavigator } from "@react-navigation/stack";
import {
  Welcome,
  Walkthrough,
  OTO_Verification,
  ChangePassword,
  AuthMain,
  ForgetPassword,
  Search,
  ProfileInfo,
  EditProfile,
  Message,
  ViewMessages,
  Settings,
  PostExchange,
  Notification,
  Account,
  PropertyDetails,
} from "../screens/index";
import React from "react";
import TabNavigation from "./TabNavigation";

const Stack = createStackNavigator();
const StackNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        animationTypeForReplaced: "pop",
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
      <Stack.Screen name="Setting" component={Settings} />
      <Stack.Screen name="PostExchange" component={PostExchange} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="PropertyDetails" component={PropertyDetails} />

      <Stack.Screen
        name="ProfileInfo"
        component={ProfileInfo}
        options={{
          headerShown: true,
          title: "Profile Info",
          headerStyle: {
            height: 70,
          },
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: true,
          title: "Edit Profile",
          headerStyle: {
            height: 70,
          },
        }}
      />
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
      {/* message */}
      <Stack.Screen
        name="message"
        options={{
          headerShown: true,
          title: "Message",
          headerStyle: {
            height: 70,
          },
        }}
        component={Message}
      />
      <Stack.Screen
        name="ViewMessages"
        options={{
          headerShown: true,
        }}
        component={ViewMessages}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;

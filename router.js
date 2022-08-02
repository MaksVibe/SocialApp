import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import PostsScreen from "./Screens/main/PostsScreen/PostsScreen";
import CreatePostsScreen from "./Screens/main/CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "./Screens/main/ProfileScreen/ProfileScreen";
import PostsIcon from "./components/BottomNav/PostsIcon";
import CreatePostIcon from "./components/BottomNav/CreatePostIcon";
import ProfileIcon from "./components/BottomNav/ProfileIcon";
import LogoutIcon from "./components/LogoutIcon";
import { theme } from "./utils/styles/theme";

const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = isAuth => {
  if (!isAuth) {
    return (
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          shadowColor: theme.colors.black,
          shadowOffset: { width: 0, height: -0.5 },
          shadowOpacity: 0.3,
          shadowRadius: -27.1828,
          paddingTop: 4,
        },
      }}
    >
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerRight: () => <LogoutIcon />,
          tabBarIcon: () => <PostsIcon />,
        }}
      />
      <MainTab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: () => <CreatePostIcon />,
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <ProfileIcon />,
        }}
      />
    </MainTab.Navigator>
  );
};

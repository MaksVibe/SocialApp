import React, { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import LoadingScreen from "./Screens/LoadingScreen/LoadingScreen";
import { useRoute } from "./router";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const routing = useRoute(true);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          "Quicksand-Bold": require("./assets/fonts/Quicksand-Bold.ttf"),
          "Quicksand-Medium": require("./assets/fonts/Quicksand-Medium.ttf"),
          "Quicksand-Regular": require("./assets/fonts/Quicksand-Regular.ttf"),
          "Saira-Medium": require("./assets/fonts/Saira-Medium.ttf"),
        });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  return (
    <NavigationContainer>
      {!isReady ? <LoadingScreen /> : routing}
    </NavigationContainer>
  );
}

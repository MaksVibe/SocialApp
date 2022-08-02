import React from "react";

import Logout from "react-native-vector-icons/MaterialIcons";
import { View } from "react-native";
import { theme } from "../utils/styles/theme";

function LogoutIcon() {
  return (
    <View style={{ right: 16 }}>
      <Logout name="logout" size={24} color={theme.colors.secondaryText} />
    </View>
  );
}

export default LogoutIcon;

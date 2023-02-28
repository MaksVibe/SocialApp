import React from "react";

import Logout from "react-native-vector-icons/MaterialIcons";
import { View, Image } from "react-native";
import { theme } from "../utils/styles/theme";

//////// Custom PNG icon ////////
// const logOut = require("../assets/log-out.png");

const LogoutIcon = () => {
  return (
    <View style={{ right: 16 }}>
      {/* <Image width={24} height={24} source={logOut} style={{}} /> */}
      <Logout name="logout" size={24} color={theme.colors.secondaryText} />
    </View>
  );
};

export default LogoutIcon;

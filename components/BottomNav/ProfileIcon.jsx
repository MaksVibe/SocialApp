import React from "react";
import { View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { theme } from "../../utils/styles/theme";

const ProfileIcon = () => {
  return (
    <View style={{ right: 40 }}>
      <Feather name="user" size={24} color={theme.colors.thirdText} />
    </View>
  );
};

export default ProfileIcon;

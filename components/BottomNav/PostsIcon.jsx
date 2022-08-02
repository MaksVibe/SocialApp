import React from "react";
import { View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { theme } from "../../utils/styles/theme";

const PostsIcon = () => {
  return (
    <View style={{ left: 40 }}>
      <Feather name="grid" size={24} color={theme.colors.thirdText} />
    </View>
  );
};

export default PostsIcon;

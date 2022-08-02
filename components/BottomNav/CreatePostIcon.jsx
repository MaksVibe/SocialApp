import React from "react";

import CreatePost from "react-native-vector-icons/MaterialCommunityIcons";
import { View } from "react-native";
import { theme } from "../../utils/styles/theme";

function CreatePostIcon() {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.accent,
        maxWidth: 70,
        width: "100%",
        height: 40,
        borderRadius: 20,
      }}
    >
      <CreatePost name="plus" size={24} color={theme.colors.primaryBg} />
    </View>
  );
}

export default CreatePostIcon;

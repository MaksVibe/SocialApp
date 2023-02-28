import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { theme } from "../../../utils/styles/theme";

const profilePic = require("../../../assets/profile-pic.png");
const { colors, spacing } = theme;

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileWrapper}>
        <Image
          width={60}
          height={60}
          source={profilePic}
          style={{ width: 60, height: 60, borderRadius: 16 }}
        />
        <View style={{ paddingLeft: 8 }}>
          <Text style={styles.profileTitle}>Name Surname</Text>
          <Text style={styles.profileEmail}>email@wxample.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBg,
    paddingHorizontal: spacing.main,
    paddingTop: 32,
  },
  profileWrapper: { alignItems: "center", flexDirection: "row" },
  profileTitle: {
    fontFamily: "Quicksand-Bold",
    fontSize: 16,
    lineHeight: 20,
    color: colors.primaryText,
  },
  profileEmail: {
    fontFamily: "Quicksand-Regular",
    fontSize: 14,
    lineHeight: 18,
    color: colors.thirdText,
  },
});

export default PostsScreen;

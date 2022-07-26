import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { theme } from "../../utils/styles/theme";

const bgImage = require("../../assets/pexels-chris-lee-12456043.jpg");

const { colors, spacing, textFonts } = theme;

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPass, setFocusPass] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [hiddenPass, setHiddenPass] = useState(true);

  const handleSign = () => {
    const emptyField = email.length === 0 || password.length === 0;

    Keyboard.addListener("keyboardDidHide", () => {
      setIsShowKeyboard(false);
      Keyboard.removeAllListeners("keyboardDidHide");
    });
    if (emptyField) return;

    hideKeyboard();
    setEmail("");
    setPassword("");
  };

  const hideKeyboard = () => {
    if (!isShowKeyboard) return;
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={() => hideKeyboard()}>
        <View style={{ flex: 1 }}>
          <ImageBackground
            style={styles.image}
            source={bgImage}
            accessible={false}
          >
            <View
              style={{
                ...styles.form,
                paddingBottom: isShowKeyboard ? 10 : 120,
              }}
            >
              <Text style={styles.title}>Sign in</Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: focusEmail
                      ? colors.primaryBg
                      : colors.secondBg,
                    borderColor: focusEmail ? colors.accent : colors.border,
                  },
                ]}
                placeholder="Email"
                placeholderTextColor={colors.secondaryText}
                value={email}
                enablesReturnKeyAutomatically={true}
                onChangeText={value => setEmail(value)}
                onSubmitEditing={() => handleSign()}
                onFocus={() => {
                  setIsShowKeyboard(true);
                  setFocusEmail(true);
                }}
                onBlur={() => setFocusEmail(false)}
              />
              <View
                style={[
                  styles.input,
                  {
                    backgroundColor: focusPass
                      ? colors.primaryBg
                      : colors.secondBg,
                    borderColor: focusPass ? colors.accent : colors.border,
                  },
                ]}
              >
                <TextInput
                  style={{
                    fontSize: 16,
                    lineHeight: 19,
                    fontFamily: textFonts.body,
                  }}
                  secureTextEntry={hiddenPass ? true : false}
                  placeholder="Password"
                  placeholderTextColor={colors.secondaryText}
                  value={password}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={value => setPassword(value)}
                  onSubmitEditing={() => handleSign()}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    setFocusPass(true);
                  }}
                  onBlur={() => setFocusPass(false)}
                />
                <Text
                  style={styles.showPass}
                  onPress={() =>
                    hiddenPass ? setHiddenPass(false) : setHiddenPass(true)
                  }
                >
                  {hiddenPass ? "Show" : "Hide"}
                </Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={() => handleSign()}
              >
                <Text
                  style={{
                    color: colors.primaryBg,
                    fontSize: 20,
                    lineHeight: 22,
                    fontFamily: textFonts.button,
                  }}
                >
                  Sign in
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 19,
                  color: colors.linkText,
                  marginTop: 16,
                  fontFamily: textFonts.body,
                }}
              >
                Have no account? Sign up
              </Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    alignItems: "center",
    backgroundColor: colors.primaryBg,
    paddingHorizontal: spacing.main,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    marginTop: 54,
    fontSize: 34,
    lineHeight: 40,
    marginBottom: 20,
    fontFamily: textFonts.title,
  },
  input: {
    borderWidth: 1,
    color: colors.primaryText,
    borderColor: colors.border,
    backgroundColor: colors.secondBg,
    borderRadius: 8,
    marginTop: 16,
    textAlign: "left",
    width: "100%",
    padding: 16,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: textFonts.body,
  },
  btn: {
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 16,
    marginTop: 43,
    backgroundColor: colors.accent,
  },
  showPass: {
    position: "absolute",
    right: 16,
    top: 16,
    color: colors.linkText,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: textFonts.body,
  },
});

export default LoginScreen;

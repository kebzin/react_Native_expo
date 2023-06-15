import React from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
  View,
} from "react-native";

const KeyboardAvoidanceView = ({ children }) => {
  return (
    <KeyboardAvoidanceView style={{ flex: 1 }}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidanceView>
  );
};

export default KeyboardAvoidanceView;

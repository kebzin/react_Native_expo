import React from "react";
import { COLORS, FONTS, SIZES } from "../constants/index";
import { TextInput, View } from "react-native/";
const InputField = ({
  containerStyle,
  inputContainerStyle,
  Placeholder,
  inputStyle,
  value = "",
  prependComponent,
  appendComponent,
  onChange,
  editable,
  secureTextEntery,
  keyboardType = "default",
  autoCompleteType = "off",
  maxLength,
  placeholderTextColor = COLORS.grey60,
  onPress,
  inputMode,
  enterKeyHint,
}) => {
  return (
    <View style={{ ...containerStyle }}>
      <View
        style={{
          flexDirection: "row",
          height: 50,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          alignItems: "center",
          backgroundColor: COLORS.light,
          ...inputContainerStyle,
        }}
      >
        {prependComponent}
        <TextInput
          style={{
            flex: 1,
            paddingVertical: 0,
            ...FONTS.body4,
            ...inputStyle,
          }}
          value={value}
          onChange={(text) => onChange(text)}
          editable={editable}
          secureTextEntry={secureTextEntery}
          keyboardType={keyboardType}
          autoCapitalize={autoCompleteType}
          maxLength={maxLength}
          placeholder={Placeholder}
          placeholderTextColor={placeholderTextColor}
          onPressIn={onPress}
          inputMode={inputMode}
          enterKeyHint={enterKeyHint}
        />
        {appendComponent}
      </View>
    </View>
  );
};

export default InputField;

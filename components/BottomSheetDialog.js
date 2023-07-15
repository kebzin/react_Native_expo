import React, { useCallback, useEffect } from "react";
import { View, Text, StyleSheet, Image, Keyboard } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { SIZES, COLORS, FONTS } from "../constants/index";
import { TextButton, CustomBackdrop } from "../components/index";

const BottomSheetDialog = ({
  bottomSheetModalRef,
  Title,
  Message,
  Status,
  Icone,
  HandleClick,
  ButtonText,
  PanDownToClose,
}) => {
  // ref

  // variables

  // callbacks

  return (
    <BottomSheetModal
      enableHandlePanningGesture={PanDownToClose}
      // bottomInset={46}
      // set `detached` to true
      // detached={true}
      backdropComponent={(props) => <CustomBackdrop {...props} />}
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={["50%"]}
    >
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Image
            source={Icone}
            style={{
              tintColor: Status === "Error" ? COLORS.error : COLORS.success,
              width: 100,
              height: 100,
              resizeMode: "contain",
              marginVertical: SIZES.padding,
              alignSelf: "center",
            }}
          />
          <Text
            style={{
              color: Status === "Error" ? COLORS.error : COLORS.success,
              alignSelf: "center",
            }}
          >
            {Status}
          </Text>
          <Text style={{ ...FONTS.h3, alignSelf: "center" }}>{Title}</Text>
          <Text
            style={{ alignSelf: "center", ...FONTS.body4, color: COLORS.grey }}
          >
            {Message}
          </Text>

          {
            <TextButton
              onPress={HandleClick}
              label={ButtonText}
              contentContainerStyle={{
                height: 55,
                borderRadius: SIZES.radius,
                marginTop: 10,
              }}
              labelStyle={{
                ...FONTS.h5,
              }}
            />
          }
        </View>
      </View>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SIZES.padding,
  },
  contentContainer: {
    flex: 1,
  },
  IconeCheckMark: {
    tintColor: COLORS.success,
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginVertical: SIZES.padding,
    alignSelf: "center",
  },
});

export default BottomSheetDialog;

import React, { Children } from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  StatusBar,
} from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { SIZES, COLORS, FONTS } from "../constants/index";
import { CustomBackdrop } from "../components/index";

const BottomSheetEmptyView = ({
  openModal,
  Onclose,
  height,
  setShowModal,
  renderChildrents,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={openModal}>
      <StatusBar barStyle="dark-content" />
      <TouchableWithoutFeedback onPress={Onclose} style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.dark80,
          }}
        >
          <View
            style={{
              height: height,
              width: SIZES.width * 0.9,
              backgroundColor: COLORS.light,
              borderRadius: SIZES.radius,
            }}
          >
            {renderChildrents}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SIZES.padding,
  },
});

export default BottomSheetEmptyView;

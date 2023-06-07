import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../constants/index";
const Select = ({
  openModal,
  setDropDownState,
  Onclose,
  data,
  height,
  setShowModal,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={openModal}>
      <TouchableWithoutFeedback onPress={Onclose}>
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
              width: SIZES.width * 0.8,
              backgroundColor: COLORS.light,
              borderRadius: SIZES.radius,
            }}
          >
            {/* loop throught the dsts and populate it */}
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{
                paddingHorizontal: SIZES.padding,
                paddingVertical: SIZES.padding,
              }}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setDropDownState(item.name);
                      setShowModal(false);
                    }}
                  >
                    <Text
                      style={{
                        ...FONTS.body4,
                        marginVertical: SIZES.base - 4,
                      }}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default Select;

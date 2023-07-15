import React, { useCallback, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { COLORS, FONTS, SIZES, icons, images } from "../../constants/index";
import {
  IconeBotten,
  TextButton,
  InputField,
  CountryDropDown,
  Select,
  BottomSheetDialog,
} from "../../components/index";

const ProfileInfo = ({ navigation }) => {
  // state
  const [openModal1, setShowModal1] = useState(false);
  const [openModal2, setShowModal2] = useState(false);
  const [dropDownState, setDropDownState] = useState("Male");
  const [accounttype, setAccounttype] = useState("Dfault Account");
  const [Phone, setPhone] = useState("+220 2493268");
  const [firstName, setFirstName] = useState("Kebba ");
  const [accountType, setAccountType] = useState("");
  const bottomSheetModalRef = useRef(null);

  const [lastName, setLastName] = useState("Waiga");
  const [companyName, setCompanyName] = useState("");
  const [webSite, setwebSite] = useState();

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef?.current?.present();
    Keyboard.dismiss();
  }, []);

  const DropDownData = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
    { id: 3, name: "Others" },
  ];
  const Account = [
    { id: 1, name: "Normal Account " },
    { id: 2, name: "Business Account" },
    { id: 3, name: "Others" },
  ];

  // render
  return (
    <View style={style.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <IconeBotten Onpress={navigation.navigate("EditProfile")} />
      <View style={style.secondContainer}>
        <ScrollView
          contentContainerStyle={style.scrollViewContentContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* full name */}
          <InputField
            inputContainerStyle={{
              backgroundColor: COLORS.lightGrey80,
            }}
            Placeholder={"Enter Your Full Name"}
            value={firstName}
            onChange={(text) => setFirstName(text)}
            prependComponent={
              <IconeBotten
                iconeStyle={{ tintColor: COLORS.grey }}
                icone={icons.person}
              />
            }
            containerStyle={{
              marginVertical: SIZES.base,
            }}
          />
          <InputField
            inputContainerStyle={{
              backgroundColor: COLORS.lightGrey80,
            }}
            Placeholder={"Enter Your Name"}
            value={lastName}
            onChange={(text) => setLastName(text)}
            prependComponent={
              <IconeBotten
                iconeStyle={{ tintColor: COLORS.grey }}
                icone={icons.person}
              />
            }
            containerStyle={{
              marginVertical: SIZES.base,
            }}
          />
          <InputField
            inputContainerStyle={{
              backgroundColor: COLORS.lightGrey80,
            }}
            Placeholder={"Enter Phone Number"}
            value={Phone}
            onChange={(text) => setPhone(text)}
            inputMode={"tel"}
            containerStyle={{
              marginVertical: SIZES.base,
            }}
            prependComponent={
              <IconeBotten
                iconeStyle={{ tintColor: COLORS.grey }}
                icone={icons.phone}
              />
            }
          />
          <CountryDropDown
            onPress={() => setShowModal1(true)}
            dropDownState={dropDownState}
          />

          <InputField
            value={webSite}
            onChange={(text) => setwebSite(text)}
            inputContainerStyle={{
              backgroundColor: COLORS.lightGrey80,
            }}
            Placeholder={"Enter Website Domain name"}
            containerStyle={{
              marginVertical: SIZES.base,
            }}
          />
          <CountryDropDown
            onPress={() => {
              setShowModal2(true);
              dropDownState = accountType;
            }}
            dropDownState={accounttype}
          />
          <InputField
            value={companyName}
            onChange={(text) => setCompanyName(text)}
            inputContainerStyle={{
              backgroundColor: COLORS.lightGrey80,
            }}
            Placeholder={"Enter Your Company Name"}
            containerStyle={{
              marginVertical: SIZES.base,
            }}
          />
          <InputField
            inputContainerStyle={{
              backgroundColor: COLORS.lightGrey80,
            }}
            Placeholder={"Enter Company Locations"}
            containerStyle={{
              marginVertical: SIZES.base,
            }}
          />

          <TextButton
            label={"Update Account"}
            onPress={handlePresentModalPress}
            contentContainerStyle={{
              height: 50,
              borderRadius: SIZES.radius,
            }}
          />
          <Select
            openModal={openModal1}
            height={SIZES.padding * 5}
            Onclose={() => setShowModal1(false)}
            setShowModal={setShowModal1}
            data={DropDownData}
            setDropDownState={setDropDownState}
          />
          <Select
            openModal={openModal2}
            height={SIZES.padding * 5}
            Onclose={() => setShowModal2(false)}
            setShowModal={setShowModal2}
            data={Account}
            setDropDownState={setAccountType}
          />
          <BottomSheetDialog
            bottomSheetModalRef={bottomSheetModalRef}
            Title={"Account updated Sccessfull"}
            ButtonText={"Continue"}
            Icone={icons.checkmark}
            Status={"Success"}
            Message={"Your account has succesfilly being updated"}
            HandleClick={() => {
              bottomSheetModalRef.current?.close(), navigation.goBack();
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light20,
    padding: SIZES.padding - 10,
  },
  scrollViewContentContainer: {
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    position: "relative",
  },
  secondContainer: {
    flex: 1,
    backgroundColor: COLORS.light,
    // height: SIZES.padding * 25,
    elevation: 1,
    borderRadius: SIZES.base,
  },
  profileInfoContainer: {
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileTextContainer: {
    marginLeft: SIZES.padding,
  },
  profileName: {
    ...FONTS.h3,
    color: COLORS.dark,
  },
});

export default ProfileInfo;

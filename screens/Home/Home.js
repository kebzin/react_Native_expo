import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  FlatList,
  Animated,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  HeaderComponent,
  CategoryAndInputCombine,
  IconeBotten,
  BottomSheetEmptyView,
  TextButton,
  CategorySectionHome,
  InputField,
} from "../../components/index";
import {
  SIZES,
  icons,
  COLORS,
  constants,
  FONTS,
  dummyData,
} from "../../constants/index";

import ItemImage from "./ItemImage";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthentication } from "../../healper/AuthenticationHealper";
import {
  selectIsLogin,
  selectCurrentToken,
} from "../../features/auth/authSlice";
import LoginPopUp from "../../healper/LoginPopUp";

/**

    Home screen component.
    Renders a list of items and handles authentication check.
    @param {Object} navigation - Navigation object for navigating between screens.
    */
const Home = ({ navigation }) => {
  const [data, setData] = useState([]); // Initial data array
  const [page, setPage] = useState(1); // Current page of data
  const [modalVisible, setModalVisible] = useState(false);

  // HOOK
  const dispatch = useDispatch();
  const IsLogin = useSelector(selectIsLogin);
  const LoginUser = useSelector(selectCurrentToken);
  const bottomSheetModalRef = useRef(null);

  /**

    Presents the bottom sheet modal.
    */
  const HandleSheetPresent = useCallback(() => {
    bottomSheetModalRef?.current?.present();
  }, []);

  const scrollY = useRef(new Animated.Value(0)).current; // tracking the scroll position base on the vale provided

  useEffect(() => {
    let isMounted = true; // Flag to track component mount status

    const authenticateUser = async () => {
      const isAuthenticated = await checkAuthentication(dispatch);
      if (!isMounted) {
        return; // Abort the action if the component has unmounted
      }

      if (!isAuthenticated) {
        // navigation.navigate("Login");
        const timer = setTimeout(() => {
          setModalVisible(true), HandleSheetPresent();
        }, 3000);

        // Clean up the timer
        return () => clearTimeout(timer);
      }
      // Display the login message after a delay of 3 seconds
    };

    // Set the isLogin state to true

    // Call the authenticateUser function
    authenticateUser();
    // Cleanup function
    return () => {
      isMounted = false; // Set the flag to false when the component unmounts
    };
  }, [dispatch, navigation]);

  /**
    Renders an individual item within the FlatList.
    @param {Object} item - Item object to be rendered.
    */

  const renderItem = ({ item }) => {
    // Render individual items within the FlatList
    return (
      <View
        style={{
          marginHorizontal: SIZES.padding - 10,
          backgroundColor: COLORS.light,
          marginVertical: SIZES.base,
          borderRadius: SIZES.radius,
        }}
      >
        <View style={{}}>
          <ItemImage
            image={item.image}
            onImagePress={() =>
              navigation.navigate("PropertyDetails", { item })
            }
          />
          <Details
            NumberofBedIcon={icons.bed}
            NumberofBathIcon={icons.bath}
            categoryIcon={icons.appartment}
            NumberOfbath={"2"}
            NumberOfbed={"3"}
            category={item.title}
          />
        </View>
      </View>
    );
  };

  /**
    Handles the navigation to the message screen.
    If the user is not logged in, it displays a modal and bottom sheet.
    */
  const HandleMessageNavigation = () => {
    // check if the user is log in or not
    if (LoginUser === null || undefined) {
      return setModalVisible(true), HandleSheetPresent();
    }
    navigation.navigate("message");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightGrey,

        paddingHorizontal: 10,
      }}
    >
      {/* header component  */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.lightGrey}
        animated={true}
      />
      <HeaderComponent
        scrollY={scrollY}
        onPress={() => navigation.navigate("Notification")}
        messagePress={HandleMessageNavigation}
      />
      {/* input and category component */}
      <CategoryAndInputCombine scrollY={scrollY} />
      <FlatList
        data={dummyData.banners}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        ListHeaderComponent={<CategorySectionHome />}
        // onEndReached={fetchMoreData}
        onEndReachedThreshold={0.5}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: false,
          }
        )}
        contentContainerStyle={{}} // Adjust the paddingTop value to make space for the fixed header
      />
      {
        <LoginPopUp
          modalVisible={modalVisible}
          navigation={navigation}
          setModalVisible={setModalVisible}
          cancelFunction={() => {
            setModalVisible(false);
          }}
        />
      }
    </View>
  );
};

export default Home;

/**

    Renders the details section of an item.

    @param {Object} props - Component properties.

    @param {string} props.title - Title of the item.

    @param {string} props.categoryIcon - Icon representing the category.

    @param {string} props.numberofBedIcon - Icon representing the number of beds.

    @param {string} props.numberOfBed - Number of beds.

    @param {string} props.numberofBathIcon - Icon representing the number of baths.

    @param {string} props.numberOfBath - Number of baths.

    @param {string} props.sizeAmount - Size amount.

    @param {string} props.sizeIcon - Icon representing the size.

    @param {string} props.category - Category of the item.
    */
/**

    Renders the details section of an item.

    @param {Object} props - Component properties.

    @param {string} props.title - Title of the item.

    @param {string} props.categoryIcon - Icon representing the category.

    @param {string} props.NumberofBedIcon - Icon representing the number of beds.

    @param {string} props.NumberOfbed - Number of beds.

    @param {string} props.NumberofBathIcon - Icon representing the number of baths.

    @param {string} props.NumberOfbath - Number of baths.

    @param {string} props.sizeAmount - Size amount.

    @param {string} props.SizeIcone - Icon representing the size.

    @param {string} props.category - Category of the item.
    */
const Details = ({
  title,
  categoryIcon,
  NumberofBedIcon,
  NumberOfbed,
  NumberofBathIcon,
  NumberOfbath,
  sizeAmount,
  SizeIcone,
  category,
}) => {
  return (
    <View style={style.detailsContainer}>
      <View style={style.categoryContainer}>
        <IconeBotten
          icone={
            category === "Room"
              ? icons.room
              : category === "Appartment"
              ? icons.appartment
              : category === "Shop"
              ? icons.shop
              : icons.car
          }
          iconeStyle={style.categoryIcon}
        />
        <Text style={style.categoryText}>{category}</Text>
      </View>

      <Text style={style.title}>Waiga's Estate Rent House</Text>
      <View style={style.rowContainer}>
        <Text style={style.price}>GMD: 3,000 {"/Monthly"}</Text>
        <View style={style.ratingContainer}>
          <IconeBotten iconeStyle={style.categoryIcon} />
          <IconeBotten
            icone={icons.rating}
            iconeStyle={style.ratingIcon}
            containerStyle={style.ratingIconContainer}
          />
          <IconeBotten
            icone={icons.rating}
            iconeStyle={style.ratingIcon}
            containerStyle={style.ratingIconContainer}
          />
          <Text style={style.likesText}>2.3 likes</Text>
        </View>
      </View>
      <View style={style.location}>
        <IconeBotten icone={icons.location} iconeStyle={style.locationIcon} />
        <Text style={style.locationText}>Kotou Mangai kunda</Text>
      </View>
      <View style={style.rowContainer}>
        <View style={style.detailColumn}>
          <IconeBotten
            icone={NumberofBedIcon}
            iconeStyle={style.smallIconStyle}
          />
          <Text style={style.detailText}>{NumberOfbed} Bed</Text>
        </View>
        <View style={style.detailColumn}>
          <IconeBotten
            icone={NumberofBathIcon}
            iconeStyle={style.smallIconStyle}
          />
          <Text style={style.detailText}>{NumberOfbath} Bath</Text>
        </View>
        <View style={style.detailColumn}>
          <IconeBotten icone={SizeIcone} iconeStyle={style.smallIconStyle} />
          <Text style={style.detailText}>{sizeAmount} sqft</Text>
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  SmallIconeStyle: {
    width: 20,
    height: 20,
    tintColor: COLORS.grey80,
  },
  DetailSmallText: {
    ...FONTS.body5,
  },
  ratingIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.support2,
  },
  categoryIcon: {
    width: 25,
    height: 25,
    tintColor: COLORS.success,
  },
  detailsContainer: {
    paddingHorizontal: 10,
  },
  categoryContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  categoryIcon: {
    width: 25,
    height: 25,
    tintColor: COLORS.success,
  },
  categoryText: {
    ...FONTS.h5,
    color: COLORS.success,
    marginLeft: 5,
  },
  title: {
    ...FONTS.h5,
  },
  location: {
    flexDirection: "row",

    alignItems: "center",
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  price: {
    ...FONTS.h5,
    color: COLORS.primary,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingIconContainer: {
    alignSelf: "flex-end",
  },
  ratingIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.support4,
  },
  likesText: {
    ...FONTS.body3,
  },
  locationIcon: {
    tintColor: COLORS.grey,
  },
  locationText: {
    ...FONTS.body5,
    color: COLORS.grey,
    marginLeft: 5,
  },
  detailColumn: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  smallIconStyle: {
    width: 20,
    height: 20,
    tintColor: COLORS.grey80,
  },
  detailText: {
    ...FONTS.body5,
  },
});

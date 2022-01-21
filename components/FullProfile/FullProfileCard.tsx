import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import {
  Ionicons,
  EvilIcons,
  Feather,
  Entypo,
  MaterialCommunityIcons,
  SimpleLineIcons,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const FullProfileCard = (props) => {
  const width = Dimensions.get("window").width;

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={{ backgroundColor: "#FAFAFA" }}>
      <View>
        <View>
          <Image
            source={{
              uri: props.Image1,
            }}
            style={{ height: 400, width: width, marginRight: 15 }}
          />
          <TouchableCmp>
            <LinearGradient
              colors={["#434aa8", "#602C91", "#72287D"]}
              style={{
                position: "absolute",
                backgroundColor: "#434aa8",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "flex-end",
                right: 20,
                bottom: 20,
                height: 50,
                width: 50,
                borderRadius: 50 / 2,
              }}
            >
              <FontAwesome
                name="envelope-o"
                size={30}
                color="white"
                style={{ position: "absolute" }}
              />
              <FontAwesome5
                name="heart"
                size={11.5}
                color="white"
                style={{ marginBottom: 5.5 }}
              />
            </LinearGradient>
          </TouchableCmp>
        </View>
        <View
          style={{
            marginVertical: 30,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 36,
              fontWeight: "200",
              marginLeft: 20,
            }}
          >
            {props.name}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "300",
              color: "#434aa8",
              marginLeft: 20,
              marginTop: 10,
            }}
          >
            {`${props.predictionValue}% chance of a better date`}
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              marginTop: 10,
              marginLeft: 18,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 0.7,
                paddingHorizontal: 15,
                height: 30,
                borderColor: "black",
                borderRadius: 50,
                margin: 2,
              }}
            >
              <Ionicons name="ios-hourglass" size={16} color="black" />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "300",
                  marginHorizontal: 5,
                }}
              >
                {props.age}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 0.7,
                height: 30,
                borderColor: "black",
                borderRadius: 50,
                margin: 2,
                paddingHorizontal: 15,
              }}
            >
              <Entypo name="ruler" size={16} color="black" />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "300",
                  marginLeft: 10,
                }}
              >
                {props.height}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 0.7,
                paddingHorizontal: 15,
                height: 30,
                borderColor: "black",
                borderRadius: 50,
                margin: 2,
              }}
            >
              <MaterialCommunityIcons name="dumbbell" size={16} color="black" />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "300",
                  marginHorizontal: 5,
                }}
              >
                {props.worksOut}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 0.7,
                height: 30,
                borderColor: "black",
                borderRadius: 50,
                paddingHorizontal: 15,
                margin: 2,
              }}
            >
              <MaterialCommunityIcons name="smoking" size={16} color="black" />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "300",
                  marginHorizontal: 5,
                }}
              >
                {props.smokesTobacco}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 0.7,
                height: 30,
                borderColor: "black",
                borderRadius: 50,
                paddingHorizontal: 15,
                margin: 2,
              }}
            >
              <Entypo name="leaf" size={16} color="black" />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "300",
                  marginHorizontal: 5,
                }}
              >
                {props.smokesWeed}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 0.7,
                height: 30,
                borderColor: "black",
                borderRadius: 50,
                paddingHorizontal: 15,
                margin: 2,
              }}
            >
              <MaterialCommunityIcons
                name="glass-cocktail"
                size={16}
                color="black"
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "300",
                  marginHorizontal: 5,
                }}
              >
                {props.drinks}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 0.7,
                height: 30,
                borderColor: "black",
                borderRadius: 50,
                paddingHorizontal: 15,
                margin: 2,
              }}
            >
              <MaterialCommunityIcons name="pill" size={16} color="black" />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "300",
                  marginHorizontal: 5,
                }}
              >
                {props.drugs}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 0.7,
                height: 30,
                borderColor: "black",
                borderRadius: 50,
                paddingHorizontal: 15,
                margin: 2,
              }}
            >
              <Entypo name="graduation-cap" size={16} color="black" />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "300",
                  marginHorizontal: 5,
                }}
              >
                {props.education}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 20,
              alignItems: "center",
            }}
          >
            <Ionicons name="ios-pin" size={22} color="black" />
            <Text style={{ fontSize: 18, fontWeight: "300", margin: 10 }}>
              {props.city}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 20,
              alignItems: "center",
            }}
          >
            <Entypo name="graduation-cap" size={22} color="black" />
            <Text style={{ fontSize: 18, fontWeight: "300", margin: 10 }}>
              {props.school}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 20,
              alignItems: "center",
            }}
          >
            <Feather name="briefcase" size={22} color="black" />
            <Text style={{ fontSize: 18, fontWeight: "300", margin: 10 }}>
              {props.jobTitle}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Image
          source={{
            uri: props.Image2,
          }}
          style={{ height: 400, width: width, marginRight: 15 }}
        />
        <TouchableCmp>
          <LinearGradient
            colors={["#434aa8", "#602C91", "#72287D"]}
            style={{
              position: "absolute",
              backgroundColor: "#434aa8",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "flex-end",
              right: 20,
              bottom: 20,
              height: 50,
              width: 50,
              borderRadius: 50 / 2,
            }}
          >
            <FontAwesome
              name="envelope-o"
              size={30}
              color="white"
              style={{ position: "absolute" }}
            />
            <FontAwesome5
              name="heart"
              size={11.5}
              color="white"
              style={{ marginBottom: 5.5 }}
            />
          </LinearGradient>
        </TouchableCmp>
      </View>
      <View style={{ flex: 1, height: 200 }} />
      <View>
        <Image
          source={{
            uri: props.Image3,
          }}
          style={{ height: 400, width: width, marginRight: 15 }}
        />
        <TouchableCmp>
          <LinearGradient
            colors={["#434aa8", "#602C91", "#72287D"]}
            style={{
              position: "absolute",
              backgroundColor: "#434aa8",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "flex-end",
              right: 20,
              bottom: 20,
              height: 50,
              width: 50,
              borderRadius: 50 / 2,
            }}
          >
            <FontAwesome
              name="envelope-o"
              size={30}
              color="white"
              style={{ position: "absolute" }}
            />
            <FontAwesome5
              name="heart"
              size={11.5}
              color="white"
              style={{ marginBottom: 5.5 }}
            />
          </LinearGradient>
        </TouchableCmp>
      </View>
      <View style={{ flex: 1, height: 200 }} />
      <View>
        <Image
          source={{
            uri: props.Image4,
          }}
          style={{ height: 400, width: width, marginRight: 15 }}
        />
        <TouchableCmp>
          <LinearGradient
            colors={["#434aa8", "#602C91", "#72287D"]}
            style={{
              position: "absolute",
              backgroundColor: "#434aa8",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "flex-end",
              right: 20,
              bottom: 20,
              height: 50,
              width: 50,
              borderRadius: 50 / 2,
            }}
          >
            <FontAwesome
              name="envelope-o"
              size={30}
              color="white"
              style={{ position: "absolute" }}
            />
            <FontAwesome5
              name="heart"
              size={11.5}
              color="white"
              style={{ marginBottom: 5.5 }}
            />
          </LinearGradient>
        </TouchableCmp>
      </View>
      <View style={{ flex: 1, height: 200 }} />
      <View>
        <Image
          source={{
            uri: props.Image5,
          }}
          style={{ height: 400, width: width, marginRight: 15 }}
        />
        <TouchableCmp>
          <LinearGradient
            colors={["#434aa8", "#602C91", "#72287D"]}
            style={{
              position: "absolute",
              backgroundColor: "#434aa8",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "flex-end",
              right: 20,
              bottom: 20,
              height: 50,
              width: 50,
              borderRadius: 50 / 2,
            }}
          >
            <FontAwesome
              name="envelope-o"
              size={30}
              color="white"
              style={{ position: "absolute" }}
            />
            <FontAwesome5
              name="heart"
              size={11.5}
              color="white"
              style={{ marginBottom: 5.5 }}
            />
          </LinearGradient>
        </TouchableCmp>
      </View>
      <View style={{ flex: 1, height: 200 }} />
      <View>
        <Image
          source={{
            uri: props.Image6,
          }}
          style={{ height: 400, width: width, marginRight: 15 }}
        />
        <TouchableCmp>
          <LinearGradient
            colors={["#434aa8", "#602C91", "#72287D"]}
            style={{
              position: "absolute",
              backgroundColor: "#434aa8",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "flex-end",
              right: 20,
              bottom: 20,
              height: 50,
              width: 50,
              borderRadius: 50 / 2,
            }}
          >
            <FontAwesome
              name="envelope-o"
              size={30}
              color="white"
              style={{ position: "absolute" }}
            />
            <FontAwesome5
              name="heart"
              size={11.5}
              color="white"
              style={{ marginBottom: 5.5 }}
            />
          </LinearGradient>
        </TouchableCmp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default FullProfileCard;

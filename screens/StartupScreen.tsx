import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useAppDispatch } from "../hooks";
import { authenticate, logout } from "../store/actions/auth/auth";
import { getUserData } from "../store/actions/user/user";

const StartupScreen = (props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem("userLoginData");
      const introingData = await AsyncStorage.getItem("introing");
      const permissionsData = await AsyncStorage.getItem("gettingPermissions");

      const transformedIntroing = JSON.parse(introingData);
      const transformedPermissions = JSON.parse(permissionsData);
      const transformedData = JSON.parse(userData);

      let [localId, token, gettingPermissions, introing] = ["", "", true, true];
      if (transformedPermissions) {
        [{ gettingPermissions }] = [transformedPermissions];
      }

      if (transformedIntroing) {
        [{ introing }] = [transformedIntroing];
      }

      if (transformedData) {
        [{ localId, token }] = [transformedData];
      }

      if (!transformedData && !introing && !gettingPermissions) {
        props.navigation.navigate("StartAuth");
        return;
      }

      if ((!token || !localId) && !introing) {
        props.navigation.navigate("StartAuth");
        return;
      }
      
      if (introing) {
        props.navigation.navigate("MainNavigator");
        return;
      }

      if (gettingPermissions) {
        await dispatch(getUserData());
        await dispatch(authenticate(localId, token));
        props.navigation.navigate("PermissionsStack");
      } else {
        await dispatch(getUserData());
        await dispatch(authenticate(localId, token));
        await props.navigation.navigate("Exhibit");
      }
    };

    tryLogin();
  }, []);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartupScreen;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";
import SignupOrLoginScreen from "../screens/auth/SignupOrLoginScreen";
import SignupScreen1 from "../screens/auth/1A_SignupPhone/SignupScreen1";
import SignupScreen2 from "../screens/auth/1A_SignupPhone/SignupScreen2";
import AIntroduction from "../screens/auth/1B_CreateUser/AIntroduction";
import CreateUser1 from "../screens/auth/1B_CreateUser/CreateUser1";
import CreateUser2 from "../screens/auth/1B_CreateUser/CreateUser2";
import CreateUser3 from "../screens/auth/1B_CreateUser/CreateUser3";
import CreateUser4 from "../screens/auth/1B_CreateUser/CreateUser4";
import CreateUser5 from "../screens/auth/1B_CreateUser/CreateUser5";
import ReadyToBuild from "../screens/auth/1B_CreateUser/ReadyToBuild";
import BuildProfile1 from "../screens/auth/1C_BuildProfile/BuildProfile1";
import BuildProfile2 from "../screens/auth/1C_BuildProfile/BuildProfile2";
import BuildProfile3 from "../screens/auth/1C_BuildProfile/BuildProfile3";
import BuildProfile4 from "../screens/auth/1C_BuildProfile/BuildProfile4";
import BuildProfile5 from "../screens/auth/1C_BuildProfile/BuildProfile5";
import BuildProfile6 from "../screens/auth/1C_BuildProfile/BuildProfile6";
import BuildProfile7 from "../screens/auth/1C_BuildProfile/BuildProfile7";
import BuildProfile8 from "../screens/auth/1C_BuildProfile/BuildProfile8";
import BuildProfile9 from "../screens/auth/1C_BuildProfile/BuildProfile9";
import PreviewProfile from "../screens/auth/1C_BuildProfile/PreviewProfile";
import ReadyForFirstSurveys from "../screens/auth/1C_BuildProfile/ReadyForFirstSurveys";
import AFirstSurveysIntroduction from "../screens/auth/1D_FirstSurveys/AFirstSurveysIntroduction";
import FirstSurveys2 from "../screens/auth/1D_FirstSurveys/FirstSurveys2";
import FirstSurveys3 from "../screens/auth/1D_FirstSurveys/FirstSurveys3";
import FirstSurveys4 from "../screens/main/4_QuestionnaireTab/CreateSurvey/CreateSurvey3";
import FirstSurveys5 from "../screens/auth/1D_FirstSurveys/FirstSurveys5";
import FirstSurveys6 from "../screens/auth/1D_FirstSurveys/FirstSurveys6";
import FirstSurveys7 from "../screens/auth/1D_FirstSurveys/FirstSurveys7";
import FirstSurveys8 from "../screens/auth/1D_FirstSurveys/FirstSurveys8";
import FirstSurveys9 from "../screens/auth/1D_FirstSurveys/FirstSurveys9";
import FirstSurveys10 from "../screens/auth/1D_FirstSurveys/FirstSurveys10";
import FirstSurveys11 from "../screens/auth/1D_FirstSurveys/FirstSurveys11";
import SurveyDone from "../screens/auth/1D_FirstSurveys/SurveyDone";
import LastAuthScreen1 from "../screens/auth/1E_LastAuthScreens/1_LastAuthScreen1";
import LastAuthScreen2 from "../screens/auth/1E_LastAuthScreens/1_LastAuthScreen2";
import InterScreen from "../screens/auth/1E_LastAuthScreens/InterScreen";
import StartupScreen from "../screens/StartupScreen";

const Stack = createStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

function AuthenticatedNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Startup"
        component={StartupScreen}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="StartAuth"
        component={SignupOrLoginScreen}
        options={{
          gestureEnabled: false,
          cardStyleInterpolator: forFade,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignupPhoneScreen1"
        component={SignupScreen1}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignupPhoneScreen2"
        component={SignupScreen2}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AIntroduction"
        component={AIntroduction}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateUser1"
        component={CreateUser1}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateUser2"
        component={CreateUser2}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateUser3"
        component={CreateUser3}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateUser4"
        component={CreateUser4}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateUser5"
        component={CreateUser5}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ReadyToBuild"
        component={ReadyToBuild}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BuildProfile1"
        component={BuildProfile1}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BuildProfile2"
        component={BuildProfile2}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BuildProfile3"
        component={BuildProfile3}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BuildProfile4"
        component={BuildProfile4}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BuildProfile5"
        component={BuildProfile5}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BuildProfile6"
        component={BuildProfile6}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BuildProfile7"
        component={BuildProfile7}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BuildProfile8"
        component={BuildProfile8}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BuildProfile9"
        component={BuildProfile9}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PreviewProfile"
        component={PreviewProfile}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ReadyForFirstSurveys"
        component={ReadyForFirstSurveys}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AFirstSurveysIntroduction"
        component={AFirstSurveysIntroduction}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FirstSurveys2"
        component={FirstSurveys2}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FirstSurveys3"
        component={FirstSurveys3}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FirstSurveys4"
        component={FirstSurveys4}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FirstSurveys5"
        component={FirstSurveys5}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FirstSurveys6"
        component={FirstSurveys6}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FirstSurveys7"
        component={FirstSurveys7}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FirstSurveys8"
        component={FirstSurveys8}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FirstSurveys9"
        component={FirstSurveys9}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FirstSurveys10"
        component={FirstSurveys10}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FirstSurveys11"
        component={FirstSurveys11}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SurveyDone"
        component={SurveyDone}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LastAuthScreen1"
        component={LastAuthScreen1}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LastAuthScreen2"
        component={LastAuthScreen2}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="InterScreen"
        component={InterScreen}
        options={{
          cardStyleInterpolator: forFade,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthenticatedNavigator;

import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import AppNavigator from "./navigation/AppNavigator";
import progressbarReducer from "./store/reducers/progressbar";
import firebase from "firebase/app";
import * as Notifications from "expo-notifications";
import FirebaseConfig from "./config";
import { useFonts } from "expo-font";

// Initialize Firebase
const firebaseConfig = {
  apiKey: FirebaseConfig.apikey,
  authDomain: FirebaseConfig.authDomain,
  databaseURL: FirebaseConfig.databaseURL,
  storageBucket: FirebaseConfig.storageBucket,
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const rootReducer = combineReducers({
  progressbar: progressbarReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch | any;

const App = () => {
  useFonts({
    Nautilus: require("./assets/fonts/Nautilus.otf"),
  });

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;

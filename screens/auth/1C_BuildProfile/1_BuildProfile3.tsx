import React, {useCallback, useEffect, useReducer, useState} from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import {Feather, Ionicons, FontAwesome5} from '@expo/vector-icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppDispatch} from '../../../hooks';
import {setProgress} from '../../../store/actions/progressbar/progressbar';

import Input from '../../../components/Input';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === 'FORM_INPUT_UPDATE') {
    const updateValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      if (updatedValidities.hasOwnProperty(key)) {
        updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
      }
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updateValues,
    };
  }
  return state;
};

const BuildProfile3 = (props) => {
  const dispatch = useAppDispatch();
  const [enabledAvoidView, setEnabledAvoidView] = useState(true);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      school: '',
    },
    inputValidities: {
      school: false,
    },
    formIsValid: false,
  });

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState],
  );

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === 'android') {
    TouchableCmp = TouchableNativeFeedback;
  }

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', async () => {
      setEnabledAvoidView(true);
    });

    return unsubscribe;
  }, [props.navigation]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={enabledAvoidView}
      style={styles.screen}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={'dark-content'} animated={true} />
        <TouchableCmp
          onPress={() => {
            dispatch(setProgress(0.09));
            props.navigation.goBack();
          }}>
          <Ionicons
            name="ios-arrow-back"
            size={30}
            color="black"
            style={{margin: 20}}
          />
        </TouchableCmp>
        <View style={{flex: 1, marginTop: 80}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: '10%',
            }}>
            <Text style={styles.youAreAText}>
              Most recent or current school?
            </Text>
            <FontAwesome5
              name="school"
              size={24}
              color="black"
              style={{marginHorizontal: 5}}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <Input
              id="school"
              placeholder="Name of school"
              required
              keyboardType="default"
              returnKeyType="next"
              textContentType="none"
              autoFocus={true}
              autoCorrect={false}
              contextMenuHidden={true}
              maxLength={40}
              blurOnSubmit={false}
              onInputChange={inputChangeHandler}
              onSubmitEditing={() => {
                dispatch(setProgress(1));
                setEnabledAvoidView(false);
                props.navigation.navigate('BuildProfile10');
              }}
              initialValue=""
              styleInput={{
                fontSize: 28,
                fontWeight: '300',
                backgroundColor: '#ffffff',
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <View
            style={{
              flex: 1,
              marginLeft: 20,
              flexDirection: 'row',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Text style={{fontSize: 13, marginHorizontal: 10}}>Skip</Text>
          </View>
          <TouchableCmp
            onPress={() => {
              dispatch(setProgress(0.27));
              setEnabledAvoidView(false);
              props.navigation.navigate('BuildProfile4');
            }}>
            <View
              style={{
                borderColor: '#A1A1A1',
                borderWidth: 1,
                marginRight: 20,
                height: 70,
                width: 70,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                borderRadius: 35,
                backgroundColor: '#ffffff',
                shadowOffset: {
                  width: -2,
                  height: 2,
                },
                shadowColor: 'black',
                shadowOpacity: 0.3,
                shadowRadius: 2,
              }}>
              <Feather name="arrow-right" size={28} color={'#616161'} />
            </View>
          </TouchableCmp>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  youAreAText: {
    color: 'black',
    fontSize: 22,
    fontWeight: '500',
  },

  buttonsContainer: {
    padding: 40,
    paddingBottom: 120,
  },
});

export default BuildProfile3;

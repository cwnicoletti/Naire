import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Feather} from '@expo/vector-icons';
import {useAppDispatch} from '../../../hooks';
import LottieView from 'lottie-react-native';

const LastAuthScreen1 = (props) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const lottieRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (lottieRef.current) {
        lottieRef.current.play();
      }
    }, 900);
  }, []);

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === 'android') {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} animated={true} />
      <View
        style={{
          flex: 2,
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginHorizontal: '10%',
        }}>
        <Text style={{fontWeight: '500', fontSize: 32, color: '#434aa8'}}>
          A couple rules before you begin!
        </Text>
      </View>
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: '10%',
        }}>
        <LottieView
          ref={lottieRef}
          source={require('../../../assets/lottie_anims/13398-money-stack.json')}
          autoPlay={false}
          loop={false}
          style={{height: 120}}
        />
        <Text style={{fontWeight: '400', fontSize: 28, marginTop: 60}}>
          We highly recommend splitting the bill for each date
        </Text>
        <Text
          style={{
            fontWeight: '300',
            fontSize: 22,
            marginTop: 10,
            color: 'grey',
          }}>
          A lot of dates, means a lot of money
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <TouchableCmp
          onPress={() => {
            props.navigation.navigate('LastAuthScreen2');
          }}>
          <View
            style={{
              borderColor: '#A1A1A1',
              borderWidth: 1,
              marginRight: 20,
              marginBottom: 20,
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
            {!loading ? (
              <Feather name="arrow-right" size={28} color={'#616161'} />
            ) : (
              <ActivityIndicator color="#616161" />
            )}
          </View>
        </TouchableCmp>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  yourCode: {
    marginLeft: '10%',
    color: 'black',
    fontSize: 29,
    fontWeight: '500',
  },

  authContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  activityContainer: {
    marginTop: 10,
  },
});

export default LastAuthScreen1;

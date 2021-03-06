import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Image,
} from 'react-native';
import {Ionicons, Entypo} from '@expo/vector-icons';
import {Modalize} from 'react-native-modalize';

const BackNotifications = ({navigation, route}) => {
  const [params, setParams] = useState({});

  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  useEffect(() => {
    if (route.params) {
      setParams(route.params);
    }
  }, [route.params]);

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === 'android') {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <SafeAreaView
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <TouchableCmp
        onPress={() => {
          navigation.pop();
        }}>
        <Ionicons
          name="ios-arrow-back"
          size={28}
          color="black"
          style={{marginLeft: 20}}
        />
      </TouchableCmp>
      <TouchableCmp
        onPress={() => {
          navigation.navigate('ViewProfile', {
            image1: params.image1,
            image2: params.image2,
            image3: params.image3,
            image4: params.image4,
            image5: params.image5,
            image6: params.image6,
            prompt1: params.prompt1,
            answer1: params.answer1,
            prompt2: params.prompt2,
            answer2: params.answer2,
            prompt3: params.prompt3,
            answer3: params.answer3,
            age: params.age,
            height: params.height,
            worksOut: params.worksOut,
            city: params.city,
            smokesTobacco: params.smokesTobacco,
            smokesWeed: params.smokesWeed,
            drinks: params.drinks,
            drugs: params.drugs,
            education: params.education,
            school: params.school,
            jobTitle: params.jobTitle,
            predictionValue: params.predictionValue,
          });
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{uri: params.image1}}
            style={{
              height: 60,
              width: 60,
              borderRadius: 60 / 2,
            }}
          />
          <Text style={{fontSize: 16, fontWeight: '200', margin: 5}}>
            {params.name}
          </Text>
        </View>
      </TouchableCmp>
      <TouchableCmp
        onPress={() => {
          onOpen();
        }}>
        <Entypo
          name="dots-three-vertical"
          size={24}
          color="black"
          style={{marginRight: 20}}
        />
      </TouchableCmp>
    </SafeAreaView>
  );
};

export default BackNotifications;

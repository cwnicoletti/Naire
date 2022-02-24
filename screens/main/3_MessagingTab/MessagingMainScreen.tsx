import React, { useEffect, useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  StatusBar,
  View,
  Image,
  FlatList,
  UIManager,
  LayoutAnimation,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { LinearGradient } from "expo-linear-gradient";
import * as Progress from "react-native-progress";
import { setProgress } from "../../../store/actions/progressbar/progressbar";
import MaskedView from "@react-native-masked-view/masked-view";

const MessagingMainScreen = ({ navigation }) => {
  const dispatch = useAppDispatch();

  const initialData = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      previewImage:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642783893/Naire/Riley%20Hubatka/dksghfjdsg098356346_qzoyu5.jpg",
      image1:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642783893/Naire/Riley%20Hubatka/dksghfjdsg098356346_qzoyu5.jpg",
      image2:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642783894/Naire/Riley%20Hubatka/fowidqjiwkg695_qcua5f.jpg",
      image3:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642783894/Naire/Riley%20Hubatka/miowdkorefoghig569_zk9aay.jpg",
      image4:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642783893/Naire/Riley%20Hubatka/dfjkhgfdjkg854_v6e2x4.jpg",
      image5:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642783894/Naire/Riley%20Hubatka/lkjrhewuitwoeirty5489_blbwv3.jpg",
      image6:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642783892/Naire/Riley%20Hubatka/iowcsjqioejwt85439_nzfoat.jpg",
      prompt1: "I'm really wondering",
      answer1: "Do you chew with your mouth open? 😷",
      prompt2: "If I could ask _____ one question",
      answer2: "God. How did you do that whole Mary thing? lol",
      prompt3: "Something I'd like to know about you",
      answer3: "Who's your favorite music artist? :)",
      name: "Jennifer Mouser",
      age: 23,
      height: `"5' 3"`,
      worksOut: "Actively",
      city: "Long Beach",
      smokesTobacco: "Rarely",
      smokesWeed: "Socially",
      drinks: "Often",
      drugs: "Rarely",
      education: "In college",
      school: "Long Beach State University",
      jobTitle: "Nurse",
      predictionValue: 89.97,
      topPrediction: false,
      newMatch: true,
      notify: true,
      online: true,
      text: "hi! :)",
      chat: [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          fromMe: false,
          text: "hi! :)",
        },
      ],
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      previewImage:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642783893/Naire/Riley%20Hubatka/dksghfjdsg098356346_qzoyu5.jpg",
      image1:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642782746/Naire/Genevieve%20Hannelius/nbvmnmbn3333_pzyg8g.jpg",
      image2:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642782745/Naire/Genevieve%20Hannelius/237685gfdhfnghfm_j_kiy4ti.jpg",
      image3:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642457993/Naire/Genevieve%20Hannelius/messagespic5_g33hm3.jpg",
      image4:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642782745/Naire/Genevieve%20Hannelius/678867tjhrjtyhrh_ahmijd.jpg",
      image5:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642782746/Naire/Genevieve%20Hannelius/1111hfgdhgfh_bls1ng.jpg",
      image6:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642782745/Naire/Genevieve%20Hannelius/tweyruyti909090_khanw3.jpg",
      name: "Stephanie Pettersen",
      age: 22,
      height: `"5' 7"`,
      worksOut: "Actively",
      city: "Castaic",
      smokesTobacco: "Never",
      smokesWeed: "Socially",
      drinks: "Socially",
      drugs: "Rarely",
      education: "Undergraduate Degree",
      school: "University of California, Santa Cruz",
      jobTitle: "Product Designer",
      predictionValue: 99.37,
      topPrediction: true,
      newMatch: false,
      notify: true,
      online: true,
      text: "hahha well I guess we'll just have to wait and see what multiverse we end up in ;)",
      chat: [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb2treyrty8ba",
          fromMe: false,
          text: "Test",
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abbytrey6528ba",
          fromMe: true,
          text: "Test",
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53ab654yu5yrtb28ba",
          fromMe: false,
          text: "Test",
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abbfgdhfh28ba",
          fromMe: true,
          text: "Test",
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abbbvcxbg28ba",
          fromMe: false,
          text: "Test",
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abbgdfhe5428ba",
          fromMe: true,
          text: "Test",
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abgfdh54wtb28ba",
          fromMe: false,
          text: "Test",
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abbhfghfgd3428ba",
          fromMe: true,
          text: "Test",
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abbgdfbcvdb4328ba",
          fromMe: false,
          text: "Test",
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abf3w2345dfgsb28ba",
          fromMe: true,
          text: "Test",
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb2gfdsg348ba",
          fromMe: false,
          text: "Test",
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abbfsgf34428ba",
          fromMe: true,
          text: "Test",
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abfdgfgfdsg44b28ba",
          fromMe: false,
          text: "Test",
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb2fdsgfdg3448ba",
          fromMe: true,
          text: "Test",
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abbgfds32328ba",
          fromMe: false,
          text: "Test",
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          fromMe: true,
          text: "Hellooo! :) So apparently having a giraffe lick your face isn't a good thing? Wrong multiverse I guess",
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          fromMe: false,
          text: "I mean maybe if he bought me a drink first LOL",
        },
        {
          id: "58694a0f-3da1-471f-bd96-09879607098776",
          fromMe: true,
          text: "Hahahaha",
        },
        {
          id: "58694a0f-3da1-471f-bd96-546456466",
          fromMe: true,
          text: "Does that mean If I buy you a drink I can lick your face too?",
        },
        {
          id: "58694a0f-3da1-471f-bd96-76867869",
          fromMe: false,
          text: "hahha well I guess we'll just have to wait and see what multiverse we end up in ;)",
        },
      ],
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      previewImage:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642783893/Naire/Riley%20Hubatka/dksghfjdsg098356346_qzoyu5.jpg",
      image1:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642783121/Naire/Annalise%20Basso/tyu76875869thr_jpzomq.jpg",
      image2:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642783122/Naire/Annalise%20Basso/jhhgtkjhl989999_riavuc.jpg",
      image3:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642783122/Naire/Annalise%20Basso/hjgkjhol00000_xn7p6p.jpg",
      image4:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642783122/Naire/Annalise%20Basso/56456uhjhg_clpot3.jpg",
      image5:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642783122/Naire/Annalise%20Basso/rtutiu89967_ryr3i1.jpg",
      image6:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642457993/Naire/Annalise%20Basso/messagespic3_fcrkyt.jpg",
      name: "Luna Stewart",
      age: 26,
      height: `"5' 9"`,
      worksOut: "Rarely",
      city: "Santa Clarita",
      smokesTobacco: "Never",
      smokesWeed: "Socially",
      drinks: "Socially",
      drugs: "Rarely",
      education: "Undergraduate Degree",
      school: "University of California, Santa Cruz",
      jobTitle: "Waitress",
      predictionValue: 79.81,
      topPrediction: false,
      newMatch: false,
      notify: true,
      online: true,
      text: "so I've just been chillin ever since",
      chat: [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          fromMe: false,
          text: "hii!(:",
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          fromMe: true,
          text: "Hey! :) How's being a vet??",
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          fromMe: false,
          text: "It's aight haha!",
        },
        {
          id: "58694a0f-3da1-471f-bd96-09879607098776",
          fromMe: true,
          text: "Is it super hectic in those places? I've always wondered how intense that job is",
        },
        {
          id: "58694a0f-3da1-471f-bd96-546456466",
          fromMe: false,
          text: "Well before this I was working with actual wild animals",
        },
        {
          id: "58694a0f-3da1-471f-bd96-56748585fgdhfg",
          fromMe: false,
          text: "so I've just been chillin ever since :p",
        },
      ],
    },
    {
      id: "58694a0f-3da1-471f-bd96-546456466",
      previewImage:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642783893/Naire/Riley%20Hubatka/dksghfjdsg098356346_qzoyu5.jpg",
      image1:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642784061/Naire/Daisy%20Keech/ireufgewhgier4395_jsh2n7.jpg",
      image2:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642784061/Naire/Daisy%20Keech/duiwqehety54786_tir44r.jpg",
      image3:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642784061/Naire/Daisy%20Keech/gerjihkhgry8657_ptu7im.jpg",
      image4:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642784063/Naire/Daisy%20Keech/iofdwkqiopeiu58467_x74ctg.jpg",
      image5:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642784063/Naire/Daisy%20Keech/fgkhjirtkweoqlgt08_s27mnq.jpg",
      image6:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642784060/Naire/Daisy%20Keech/weiojirewy96758_fcina2.jpg",
      name: "Aria Balinska",
      age: 28,
      height: `"5' 5"`,
      worksOut: "Actively",
      city: "Newhall",
      smokesTobacco: "Never",
      smokesWeed: "Socially",
      drinks: "Socially",
      drugs: "Rarely",
      education: "Undergraduate Degree",
      school: "University of California, Santa Cruz",
      jobTitle: "Accountant",
      predictionValue: 75.21,
      topPrediction: false,
      newMatch: false,
      notify: false,
      online: true,
      text: "I would rather DIE than meet you >:(",
      chat: [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          fromMe: true,
          text: "HEY WHAT'S UP BABY GIRL LEMME HOLLA AT YA",
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          fromMe: false,
          text: "WTF",
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          fromMe: true,
          text: "THAT'S RIGHT BABY GIRL, WHEN AM I MEETING YOU? ;)",
        },
        {
          id: "58694a0f-3da1-471f-bd96-09879607098776",
          fromMe: false,
          text: "I would rather DIE than meet you >:(",
        },
      ],
    },
    {
      id: "58694a0f-3da1-471f-bd96-76777",
      previewImage:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642783893/Naire/Riley%20Hubatka/dksghfjdsg098356346_qzoyu5.jpg",
      image1:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642457993/Naire/Luna%20Wedler/messagespic6_nlcqvu.jpg",
      image2:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642782605/Naire/Luna%20Wedler/gfdhfgdfg222_exhyin.jpg",
      image3:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642782606/Naire/Luna%20Wedler/fdsdsd344_uhrhdu.jpg",
      image4:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642782605/Naire/Luna%20Wedler/hfgdhhhhhhhh8888_hawcof.jpg",
      image5:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642782606/Naire/Luna%20Wedler/trerhjrhtreh3333_vqge6k.jpg",
      image6:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642782606/Naire/Luna%20Wedler/wfdgdsfdg2222_prbgni.jpg",
      name: "Chloe Pedraza",
      age: 21,
      height: `"5' 4"`,
      worksOut: "Rarely",
      city: "Newhall",
      smokesTobacco: "Never",
      smokesWeed: "Socially",
      drinks: "Socially",
      drugs: "Rarely",
      education: "Undergraduate Degree",
      school: "University of California, Santa Cruz",
      jobTitle: "Hair & Makeup Artist",
      predictionValue: 84.37,
      topPrediction: false,
      newMatch: false,
      notify: false,
      online: false,
      text: "I would literally KILL to meet you ;)",
      chat: [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          fromMe: false,
          text: "I would literally KILL to meet you ;)",
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          fromMe: true,
          text: "That's weird lmao",
        },
      ],
    },
    {
      id: "58694a0f-3da1-471f-bd96-53433",
      previewImage:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642783893/Naire/Riley%20Hubatka/dksghfjdsg098356346_qzoyu5.jpg",
      image1:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642785593/Naire/Park%20Min%20Young/wdifjrew8546546_bbijdl.jpg",
      image2:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642785593/Naire/Park%20Min%20Young/wkoreyik8967_soosdi.jpg",
      image3:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642785593/Naire/Park%20Min%20Young/fuifgwewokqe78546_pbna2m.jpg",
      image4:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642785593/Naire/Park%20Min%20Young/opqewwqirtu574836_c1yds8.jpg",
      image5:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642785596/Naire/Park%20Min%20Young/uhhgdfuihkdf388759436_esluux.png",
      image6:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642785593/Naire/Park%20Min%20Young/wequytrrwe7564352435_vsw8zl.jpg",
      prompt1: "Something I'd like to know about your interests",
      answer1:
        "Does it require hand-eye coordination? cuz I don't have the energy for that lmao",
      prompt2: "One of my favorite deep questions",
      answer2:
        "Which parallel universe versions of yourself would you want to meet and why?",
      prompt3: "Something I'd like to know about you",
      answer3: "What do you love most about yourself? :)",
      name: "Hana Campbell",
      age: 25,
      height: `"5' 10"`,
      worksOut: "Rarely",
      city: "Los Angeles",
      smokesTobacco: "Never",
      smokesWeed: "Socially",
      drinks: "Socially",
      drugs: "Rarely",
      education: "Undergraduate Degree",
      school: "University of California, Santa Cruz",
      jobTitle: "Model",
      predictionValue: 85.32,
      topPrediction: false,
      newMatch: false,
      notify: false,
      online: false,
      text: "Dammnn I can only imagine",
      chat: [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          fromMe: false,
          text: "hello! :))",
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          fromMe: true,
          text: "Hi! :) So what's the hardest part about being a model? I'm genuinely curous",
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          fromMe: false,
          text: "Marketing myself for sure. It takes a lot more energy than people think",
        },
        {
          id: "58694a0f-3da1-471f-bd96-09879607098776",
          fromMe: true,
          text: "Dammnn I can only imagine",
        },
      ],
    },
    {
      id: "58694a0f-3da1-471f-bd96-2315535246",
      previewImage:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642783893/Naire/Riley%20Hubatka/dksghfjdsg098356346_qzoyu5.jpg",
      image1:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642457993/Naire/Emily%20Robinson/messagespic4_ett44w.jpg",
      image2:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642782938/Naire/Emily%20Robinson/reytru99000_oqxyjy.jpg",
      image3:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642782938/Naire/Emily%20Robinson/oiuouipo8797_x1bvuz.jpg",
      image4:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642782938/Naire/Emily%20Robinson/9908098hgjfghj_apwtkz.jpg",
      image5:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642782938/Naire/Emily%20Robinson/321564367fdhdfghfgh_s9f6zg.jpg",
      image6:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642782938/Naire/Emily%20Robinson/75689987ghjhgj_fmd8yg.jpg",
      name: "Claire Henley",
      age: 27,
      height: `"5' 11"`,
      worksOut: "Sometimes",
      city: "West Hollywood",
      smokesTobacco: "Never",
      smokesWeed: "Socially",
      drinks: "Socially",
      drugs: "Rarely",
      education: "Undergraduate Degree",
      school: "University of California, Santa Cruz",
      jobTitle: "Fashion Designer",
      predictionValue: 69.23,
      topPrediction: false,
      newMatch: false,
      notify: false,
      online: false,
      text: "sounds good to me! :)",
      chat: [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          fromMe: false,
          text: "what do u want from me",
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          fromMe: true,
          text: "lol wdym??",
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          fromMe: false,
          text: "YOU KNOW WHAT I MEAN YOU ASSHOLE",
        },
        {
          id: "58694a0f-3da1-471f-bd96-09879607098776",
          fromMe: true,
          text: "haha u already know baabbyyy",
        },
        {
          id: "58694a0f-3da1-471f-bd96-546456466",
          fromMe: false,
          text: "jk, I think that's hot",
        },
        {
          id: "58694a0f-3da1-471f-bd96-56748585fgdhfg",
          fromMe: false,
          text: "maybe we can meet up this weekend? :)",
        },
        {
          id: "58694a0f-3da1-471f-bd96-476u67u76jyu",
          fromMe: true,
          text: "I'm down. How about Saturday at 8pm at Yoto's Sushi bar?",
        },
        {
          id: "58694a0f-3da1-471f-bd96-654htrehgd56",
          fromMe: false,
          text: "sounds good to me! :)",
        },
      ],
    },
  ];

  const [listColumnData, setListColumnData] = useState(initialData);

  const layoutAnimConfig = {
    duration: 300,
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
    },
    delete: {
      duration: 50,
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
  };

  if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  const TopRowItem = ({ image1, topPrediction, newMatch, notify, online }) => (
    <View
      style={{
        paddingBottom: 40,
      }}
    >
      {notify || online ? (
        <TouchableCmp
          onPress={() => {
            if (topPrediction && notify) {
              setListColumnData(() =>
                initialData.filter(
                  (match) => match.topPrediction && match.notify
                )
              );
              LayoutAnimation.configureNext(layoutAnimConfig);
            }
            if (topPrediction && online) {
              setListColumnData(() =>
                initialData.filter(
                  (match) => match.topPrediction && match.online
                )
              );
              LayoutAnimation.configureNext(layoutAnimConfig);
            }
            if (newMatch && notify) {
              setListColumnData(() =>
                initialData.filter((match) => match.newMatch && match.notify)
              );
              LayoutAnimation.configureNext(layoutAnimConfig);
            }
            if (newMatch && online) {
              setListColumnData(() =>
                initialData.filter((match) => match.newMatch && match.online)
              );
              LayoutAnimation.configureNext(layoutAnimConfig);
            }
            if (notify && !newMatch && !topPrediction) {
              setListColumnData(() =>
                initialData.filter(
                  (match) =>
                    match.notify && !match.newMatch && !match.topPrediction
                )
              );
              LayoutAnimation.configureNext(layoutAnimConfig);
            }
            if (online && !notify && !newMatch && !topPrediction) {
              setListColumnData(() =>
                initialData.filter(
                  (match) =>
                    match.online &&
                    !match.notify &&
                    !match.newMatch &&
                    !match.topPrediction
                )
              );
              LayoutAnimation.configureNext(layoutAnimConfig);
            }
          }}
        >
          <MaskedView
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
            }}
            maskElement={
              <View
                style={{
                  height: "100%",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Progress.Circle
                  progress={online ? (newMatch || topPrediction ? 0.83 : 1) : 0}
                  size={90}
                  color={
                    newMatch ? "#00D6DE" : topPrediction ? "#FF0000" : "#434aa8"
                  }
                  borderWidth={0}
                  showsText={false}
                  strokeCap={"round"}
                  thickness={2}
                  style={{
                    position: "absolute",
                    transform: [{ rotate: "211deg" }],
                  }}
                />
              </View>
            }
          >
            <LinearGradient
              colors={
                newMatch
                  ? ["#45F9FF", "#00C8D6", "#00D6DE"]
                  : topPrediction
                  ? ["#FF0000", "#D10081", "#D100C3"]
                  : ["#A700D1", "#602C91", "#434aa8"]
              }
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
              }}
            />
          </MaskedView>
          {notify ? (
            <View
              style={{
                left: 5,
                zIndex: 99999,
              }}
            >
              <LinearGradient
                colors={
                  newMatch
                    ? ["#00D6DE", "#00C8D6", "#45F9FF"]
                    : topPrediction
                    ? ["#FF0000", "#D10081", "#D100C3"]
                    : ["#A700D1", "#602C91", "#434aa8"]
                }
                style={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  height: 13,
                  width: 13,
                  borderRadius: 13 / 2,
                  backgroundColor: "#434aa8",
                }}
              />
            </View>
          ) : null}
          <View
            style={{
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <Image
              source={{ uri: image1 }}
              style={{
                height: 75,
                width: 75,
                marginHorizontal: 15,
                borderRadius: 75 / 2,
              }}
            />
            {newMatch ? (
              <LinearGradient
                colors={["#45F9FF", "#00C8D6", "#00D6DE"]}
                style={{
                  position: "absolute",
                  bottom: -16,
                  backgroundColor: "#434aa8",
                  borderRadius: 15 / 2,
                  height: 15,
                  width: 40,
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "500",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  New
                </Text>
              </LinearGradient>
            ) : null}
            {topPrediction ? (
              <LinearGradient
                colors={["#FF0000", "#D10081", "#D100C3"]}
                style={{
                  position: "absolute",
                  bottom: -16,
                  backgroundColor: "#434aa8",
                  borderRadius: 15 / 2,
                  height: 15,
                  width: 40,
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "500",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Top
                </Text>
              </LinearGradient>
            ) : null}
          </View>
        </TouchableCmp>
      ) : null}
    </View>
  );

  const Item = ({
    name,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    prompt1,
    answer1,
    prompt2,
    answer2,
    prompt3,
    answer3,
    age,
    height,
    worksOut,
    city,
    smokesTobacco,
    smokesWeed,
    drinks,
    drugs,
    education,
    school,
    jobTitle,
    predictionValue,
    topPrediction,
    newMatch,
    notify,
    online,
    text,
    chat,
  }) => (
    <TouchableCmp
      onPress={() => {
        navigation.navigate("ChatScreen", {
          image1,
          image2,
          image3,
          image4,
          image5,
          image6,
          prompt1,
          answer1,
          prompt2,
          answer2,
          prompt3,
          answer3,
          age,
          height,
          worksOut,
          city,
          smokesTobacco,
          smokesWeed,
          drinks,
          drugs,
          education,
          school,
          jobTitle,
          predictionValue,
          name,
          chat,
        });
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 5,
        }}
      >
        <View>
          <MaskedView
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
            }}
            maskElement={
              <View
                style={{
                  height: "100%",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Progress.Circle
                  progress={online ? 0.81 : 0}
                  size={90}
                  color={
                    newMatch ? "#00D6DE" : topPrediction ? "#FF0000" : "#434aa8"
                  }
                  borderWidth={0}
                  showsText={false}
                  strokeCap={"round"}
                  thickness={2}
                  style={{
                    position: "absolute",
                    transform: [{ rotate: "215deg" }],
                  }}
                />
              </View>
            }
          >
            <LinearGradient
              colors={
                newMatch
                  ? ["#45F9FF", "#00C8D6", "#00D6DE"]
                  : topPrediction
                  ? ["#FF0000", "#D10081", "#D100C3"]
                  : ["#A700D1", "#602C91", "#434aa8"]
              }
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
              }}
            />
          </MaskedView>
          <View
            style={{
              zIndex: 3,
            }}
          >
            {notify ? (
              <View
                style={{
                  position: "absolute",
                  zIndex: 99999,
                  left: 5,
                }}
              >
                <LinearGradient
                  colors={
                    newMatch
                      ? ["#45F9FF", "#00C8D6", "#00D6DE"]
                      : topPrediction
                      ? ["#FF0000", "#D10081", "#D100C3"]
                      : ["#A700D1", "#602C91", "#434aa8"]
                  }
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 7,
                    height: 15,
                    width: 15,
                    borderRadius: 15 / 2,
                    backgroundColor: "#434aa8",
                  }}
                />
              </View>
            ) : null}
            <View
              style={{
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Image
                source={{ uri: image1 }}
                style={{
                  height: 75,
                  width: 75,
                  marginHorizontal: 15,
                  borderRadius: 75 / 2,
                }}
              />
              <Text
                style={{
                  textAlign: "center",
                  position: "absolute",
                  bottom: -16,
                  fontWeight: "300",
                  color: newMatch
                    ? "#00D6DE"
                    : topPrediction
                    ? "#FF0000"
                    : "#434aa8",
                }}
              >{`${predictionValue}%`}</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: notify ? "600" : "200",
            }}
          >
            {name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 5,
            }}
          >
            <Text
              numberOfLines={2}
              style={{
                fontSize: 18,
                fontWeight: notify ? "500" : "300",
                color: "grey",
                flex: 1,
                flexWrap: "wrap",
              }}
            >
              {text}
            </Text>
          </View>
        </View>
      </View>
    </TouchableCmp>
  );

  const renderItem = ({ item }) => (
    <Item
      name={item.name}
      image1={item.image1}
      image2={item.image2}
      image3={item.image3}
      image4={item.image4}
      image5={item.image5}
      image6={item.image6}
      prompt1={item.prompt1}
      answer1={item.answer1}
      prompt2={item.prompt2}
      answer2={item.answer2}
      prompt3={item.prompt3}
      answer3={item.answer3}
      age={item.age}
      height={item.height}
      worksOut={item.worksOut}
      city={item.city}
      smokesTobacco={item.smokesTobacco}
      smokesWeed={item.smokesWeed}
      drinks={item.drinks}
      drugs={item.drugs}
      education={item.education}
      school={item.school}
      jobTitle={item.jobTitle}
      predictionValue={item.predictionValue}
      topPrediction={item.topPrediction}
      newMatch={item.newMatch}
      text={item.text}
      notify={item.notify}
      online={item.online}
      chat={item.chat}
    />
  );

  const headerTopComponent = () => (
    <TouchableCmp
      onPress={() => {
        setListColumnData(initialData);
        LayoutAnimation.configureNext(layoutAnimConfig);
      }}
    >
      <View
        style={{
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        <MaskedView
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          maskElement={
            <View
              style={{
                height: "100%",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Progress.Circle
                progress={1}
                size={70}
                color={"#434aa8"}
                borderWidth={0}
                showsText={false}
                strokeCap={"round"}
                thickness={2}
                style={{
                  position: "absolute",
                  transform: [{ rotate: "211deg" }],
                }}
              />
            </View>
          }
        >
          <LinearGradient
            colors={["#A700D1", "#602C91", "#434aa8"]}
            style={{
              position: "absolute",
              alignItems: "center",
              height: "100%",
              width: "100%",
            }}
          />
        </MaskedView>
        <MaskedView
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          maskElement={
            <View
              style={{
                height: "100%",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Progress.Circle
                progress={1}
                size={80}
                color={"#434aa8"}
                borderWidth={0}
                showsText={false}
                strokeCap={"round"}
                thickness={2}
                style={{
                  position: "absolute",
                  transform: [{ rotate: "211deg" }],
                }}
              />
            </View>
          }
        >
          <LinearGradient
            colors={["#FF0000", "#D10081", "#D100C3"]}
            style={{
              position: "absolute",
              alignItems: "center",
              height: "100%",
              width: "100%",
            }}
          />
        </MaskedView>
        <MaskedView
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          maskElement={
            <View
              style={{
                height: "100%",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Progress.Circle
                progress={1}
                size={90}
                color={"#434aa8"}
                borderWidth={0}
                showsText={false}
                strokeCap={"round"}
                thickness={2}
                style={{
                  position: "absolute",
                  transform: [{ rotate: "211deg" }],
                }}
              />
            </View>
          }
        >
          <LinearGradient
            colors={["#45F9FF", "#00C8D6", "#00D6DE"]}
            style={{
              position: "absolute",
              alignItems: "center",
              height: "100%",
              width: "100%",
            }}
          />
        </MaskedView>
        <View
          style={{
            zIndex: 3,
          }}
        >
          <View
            style={{
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <View
              style={{
                height: 75,
                width: 75,
                marginHorizontal: 15,
                borderRadius: 75 / 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontWeight: "600", fontSize: 18, color: "#434aa8" }}
              >
                ALL
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableCmp>
  );

  const renderTopRowItem = ({ item }) => (
    <TopRowItem
      image1={item.image1}
      topPrediction={item.topPrediction}
      newMatch={item.newMatch}
      notify={item.notify}
      online={item.online}
    />
  );

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      dispatch(setProgress(0));
      navigation.getParent()?.setOptions({
        tabBarStyle: { display: "flex" },
      });
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} animated={true} />
      <View style={{ height: 120 }}>
        <FlatList
          data={initialData}
          horizontal={true}
          inverted={true}
          renderItem={renderTopRowItem}
          ListHeaderComponent={headerTopComponent}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            marginTop: 10,
          }}
        />
      </View>
      <View
        style={{
          width: "80%",
          borderColor: "#EDEDED",
          borderBottomWidth: 1,
          alignSelf: "center",
          marginVertical: 5,
        }}
      />
      <FlatList
        data={listColumnData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={listColumnData.length <= 1 ? false : true}
        ItemSeparatorComponent={(e) => (
          <View
            style={{
              marginVertical: 5,
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  yourCode: {
    marginLeft: "10%",
    color: "black",
    fontSize: 29,
    fontWeight: "500",
  },

  authContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  activityContainer: {
    marginTop: 10,
  },
});

export default MessagingMainScreen;

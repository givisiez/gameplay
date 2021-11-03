import React from "react";
import { View, Text, ImageBackground } from 'react-native';
import { BorderlessButton } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Fontisto";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles"; 
import BannerImg from "../../assets/banner.png"

import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { Header } from "../../components/Header";


export function AppointmentDetails(){
  return (
    <Background>
      <Header 
        title="Detalhes"
        action = {
          <BorderlessButton>
            <Icon 
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground 
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>

          <Text style={styles.subTitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida de md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader
        title="Jogadores"
        subtitle=" Total 3"
      />
    </Background>
  );
}
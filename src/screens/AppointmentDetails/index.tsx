import React from "react";
import { View, Text, ImageBackground, FlatList } from 'react-native';
import { BorderlessButton } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Fontisto";

import { theme } from "../../global/styles/theme";
import BannerImg from "../../assets/banner.png"
import { styles } from "./styles"; 


import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";
import { Member } from "../../components/Member";


// para controlar a distancia do statusbar androi x ios
// npm react-native-iphone-x-helper
// import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export function AppointmentDetails(){
  const members = [
    {
      id: 1,
      username: 'Leandro',
      avatar_url: 'https://github.com/givisiez.png',
      status: 'online'
    },
    {
      id: 2,
      username: 'Leandro',
      avatar_url: 'https://github.com/givisiez.png',
      status: 'offline'
    },
  ];

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
        subtitle="Total 3"
      />

      <FlatList 
        data={members}
        keyExtractor={item => item.id}        
        renderItem={({ item }) => (
            <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon 
          title="Entrar na partida"
        />
      </View>
    </Background>
  );
}
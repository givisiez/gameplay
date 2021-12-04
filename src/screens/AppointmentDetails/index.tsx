import React, { useState, useEffect } from "react";
import { View, Text, Alert, ImageBackground, FlatList, Share, Platform } from 'react-native';
import { BorderlessButton } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Fontisto";
import { useRoute } from "@react-navigation/core";
import * as Linking from 'expo-linking';

import BannerImg from "../../assets/banner.png"

import { theme } from "../../global/styles/theme";
import { styles } from "./styles"; 
import { api } from "../../services/api";

import { AppointmentProps } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ListDivider } from "../../components/ListDivider";
import { Member, MemberProps } from "../../components/Member";
import { Header } from "../../components/Header";
import { Load } from "../../components/Load";

// para controlar a distancia do statusbar androi x ios
// npm react-native-iphone-x-helper
// import { getStatusBarHeight } from 'react-native-iphone-x-helper'

type Params = {
  guildSelected: AppointmentProps
}

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];  
} 

export function AppointmentDetails(){
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);

  const route = useRoute();
  const { guildSelected } = route.params as Params;

  async function fetchGuilWidget() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
      setWidget(response.data);
    } catch {
      Alert.alert("Oops!", "Verifique as configurações do servidor!")
    } finally {
      setLoading(!true);
    }
  }

  function handlShareInvitation() {

    if(!widget.instant_invite){
      Alert.alert("Desculpe!","Este servidor não permite compartilhamento!");
    } else {
      const message = Platform.OS === 'ios'
      ? `Junte-se a ${guildSelected.guild.name}`
      : widget.instant_invite;

      Share.share({
        message,
        url: widget.instant_invite
      });
    }    
  }

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite);
  }

  useEffect( () => {
    fetchGuilWidget();
  }, [])

  return (
    <Background>
      <Header 
        title="Detalhes"
        action = { guildSelected.guild.owner && 
          <BorderlessButton onPress={handlShareInvitation}>
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
            { guildSelected.guild.name }
          </Text>

          <Text style={styles.subTitle}>
            { guildSelected.description }
          </Text>
        </View>
      </ImageBackground>
      
      {
        loading ? <Load /> :      
        <>
          <ListHeader
            title="Jogadores"
            subtitle={`Total ${widget.members.length}`}
          />

          <FlatList 
            data={widget.members}
            keyExtractor={item => item.id}        
            renderItem={({ item }) => (
                <Member data={item} />
            )}
            ItemSeparatorComponent={() => <ListDivider isCentered/>}
            style={styles.members}
          />

          { guildSelected.guild.owner && 
            <View style={styles.footer}>
              <ButtonIcon 
                title="Entrar na partida"
                onPress={handleOpenGuild}
              />
            </View>
          }

        </>
      }
    </Background>
  );
}
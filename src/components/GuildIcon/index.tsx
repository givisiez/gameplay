import React from "react";
import { View, Image } from "react-native";

const { CDN_IMAGE } = process.env;

import { styles } from "./styles";
import DiscordSvg from '../../assets/discord.svg';

type Props = {
  guildId: string;
  iconId: string | null;
}

export function GuildIcon({ guildId, iconId}: Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`; 
  
  return (
    <View style={styles.container}>
      { 
        iconId ?
          <Image 
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"    
          />
        : 
        <DiscordSvg 
          width={40}
          height={40}
        />
      }
    </View>
  );
}

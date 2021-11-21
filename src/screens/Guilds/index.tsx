import React from "react";
import { View, FlatList } from "react-native";

import { ListDivider } from "../../components/ListDivider";
import { Guild, GuildProps } from "../../components/Guild";

import { styles } from "./styles";

type Props = {
  handleGuildSelected: (guild: GuildProps) => void;
}

export function Guilds({handleGuildSelected}: Props) {
  const guilds = [
    {
      id: '1',
      name:  'Leandários',
      icon: 'image.png',
      owner: true
    },
    {
      id: '2',
      name:  'Hard core',
      icon: 'image.png',
      owner: true
    }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Guild 
            data={item} 
            onPress={() => handleGuildSelected(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.guilds}
      />
    </View>
  );
}

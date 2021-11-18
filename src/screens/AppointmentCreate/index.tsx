import React, { useState } from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import Icon from "@expo/vector-icons/Feather";
import { GuildIcon } from "../../components/GuildIcon";

import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";
import { Header } from "../../components/Header";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");
  return (
    <Background>
      <Header title="Agendar partida" />

      <Text
        style={[
          styles.label,
          {
            marginLeft: 24,
            marginTop: 36,
            marginBottom: 18,
          },
        ]}
      >
        Categoria
      </Text>

      <CategorySelect
        hasCheckBox
        setCategory={setCategory}
        categorySelected={category}
      />

      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>
            {
              //<View style={styles.image}/>
              <GuildIcon />
            }
            <View style={styles.selectBody}>
              <Text style={styles.label}>Selecione um servidor</Text>
            </View>

            <Icon name="chevron-right" color={theme.colors.heading} size={18} />
          </View>
        </RectButton>
      </View>
    </Background>
  );
}

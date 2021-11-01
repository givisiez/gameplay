import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export function GuildIcon() {
  const uri = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.b2wHU4Qe-FGiS4RDKymE2wAAAA%26pid%3DApi&f=1";
  return (
    <Image 
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"    
    />  
  );
}

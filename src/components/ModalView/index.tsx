import React, { ReactNode } from 'react';
import { View, Text, Modal, ModalBaseProps } from 'react-native';

import { styles } from './styles';

import { Background } from '../Background';

type Props = ModalBaseProps & {
  children: ReactNode
}

export function ModalView({children, ...rest}: Props) {
  return(
    <Modal 
      transparent
      animationType='slide'    
      {...rest}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar} />
            {children}
          </Background>
        </View>
      </View>
    </Modal>
  )
}
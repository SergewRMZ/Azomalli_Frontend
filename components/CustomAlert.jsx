
import React from 'react';
import { View, Text } from 'react-native';
import { Button, Dialog, Portal, TextInput } from 'react-native-paper';
import { colors } from '../styles/colors'; // Asegúrate de tener este archivo de colores

const CustomAlert = ({ visible, error, onDismiss, title, message, buttonText, onButtonPress }) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title
          style={{
            color: error? colors.primary : colors.secondaryLight,
            fontWeight: 'bold'
          }}
        >{title}</Dialog.Title>
        <Dialog.Content>
          <Text style={{ 
            textAlign: 'justify',
            fontWeight: 'bold'  
          }}>{message}</Text>
        </Dialog.Content>
        <Dialog.Actions style={{ justifyContent: 'center' }}>
          <Button 
            onPress={onButtonPress} 
            style={{ 
              backgroundColor: error? colors.primary : colors.secondaryLight,
              borderRadius: 5, 

            }}
            labelStyle={{
              color: colors.white,
              fontWeight: 'bold',
              width: '100%'
            }}
          >
            {buttonText}
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default CustomAlert;

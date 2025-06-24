// HomeScreen.js
import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import styles from '../styles/principal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FeatureCard = ({ imageSource, text, onPress }) => (
  <TouchableOpacity
    style={styles.buttonCard}
    onPress={onPress}
    accessible={true}
    accessibilityLabel={text}
  >
    <ImageBackground
      source={imageSource}
      style={styles.imageBackground}
      imageStyle={styles.imageOverlay}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </ImageBackground>
  </TouchableOpacity>
);

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>AZOMALLI</Text>

      <View style={styles.emotionalContainer}>
        <Image source={require('../assets/estado_emocional.png')} style={styles.emotionalImage} />
        <View style={styles.emotionalTextContainer}>
          <Text style={styles.emotionalLabel}>Estado Emocional:</Text>
          <Text style={styles.emotionalStatus}>Estrés alto</Text>
        </View>
      </View>

      <FeatureCard
        imageSource={require('../assets/ejercicio.png')}
        text="Ejercicio del Día"
        onPress={() => router.push('/activity')}
      />
      <FeatureCard
        imageSource={require('../assets/retos.png')}
        text="Retos personales"
        onPress={() => router.push('/challenge')}
      />
      <FeatureCard
        imageSource={require('../assets/alimentacion.png')}
        text="Plan alimenticio"
        onPress={() => router.push('/comida')}
      />
      <FeatureCard
        imageSource={require('../assets/consejos.png')}
        text="Consejos"
        onPress={() => router.push('/dailyTip')}
      />

<View style={styles.bottomMenu}>
  <TouchableOpacity
    style={styles.menuItem}
    onPress={() => router.push('/configuracion')}
  >
    <Icon name="cog" size={28} color="#fff" />
    <Text style={styles.menuLabel}>Ajustes</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.menuItem}
    onPress={() => router.push('/perfil')}
  >
    <Icon name="account" size={28} color="#fff" />
    <Text style={styles.menuLabel}>Perfil</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.menuItem}
    onPress={() => router.push('/notificaciones')}
  >
    <Icon name="bell" size={28} color="#fff" />
    <Text style={styles.menuLabel}>Notificaciones</Text>
  </TouchableOpacity>
</View>

    </View>
  );
}

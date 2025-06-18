// HomeScreen.js
import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import styles from '../styles/principal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>AZOMALLI</Text>

        <View style={styles.emotionalContainer}>
          <Image
            source={require('../assets/estado_emocional.png')}
            style={styles.emotionalImage}
          />
          <View style={styles.emotionalTextContainer}>
            <Text style={styles.emotionalLabel}>Estado Emocional:</Text>
            <Text style={styles.emotionalStatus}>Estrés alto</Text>
          </View>
        </View>

        <FeatureCard
          imageSource={require('../assets/ejercicio.png')}
          text="Ejercicio del Día"
          onPress={() => router.push('/ejercicio')}
        />
        <FeatureCard
          imageSource={require('../assets/retos.png')}
          text="Retos personales"
          onPress={() => router.push('/retos')}
        />
        <FeatureCard
          imageSource={require('../assets/alimentacion.png')}
          text="Plan alimenticio"
          onPress={() => router.push('/comida')}
        />
        <FeatureCard
          imageSource={require('../assets/consejos.png')}
          text="Consejos"
          onPress={() => router.push('/consejo')}
        />
      </View>

      <View style={[
        styles.bottomMenuFixed, 
        { marginBottom: insets.bottom > 0 ? insets.bottom : 16 }
      ]}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/ajustes')}
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
    </SafeAreaView>
  );
}
import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image } from 'react-native';
import { styles } from '../styles/AlimentoStyles';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function BebidaMenuScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleBack = () => router.back();

  const DATA = {
    Jugos: [
      {
        titulo: 'Agua de sandía',
        descripcion:
          'El agua de sandía es una bebida refrescante y ligera que se prepara mezclando la pulpa de la sandía con agua, y opcionalmente, un poco de azúcar o limón para realzar el sabor. Es muy popular en climas cálidos debido a su capacidad para hidratar y refrescar.',
        imagen: require('../assets/sandia.jpg'),
      },
    ],
    Batidos: [
      {
        titulo: 'Batido de mango',
        descripcion:
          'El batido de mango es una bebida refrescante y cremosa elaborada a base de mango, una fruta tropical, que se mezcla con leche o yogur, hielo, y a veces azúcar o miel para endulzar.',
        imagen: require('../assets/mango.jpg'),
      },
    ],
    Té: [
      {
        titulo: 'Agua de avena',
        descripcion:
          'El agua de avena es una bebida preparada al remojar o licuar avena en agua, a veces combinada con canela, vainilla o miel para darle sabor. Es ligera y nutritiva, ideal para consumir en ayunas o como complemento en una dieta saludable.',
        imagen: require('../assets/avena_bebida.jpg'),
      },
    ],
  };

  const [categoria, setCategoria] = useState('Jugos');
  const [expandido, setExpandido] = useState(null);

  const bebidas = DATA[categoria];

  return (
    <View style={[styles.container, {paddingTop: insets.top + 10}]}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backText}>← Regresar</Text>
      </TouchableOpacity>

      <Text style={styles.header}>Bebidas</Text>

      {/* Tabs */}
      <View style={styles.tabs}>
        {['Jugos', 'Batidos', 'Té'].map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.tab, categoria === cat && styles.tabSelected]}
            onPress={() => {
              setCategoria(cat);
              setExpandido(null);
            }}
          >
            <Text
              style={[
                styles.tabText,
                categoria === cat && styles.tabTextSelected,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Lista de bebidas */}
      <ScrollView>
        {bebidas.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={item.imagen} style={styles.image} />
            <TouchableOpacity
              style={styles.cardHeader}
              onPress={() => setExpandido(expandido === index ? null : index)}
            >
              <Text style={styles.cardTitle}>{item.titulo}</Text>
              <Text style={styles.arrow}>{expandido === index ? '▲' : '▼'}</Text>
            </TouchableOpacity>
            {expandido === index && (
              <View style={styles.cardBody}>
                <Text style={styles.description}>{item.descripcion}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

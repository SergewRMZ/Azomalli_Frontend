import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image } from 'react-native';
import { styles } from '../styles/AlimentoStyles';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function AlimentoMenuScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleBack = () => router.back()
  const DATA = {
  Comida: [
    {
      titulo: 'Avena horneada con bayas',
      descripcion: 'La avena horneada con bayas ofrece múltiples beneficios nutricionales. Es rica en fibra soluble, lo que mejora la digestión y mantiene la saciedad por más tiempo. Además, las bayas son una excelente fuente de antioxidantes, que protegen al cuerpo.',
      imagen: require('../assets/avena.jpg'),
    },
    {
      titulo: 'Barquitos de calabacita',
      descripcion: 'Los barquitos de calabacita son un platillo saludable y delicioso, consisten en calabacitas rellenas con carne, verduras y queso.',
      imagen: require('../assets/calabacitas.jpg'),
    },
    {
      titulo: 'Carne de res y brócoli',
      descripcion: 'Este platillo se prepara con carne salteada y brócoli al vapor, ideal para una comida nutritiva y rápida.',
      imagen: require('../assets/brocoli.jpg'),
    },
  ],
  Snacks: [
    {
      titulo: 'Palitos de zanahoria con hummus',
      descripcion: 'Una opción ligera y nutritiva para la media tarde. Rica en fibra y proteínas vegetales.',
      imagen: require('../assets/snack.jpg'),
    },
  ],
  Postres: [
    {
      titulo: 'Manzana al horno con canela',
      descripcion: 'Un postre saludable, naturalmente dulce, sin necesidad de azúcar añadida.',
      imagen: require('../assets/postre.jpg'),
    },
  ],
};

  const [categoria, setCategoria] = useState('Comida');
  const [expandido, setExpandido] = useState(null);

  const alimentos = DATA[categoria];

  return (
    <View style={[styles.container, {paddingTop: insets.top + 10}]}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backText}>← Regresar</Text>
        </TouchableOpacity>

      <Text style={styles.header}>Alimentos</Text>

      {/* Tabs */}
      <View style={styles.tabs}>
        {['Comida', 'Snacks', 'Postres'].map(cat => (
          <TouchableOpacity
            key={cat}
            style={[styles.tab, categoria === cat && styles.tabSelected]}
            onPress={() => {
              setCategoria(cat);
              setExpandido(null);
            }}
          >
            <Text style={[styles.tabText, categoria === cat && styles.tabTextSelected]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Lista de alimentos */}
      <ScrollView>
        {alimentos.map((item, index) => (
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

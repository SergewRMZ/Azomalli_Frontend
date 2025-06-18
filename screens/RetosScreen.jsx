import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../styles/RetosScreenStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';

export default function RetosScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [expandedId, setExpandedId] = useState(null);

  const retos = [
    {
      id: 1,
      titulo: 'Reto 1',
      descripcion: 'Terminar lienzo esta semana para poder exponerlo este fin en la escuela.',
    },
    {
      id: 2,
      titulo: 'Reto 2',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit eu nulla eget cursus.',
    },
    {
      id: 3,
      titulo: 'Reto 3',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor lectus non urna bibendum, quis dignissim risus vehicula.',
    },
    {
      id: 4,
      titulo: 'Reto 4',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at luctus magna, sed aliquam libero.',
    },
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f0e9' }}>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { paddingBottom: insets.bottom + 100 }
        ]}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backText}>← Regresar</Text>
          </Pressable>
          <Text style={styles.title}>Retos por cumplir</Text>
        </View>
        {retos.map((reto) => (
          <TouchableOpacity
            key={reto.id}
            style={styles.retoBox}
            onPress={() => toggleExpand(reto.id)}
            activeOpacity={0.9}
          >
            <View style={styles.retoHeader}>
              <Text style={styles.retoTitle}>{reto.titulo}</Text>
              <Icon
                name={expandedId === reto.id ? 'chevron-up' : 'chevron-down'}
                size={24}
                color="#333"
              />
            </View>

            {expandedId === reto.id && (
              <View style={styles.retoContent}>
                <Text style={styles.retoDescripcion}>{reto.descripcion}</Text>
                <View style={styles.botonesContainer}>
                  <TouchableOpacity style={styles.botonHecho}>
                    <Icon name="check" size={16} color="#fff" />
                    <Text style={styles.textoBoton}> Hecho</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.botonNoHecho}>
                    <Icon name="close" size={16} color="#fff" />
                    <Text style={styles.textoBoton}> No hecho</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={[
        styles.bottomMenu,
        { marginBottom: insets.bottom }
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
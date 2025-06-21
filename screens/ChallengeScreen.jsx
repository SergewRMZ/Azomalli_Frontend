import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import styles from '../styles/ChallengeStyles';

const App = () => {
  const router = useRouter();

  const [retos, setRetos] = useState([
    {
      titulo: 'Terminar el lienzo',
      descripcion: 'Terminar lienzo esta semana para poder exponerlo este fin en la escuela.',
      hecho: null,
      expandido: false,
    },
    {
      titulo: 'Correr 10 Millas en 30 Días',
      descripcion: '',
      hecho: null,
      expandido: false,
    },
    {
      titulo: 'Estudiar 2 Horas al Día',
      descripcion: '',
      hecho: null,
      expandido: false,
    },
    {
      titulo: 'Leer un Libro por Semana',
      descripcion: '',
      hecho: null,
      expandido: false,
    },
    {
      titulo: '2 días sin Redes Sociales',
      descripcion: '',
      hecho: null,
      expandido: false,
    },
  ]);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nuevoTitulo, setNuevoTitulo] = useState('');
  const [nuevaDescripcion, setNuevaDescripcion] = useState('');

  const toggleExpand = (index) => {
    setRetos(prev =>
      prev.map((reto, i) =>
        i === index ? { ...reto, expandido: !reto.expandido } : reto
      )
    );
  };

  const marcarHecho = (index, estado) => {
    setRetos(prev =>
      prev.map((reto, i) =>
        i === index ? { ...reto, hecho: estado } : reto
      )
    );
  };

  const agregarNuevoReto = () => {
    if (nuevoTitulo.trim() === '') return;

    const nuevoReto = {
      titulo: nuevoTitulo.trim(),
      descripcion: nuevaDescripcion.trim(),
      hecho: null,
      expandido: false,
    };

    setRetos([...retos, nuevoReto]);
    setNuevoTitulo('');
    setNuevaDescripcion('');
    setMostrarFormulario(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>← Regresar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Retos por cumplir</Text>

      {mostrarFormulario && (
        <View style={styles.formulario}>
          <TextInput
            placeholder="Título del reto"
            value={nuevoTitulo}
            onChangeText={setNuevoTitulo}
            style={styles.input}
          />
          <TextInput
            placeholder="Descripción"
            value={nuevaDescripcion}
            onChangeText={setNuevaDescripcion}
            style={[styles.input, { height: 80 }]}
            multiline
          />
          <TouchableOpacity style={styles.botonGuardar} onPress={agregarNuevoReto}>
            <Text style={styles.botonTexto}>Guardar reto</Text>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView style={styles.scroll}>
        {retos.map((reto, index) => (
          <View key={index} style={styles.retoBox}>
            <TouchableOpacity onPress={() => toggleExpand(index)}>
              <Text style={styles.retoTitle}>
                Reto {index + 1}: {reto.titulo}
              </Text>
            </TouchableOpacity>
            {reto.expandido && (
              <View style={styles.retoContenido}>
                <Text>{reto.descripcion || 'Sin descripción.'}</Text>
                <View style={styles.botones}>
                  <TouchableOpacity
                    style={[
                      styles.boton,
                      reto.hecho === true && styles.botonActivo,
                    ]}
                    onPress={() => marcarHecho(index, true)}
                  >
                    <Text style={styles.botonTexto}>✔ Hecho</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.boton,
                      reto.hecho === false && styles.botonNoHechoActivo,
                    ]}
                    onPress={() => marcarHecho(index, false)}
                  >
                    <Text style={styles.botonTexto}>✖ No hecho</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        ))}

        <TouchableOpacity
          style={styles.agregarBtn}
          onPress={() => setMostrarFormulario(!mostrarFormulario)}
        >
          <Text style={styles.agregarText}>
            {mostrarFormulario ? '✖ Cancelar' : '＋ Agregar'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default App;

import { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Pressable, 
  Switch, 
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { styles } from '../styles/AjustesScreenStyles';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function AjustesScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [editMode, setEditMode] = useState(false);

  const [username, setUsername] = useState('Charly');
  const [password, setPassword] = useState('************');
  const [phone, setPhone] = useState('55-1234-5678');
  const [notifications, setNotifications] = useState(true);
  const [sound, setSound] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f0eae4' }}>
      <ScrollView 
        contentContainerStyle={[
          styles.container,
          { paddingBottom: insets.bottom + 120 }
        ]}
      >
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backText}>← Regresar</Text>
          </Pressable>
          <Pressable onPress={() => setEditMode(!editMode)} style={styles.editButton}>
            <Text style={styles.editText}>{editMode ? 'Cancelar' : 'Editar ✎'}</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionLabel}>Datos</Text>
          <Text style={styles.sectionTitle}>Mi información</Text>
          <View style={styles.item}>
            <MaterialCommunityIcons name="account-outline" size={20} color="#333" />
            <View style={styles.itemText}>
              <Text style={styles.label}>Usuario</Text>
              {editMode ? (
                <TextInput
                  style={styles.value}
                  value={username}
                  onChangeText={setUsername}
                />
              ) : (
                <Text style={styles.value}>{username}</Text>
              )}
            </View>
          </View>
          <View style={styles.item}>
            <MaterialCommunityIcons name="eye-off-outline" size={20} color="#333" />
            <View style={styles.itemText}>
              <Text style={styles.label}>Contraseña</Text>
              {editMode ? (
                <TextInput
                  style={styles.value}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />
              ) : (
                <Text style={styles.value}>{password}</Text>
              )}
            </View>
          </View>
          <View style={styles.item}>
            <MaterialCommunityIcons name="phone-outline" size={20} color="#333" />
            <View style={styles.itemText}>
              <Text style={styles.label}>Teléfono</Text>
              {editMode ? (
                <TextInput
                  style={styles.value}
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                />
              ) : (
                <Text style={styles.value}>{phone}</Text>
              )}
            </View>
          </View>
          <View style={styles.item}>
            <MaterialCommunityIcons name="bell-outline" size={20} color="#333" />
            <View style={styles.itemText}>
              <Text style={styles.label}>Notificaciones</Text>
              {editMode ? (
                <Switch
                  value={notifications}
                  onValueChange={setNotifications}
                />
              ) : (
                <Text style={styles.value}>{notifications ? 'Activadas' : 'Desactivadas'}</Text>
              )}
            </View>
          </View>
          <View style={styles.item}>
            <MaterialCommunityIcons name="volume-high" size={20} color="#333" />
            <View style={styles.itemText}>
              <Text style={styles.label}>Sonido</Text>
              {editMode ? (
                <Switch
                  value={sound}
                  onValueChange={setSound}
                />
              ) : (
                <Text style={styles.value}>{sound ? 'Activado' : 'Desactivado'}</Text>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={[
        styles.bottomMenu,
        { marginBottom: insets.bottom }
      ]}>
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
    </SafeAreaView>
  );
}
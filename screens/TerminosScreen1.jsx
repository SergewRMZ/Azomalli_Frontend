import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../styles/terminosStyles';

export default function TermsScreen() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleFinish = () => {
    if (isChecked) {
      alert("Términos aceptados. Continuando...");
    } else {
      alert("Debes aceptar los términos para continuar.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AZOMALLI</Text>
      <Text style={styles.subtitle}>Término y condiciones del servicio</Text>

      <ScrollView style={styles.scrollBox}>
<Text style={styles.text}>
          Bienvenido/a a Azomalli, una aplicación diseñada para promover el bienestar emocional y el manejo del estrés en estudiantes. 
          Al usar esta aplicación, aceptas los términos y condiciones descritos a continuación. 
          Te recomendamos leerlos cuidadosamente antes de utilizar el servicio, ya que tu acceso y uso implican la aceptación de estos términos.{"\n\n"}

          Azomalli tiene como propósito proporcionar herramientas educativas y prácticas basadas en técnicas científicas para el manejo del estrés. 
          Sin embargo, la aplicación no sustituye en ningún momento la atención médica, psicológica o profesional. 
          El usuario es responsable de buscar ayuda profesional cuando sea necesario.{"\n\n"}

          Para utilizar Azomalli, es necesario registrarse proporcionando datos personales como nombre, correo electrónico y contraseña. 
          Garantizas que la información proporcionada es verdadera, actual y precisa. 
          El uso de la aplicación está permitido para mayores de 18 años.{"\n\n"}

         La seguridad de tus datos es una prioridad para Azomalli. Recopilamos información como niveles de estrés
        género y edad con el único fin de personalizar tu experiencia. Tus datos están protegidos mediante medidas
        de seguridad como cifrado y autenticación segura. No compartiremos tu información con terceros sin tu
        consentimiento explícito, salvo en los casos exigidos por la ley.{"\n\n"}

        El uso de Azomalli está restringido a actividades legales y éticas. Está estrictamente prohibido utilizar la
        aplicación para fines ilícitos, violar derechos de terceros o intentar alterar, hackear o acceder a los servidores
        de manera no autorizada. Nos reservamos el derecho de suspender o cancelar cuentas que incumplan estas normas.{"\n\n"}

        Azomalli no se responsabiliza por problemas técnicos relacionados con la compatibilidad de dispositivos,
        errores de red o interrupciones del servicio. Además, no se garantiza un resultado específico en el manejo
        del estrés, ya que las herramientas proporcionadas son de carácter educativo y complementario.{"\n\n"}

        Todo el contenido de la aplicación, incluyendo textos, imágenes, diseños y código, es propiedad de Azomalli
        y está protegido por derechos de autor. Está prohibida su reproducción, distribución o modificación sin autorización previa. {"\n\n"}

        Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Notificaremos cualquier
        cambio a través de la aplicación, y el uso continuado del servicio implicará tu aceptación de las modificaciones. {"\n\n"}


        </Text>
      </ScrollView>

      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={handleToggleCheckbox} style={styles.checkbox}>
          <Text style={styles.checkboxIcon}>
            {isChecked ? '✅' : '⬜'}
          </Text>
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>
          Acepto las <Text style={styles.link}>Condiciones del servicio</Text> y la <Text style={styles.link}>Política de privacidad</Text> de Azomalli.
        </Text>
      </View>

      <Button
        mode="contained"
        onPress={handleFinish}
        style={styles.button}
        contentStyle={{ paddingVertical: 6 }}
        labelStyle={{ color: 'white', fontSize: 16 }}
      >
        Finalizar
      </Button>
    </View>
  );
}

import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

const CustomInput = ({
  label,
  value,
  onChangeText,
  icon,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  style,
  mode = 'outlined',
  themeColors,
  ...rest
}) => {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      style={style}
      mode={mode}
      left={<TextInput.Icon icon={icon} color="#fff" />}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      textColor="#fff"
      theme={{ 
        colors: {
          ...themeColors,
          primary: themeColors.outlineColor
        },
       }}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
  },
});

export default CustomInput;

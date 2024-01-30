import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const Perfil = ({ navigation }) => {
  const [nombre, setNombre] = React.useState('Eduardo Ordóñez Marrder');
  const [fechaNacimiento, setFechaNacimiento] = React.useState('1 de Diciembre de 2004');
  const [pasatiempos, setPasatiempos] = React.useState('Jugar Videojuegos y hacer manualidades');

  return (
    <View>
      <Image source={require('./imagenes/eduardo.jpg')} style={{ width: 100, height: 100 }} />

      <Text>Nombre: {nombre}</Text>
      <Text>Fecha de Nacimiento: {fechaNacimiento}</Text>
      <Text>Pasatiempos: {pasatiempos}</Text>

      <Button
        title="Regresar al Menú"
        onPress={() => navigation.navigate('Inicio')}
      />
    </View>
  );
}

export default Perfil;

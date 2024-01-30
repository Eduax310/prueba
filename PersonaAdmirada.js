import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const PersonaAdmirada = ({ navigation }) => {
  const [nombre, setNombre] = React.useState('Nikola Tesla');
  const [fechaNacimiento, setFechaNacimiento] = React.useState('10 de julio de 1856');
  const [descripcion, setDescripcion] = React.useState('Nikola Tesla fue un inventor, ingeniero eléctrico y mecánico serbio nacionalizado estadounidense, ​​​ célebre por sus contribuciones al diseño del moderno suministro de electricidad de corriente alterna');

  return (
    <View>
      <Image source={require('./imagenes/Nikola.jpeg')} style={{ width: 100, height: 150 }} />

      <Text>Nombre: {nombre}</Text>
      <Text>Fecha de Nacimiento: {fechaNacimiento}</Text>
      <Text>Descripcion: {descripcion}</Text>

      <Button
        title="Regresar al Menú"
        onPress={() => navigation.navigate('Inicio')}
      />
    </View>
  );
}

export default PersonaAdmirada;

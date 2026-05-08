import { View, Text, StyleSheet, TextInput, Button} from 'react-native';
import ListaHabitos from './components/listahabitos'

export default function App() {

  return ( <View style={styles.container}>

    <Text style={styles.titulo}>
      Habit Tracker
    </Text>

     <Text style={styles.subtitulo}>
        Organiza tus habitos diarios
    </Text>

    <TextInput style={styles.input}
      placeholder="Nuevo hábito (escribe aquí)"
      placeholderTextColor="black"
    />

    <Button
      title="Agregar"
      color="purple"
      onPress={() => console.log('Botón apretado')}
    />

    <View style={styles.listaHabitos}>
      <Text style={styles.textoHabito}>
          Tus Hábitos
      </Text>
   </View>

    <ListaHabitos nombre="Gym"/>
    <ListaHabitos nombre="Leer"/>
    <ListaHabitos nombre="Dormir temprano"/>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: 'white'
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
     marginBottom: 10
  },

  subtitulo: {
    fontSize: 16,
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 20,
    color: 'black',
    borderColor: 'black'
  },
  
  listaHabitos: {
    marginTop: 30,
    padding: 15,
    borderWidth: 1,
  },

  textoHabito: {
    fontSize: 16
  }

})
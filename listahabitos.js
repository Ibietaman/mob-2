import { View, Text, StyleSheet, Button } from 'react-native'

export default function ListaHabitos(habitos) {
  return (
    <View style={styles.lista}>

      <Text style={styles.nombreHabito}>
        {habitos.nombre}
        </Text>

      <Text style={styles.contador}>
        Contador: 0
      </Text>

      <View style={styles.botones}>
        <Button
          title="+"
          color="green"
        />
        <Button
          title="-"
          color="red"
        />


        <Button
          title="Eliminar"
          color="black"
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  lista: {
    borderWidth: 1,
    padding: 15,
    marginTop: 10
  },

  nombreHabito: {
    fontSize: 18,
    marginBottom: 10
  },

  botones: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  contador: {
    marginBottom: 10,
    fontSize: 16
  },

})
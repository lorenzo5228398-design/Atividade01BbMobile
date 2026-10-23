import { router } from "expo-router";
import { collection, getDocs } from "firebase/firestore";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { db } from "../../firebaseConfig";

type produto = {

  nome: string,
  preco: number,
  unidade: string

}

export default function Index() {
  async function consultar() {
    const querySnapshot = await getDocs(collection(db, 'produtos'))
    querySnapshot.docs.map((doc) => {
      var prod = doc.data() as produto;
      console.log(doc.id + "-" + prod.nome)
    })

  }


  return (
    <View style={styles.container}>
      <Button
        title="Listar Produtos"
        color="#005b96"
        onPress={() => router.push('/telaProduto')}
      />

      <Pressable
        onPress={consultar}>
        <Text style={styles.texto}>Consultar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 20
  }
});
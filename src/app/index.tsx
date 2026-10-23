import { router } from "expo-router";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { Alert, Button, Pressable, StyleSheet, Text, View } from "react-native";
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
  function deletar() {
    try {
      deleteDoc(doc(db, 'produtos', '0Pqp2KPVvHjs2BOZiFjS'))
      Alert.alert("Funfou :)")
    }
    catch (e) {
      Alert.alert("Não funfou :(", String(e))
    }

  }


  return (
    <View style={styles.container}>
      <Button
        title="Adicionar Produtos"
        color="#005b96"
        onPress={() => router.push('/telaProduto')}
      />

      <Pressable
        onPress={consultar}>
        <Text style={styles.texto}>Consultar</Text>
      </Pressable>

      <Pressable
        onPress={deletar}>
        <Text style={styles.texto}>Deletar produto</Text>
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
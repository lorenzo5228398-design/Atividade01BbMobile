import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { db } from "../../firebaseConfig";





export default function telaProduto() {

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [unidade, setUnidade] = useState("");

    function inserir() {
        if (!nome || !preco || !unidade) {
            return false
        };

        const prod = {

            nome: nome,
            preco: Number(preco),
            unidade: unidade

        };

        try {
            addDoc(collection(db, 'produtos'), prod);
            Alert.alert('Produto inserido');
            setNome("");
            setPreco("");
            setUnidade("");
        } catch (e) {
            Alert.alert('Erro', String(e));
        }
        return true

    }

    return (
        <View style={estilos.container}>
            <Text>Nome do produto: </Text>
            <TextInput
                value={nome}
                onChangeText={setNome}
                placeholder="Ex: Maçã"
            />
            <Text>Valor do produto: </Text>
            <TextInput

                value={preco}
                onChangeText={setPreco}
                placeholder="Ex: 5.50"
                keyboardType="numeric"
            />
            <Text>Unidade de medida: </Text>
            <TextInput

                value={unidade}
                onChangeText={setUnidade}
                placeholder="Ex: KG"

            />
            <TouchableOpacity style={estilos.botao} onPress={inserir}>
                <Text style={estilos.textoBotao}>Adicionar Item</Text>
            </TouchableOpacity>
        </View>



    );

}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        marginTop: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
    },
    botao: {
        backgroundColor: 'blue',
        padding: 15,
        marginTop: 20,
        borderRadius: 5,
        alignItems: 'center'
    },
    textoBotao: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    }
});
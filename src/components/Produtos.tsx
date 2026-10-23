import { StyleSheet, Text, View } from 'react-native';




type ProdutoProps = {
    nome: string;
    preco: number;
    unidadeMedida: number;
}

export function Produto(props: ProdutoProps) {
    return (
        <View style={estilos.cartao}>
            <Text style={estilos.textoPrincipal}>{props.nome}</Text>
            <View style={estilos.linha}>
                <Text style={estilos.textoDetalhe}>Quantidade/Unidade: {props.unidadeMedida}</Text>
                <Text style={estilos.textoPreco}>R$ {props.preco.toFixed(2)}</Text>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    cartao: {
        padding: 15,
        marginBottom: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        borderLeftWidth: 5,
        borderLeftColor: '#005b96',
    },
    linha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    textoPrincipal: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    textoDetalhe: {
        fontSize: 14,
        color: '#666',
    },
    textoPreco: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#005b96',
    }
});
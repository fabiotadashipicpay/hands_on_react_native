import React from "react";
import { Text } from "react-native";

export default ({min, max, atualizarNumero}) => {
    
    function gerarNumeroAleatorio(){
        let numero = Math.floor(Math.random() * (max - min)) + min
        atualizarNumero(numero)
        return numero
    }

    return <>
        <Text>Numero mínimo: {min}</Text>
        <Text>Numero máximo: {max}</Text>
        <Text>Numero aleatório: { gerarNumeroAleatorio() }</Text>
    </>
}
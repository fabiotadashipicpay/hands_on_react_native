import React, { useState } from "react";
import { TextInput, Text } from "react-native";

export default () => {
    
    const [texto, updateText] = useState('')

    function atualizarTexto(textoDigitado){
        updateText(textoDigitado)
    }

    return <>
        <TextInput
            placeholder="Digite o texto"
            onChangeText={ atualizarTexto } />
        <Text>Snake case: {texto.toLowerCase().replaceAll(' ', '_')}</Text>
        <Text>Kebab case: {texto.toLowerCase().replaceAll(' ', '-')}</Text>
    </>

}
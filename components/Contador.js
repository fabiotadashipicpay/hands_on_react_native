import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

export default ({ title, refresh }) => {

    const [numero, setNumero] = useState(0)

    function incrementar() {
        setNumero(numero + 1)
    }

    function decrementar() {
        if (numero > 0) {
            setNumero(numero - 1)
        }
    }

    useEffect(() => {
        setNumero(0)
    }, [refresh])

    return <View style={{ margin: 16, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{title}</Text>
        <Text>{numero}</Text>
        <View style={{ flexDirection: 'row' }}>
            <Button title='-' onPress={decrementar} />
            <Button title='+' onPress={incrementar} />
        </View>
    </View>
}
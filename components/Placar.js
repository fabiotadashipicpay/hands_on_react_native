import React, { useState } from "react";
import { Button, View } from "react-native";
import Contador from "./Contador";

export default () => {

    const [refresh, updateRefresh] = useState(0)

    return <View>
        <View style={{ flexDirection: 'row' }}>
            <Contador title='Corinthians' refresh={refresh}/>
            <Contador title='Flamengo' refresh={refresh}/>
        </View>
        <Button title='reset' onPress={() => updateRefresh(refresh + 1)}/>
    </View>
}
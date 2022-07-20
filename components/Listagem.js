import React from "react";
import { FlatList, Text, View } from "react-native";
import Placar from "./Placar";

export default () => {
    
   

    return <View>
        <FlatList 
            horizontal={true}
            data={ list }
            renderItem={ renderItem }/>
    </View>
}

function renderItem({item}){
    return <View style={{ width: 100, height:200, backgroundColor: item.cor,margin: 16 }}>
            <Text style={{ fontSize: 30 , color: '#fff'}}>{item.name}</Text>
        </View>
}

const list = [
    { 'name': 'Fabio', 'cor': 'orange' },
    { 'name': 'Jose', 'cor': 'red' },
    { 'name': 'Maria', 'cor': 'black' },
    { 'name': 'Renata', 'cor': 'green' },
    { 'name': 'Fabio', 'cor': 'orange' },
    { 'name': 'Jose', 'cor': 'red' },
    { 'name': 'Maria', 'cor': 'black' },
    { 'name': 'Renata', 'cor': 'green' },
    { 'name': 'Fabio', 'cor': 'orange' },
    { 'name': 'Jose', 'cor': 'red' },
    { 'name': 'Maria', 'cor': 'black' },
    { 'name': 'Renata', 'cor': 'green' },
    { 'name': 'Fabio', 'cor': 'orange' },
    { 'name': 'Jose', 'cor': 'red' },
    { 'name': 'Maria', 'cor': 'black' },
    { 'name': 'Renata', 'cor': 'green' },
    { 'name': 'Fabio', 'cor': 'orange' },
    { 'name': 'Jose', 'cor': 'red' },
    { 'name': 'Maria', 'cor': 'black' },
    { 'name': 'Renata', 'cor': 'green' },
    { 'name': 'Fabio', 'cor': 'orange' },
    { 'name': 'Jose', 'cor': 'red' },
    { 'name': 'Maria', 'cor': 'black' },
    { 'name': 'Renata', 'cor': 'green' },
    { 'name': 'Fabio', 'cor': 'orange' },
    { 'name': 'Jose', 'cor': 'red' },
    { 'name': 'Maria', 'cor': 'black' },
    { 'name': 'Renata', 'cor': 'green' },
    { 'name': 'Fabio', 'cor': 'orange' },
    { 'name': 'Jose', 'cor': 'red' },
    { 'name': 'Maria', 'cor': 'black' },
    { 'name': 'Renata', 'cor': 'green' },
    { 'name': 'Fabio', 'cor': 'orange' },
    { 'name': 'Jose', 'cor': 'red' },
    { 'name': 'Maria', 'cor': 'black' },
    { 'name': 'Renata', 'cor': 'green' },
    { 'name': 'Fabio', 'cor': 'orange' },
    { 'name': 'Jose', 'cor': 'red' },
    { 'name': 'Maria', 'cor': 'black' },
    { 'name': 'Renata', 'cor': 'green' },
    { 'name': 'Fabio', 'cor': 'orange' },
    { 'name': 'Jose', 'cor': 'red' },
    { 'name': 'Maria', 'cor': 'black' },
    { 'name': 'Renata', 'cor': 'green' },
    { 'name': 'Fabio', 'cor': 'orange' },
    { 'name': 'Jose', 'cor': 'red' },
    { 'name': 'Maria', 'cor': 'black' },
    { 'name': 'Renata', 'cor': 'green' },
    { 'name': 'Fabio', 'cor': 'orange' },
    { 'name': 'Jose', 'cor': 'red' },
    { 'name': 'Maria', 'cor': 'black' },
    { 'name': 'Renata', 'cor': 'green' },
]
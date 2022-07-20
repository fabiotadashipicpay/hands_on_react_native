import { template } from '@babel/core';
import React, { useState } from 'react';
import { Text, StyleSheet, TouchableNativeFeedback, View, Modal, FlatList, Pressable } from 'react-native';
import CardapioList from './CardapioList';

export default () => {

    const [totalMap, setTotalList] = useState(new Map())

    const addItem = (item) => {
        let key = item.id
        let qtd
        if(totalMap.has(key)){
            qtd = totalMap.get(key).qtd + 1
        }else{
            qtd =  1
        }
        setTotalList(map => new Map(map.set(key, {"qtd": qtd, "item": item })))
    }

    const [modalVisible, setModalVisible] = useState(false);

    const calcValorTotal = () => [...totalMap.entries()].reduce((total, mapItem) => (mapItem[1].item.price * mapItem[1].qtd)  + total, 0)

    return (
        <View style={style.List}>
        <TouchableNativeFeedback onPress={ () => setModalVisible(true) } >
                <Text style={{
                    fontSize: 30,
                    padding: 20,
                }} >Valor total: R${formatMoney(calcValorTotal())}</Text>
            </TouchableNativeFeedback>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={style.centeredView}>
                    <View style={style.modalView}>
                        <FlatList 
                            data={[...totalMap.values()]}
                            renderItem={({ item }) => <Text>{item.qtd}x {item.item.name}</Text>}
                        />
                        <Pressable
                            style={[style.button, style.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={style.textStyle}>Ok</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <CardapioList addItem={addItem} />
       </View>
    )
}

const style = StyleSheet.create({
    List: {
        width: "100%",
        justifyContent: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        height: "40%",
        width: "80%",
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})

const formatMoney = (valor) => (Math.round(valor * 100) / 100).toFixed(2)


import React, { useState } from 'react';
import { SectionList, Text, StyleSheet, View, Pressable, TouchableNativeFeedback, FlatList } from 'react-native';

export default props => {
    const list = getList()

    return (
            <SectionList
                style={{ flexGrow: 1 }}
                sections={list}
                keyExtractor={(item, index) => `key${index}`}
                renderItem={({ item }) => (
                    <TouchableNativeFeedback onPress={() => { props.addItem(item) }}>
                        <Text style={{ margin: 10 }}>{item.name} R${formatMoney(item.price)}</Text>
                    </TouchableNativeFeedback>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={{ fontSize: 30, margin: 10 }}>{title}</Text>
                )}
            />
    )
}

const styles = StyleSheet.create({
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
});

const formatMoney = (valor) => (Math.round(valor * 100) / 100).toFixed(2)

const getList = () => {
    return [
        {
            "title": "Entrada", "data": [
                { "id": 1,"name": "Salada Cesar", "price": 14.90 },
                { "id": 2,"name": "Aperitivos", "price": 4.90 },
                { "id": 3,"name": "Sopa", "price": 9.90 },
            ]
        },
        {
            "title": "Prato principal", "data": [
                { "id": 4,"name": "File a parmegiana", "price": 54.90 },
                { "id": 5,"name": "Macarrão", "price": 24.90 },
                { "id": 6,"name": "Prato executivo", "price": 29.90 },
                { "id": 7,"name": "Churrasco", "price": 59.90 },
                { "id": 8,"name": "Pizza", "price": 39.90 },
                { "id": 9,"name": "Hamburguer", "price": 29.90 },
            ]
        },
        {
            "title": "Sobremesa", "data": [
                { "id": 10,"name": "Pudim", "price": 7.90 },
                { "id": 11,"name": "Sorverte", "price": 14.90 },
                { "id": 12,"name": "Mousse", "price": 9.90 },
            ]
        },
        {
            "title": "Bebidas", "data": [
                { "id": 13,"name": "Cerveja", "price": 12.90 },
                { "id": 14,"name": "Refrigerante", "price": 5.90 },
                { "id": 15,"name": "Agua", "price": 6.90 },
                { "id": 16,"name": "Suco", "price": 9.90 },
            ]
        }
    ]
}

import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import Hello, { HelloNotDefault } from "./components/Hello";
import NumeroAleatorio from "./components/NumeroAleatorio";
import Placar from "./components/Placar";
import Tradutor from "./components/Tradutor";

export default () => {

  // const [numeroAleatorio, atualizarNumero] = useState(0)

  return <SafeAreaView style={{
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    {/* <Hello /> */}
    {/* <HelloNotDefault /> */}
    {/* <Tradutor /> */}
    {/* <NumeroAleatorio min={11} max={20} atualizarNumero={atualizarNumero} />
    <Text>O numero aleatorio é no componente pai é: {numeroAleatorio}</Text> */}
   <Placar />
  </SafeAreaView>
}
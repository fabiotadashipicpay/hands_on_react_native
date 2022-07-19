import React from "react";
import { SafeAreaView } from "react-native";
import Hello, { HelloNotDefault } from "./components/Hello";
import Tradutor from "./components/Tradutor";

export default () => <SafeAreaView style={{
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center'
}}>
  {/* <Hello /> */}
  {/* <HelloNotDefault /> */}
  <Tradutor />
</SafeAreaView>
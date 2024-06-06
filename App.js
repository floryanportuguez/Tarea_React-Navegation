import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import login from "./navegacion/login";
import CrearCuenta from "./navegacion/crearcuenta";
import Recuperar from "./navegacion/recuperar";
import RecuperarCuenta from "./navegacion/recuperarcuenta";
import Navegacion from "./Navegacion";

export default function App() {
  return (
      // <StatusBar style="auto" /> */}
      // {/* <Login/> */}
      // {/* <CrearCuenta/> */}
      // {/* <Recuperar/> */}
      // {/* <RecuperarCuenta/> */}
      <Navegacion/>
  );
}
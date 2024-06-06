import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";


import Login from "./navegacion/login";
import CrearCuenta from "./navegacion/crearcuenta";
import RecuperarCuenta from "./navegacion/recuperarcuenta";
import Recuperar from "./navegacion/recuperar";
import Home from "./navegacion/home";

//stack
const StackNav = createStackNavigator();

//funcion de los stacks
function Stacks() {
  return (
    <StackNav.Navigator initialRouteName="React Navegation" screenOptions={ {headerShown: false}}>
      <StackNav.Screen name="Login" component={Login} />
      <StackNav.Screen name="CrearCuenta" component={CrearCuenta} />
      <StackNav.Screen name="RecuperarCuenta" component={RecuperarCuenta} />
      <StackNav.Screen name="Recuperar" component={Recuperar} />
      <StackNav.Screen name="Home" component={Home} />
    </StackNav.Navigator>
  );
}

export default function Navegacion() {
  return (
    // contenedor
    <NavigationContainer>
      <Stacks/>
    </NavigationContainer>
  );
}
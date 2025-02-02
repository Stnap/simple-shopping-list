/* Instalacion de dependencias
yarn add react-native-countdown-circle-timer
npm install react-native-svg
*/

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, Text, StyleSheet, View, FlatList, Alert } from "react-native";
import Header from "./components/Header";
import Timer from "./components/Timer";
import { useCountdown } from "react-native-countdown-circle-timer";

const App = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [key, setKey] = React.useState(0);

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Header title="Tiempo de espera" />
        <Timer isPlaying={isPlaying} key={key} />
        <Button
          title="Pausar / Reanudar"
          onPress={() => setIsPlaying((prev) => !prev)}
        />
        <Button title="Reiniciar" onPress={() => setKey((prev) => prev + 1)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100,
    backgroundColor: "lightyellow",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;

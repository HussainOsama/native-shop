import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Button, Text, ScrollView } from "native-base";
import Home from "./components/Home";

import { ThemeProvider } from "styled-components";

// const container = styled.ScrollView`
//   background-color: red;
// `;

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Home />
        {/* <Text>Open up App.js to start working on your app!</Text>
         */}
        <Button
          onPress={() => {
            alert("Hello");
          }}
        >
          <Text>Click Me!</Text>
        </Button>
        <Text>Hello Me!</Text>

        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// container: {
//   flex: 1,
//   backgroundColor: "#fff",
//   alignItems: "center",
//   justifyContent: "center",
// },

import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./source/components/Button";
import Inputclass from "./source/components/Inputclass"
import Sepinput from "./source/components/Sepinput";
import Logo from "./source/components/Logo";
import Batery from "./source/components/batery";
import LogoBackground from "./source/components/LogoBackground";
import useFonts from "./source/hooks/useFonts";
import _strings from "./source/strings";
import * as Battery from 'expo-battery';

const strings = _strings.login;

// https://csstox.surge.sh

export default function App() {
  const [fontsLoaded] = useFonts();

  const [count, setCount] = React.useState(0);

  const onButtonPress = () => {
    setCount(count + 1);
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }
//211 =26
//  85
//64 = 8
//  42
//8
//  21
//72 = 9
//  44
//8
//  21
//24 = 3
//  44
//168
  return (
    <View style={styles.container}>
      <View style={[StyleSheet.absoluteFill, styles.logoBackground]}>
        <LogoBackground height="71%"  />
      </View>

      <View style={{ flex: 26.9 }} />
      <Logo/>
    <View style={{flex:8}}/>
      <View >
        <Text style={styles.title}>{strings.meter}</Text>
      </View>
      <View style={{flex:1}}/> 
      <View >
        <Batery />
      </View>
      <View style={{flex:9}}/>
      <View style={{height:44}}>
        <Sepinput/>
      </View>
      <View style={{flex:1}}/>
      <Text style={[styles.subtitle, { marginTop: 8 }]}>
        {strings.enter}
      </Text>

      <View style={{ flex: 3 }} />

      <View style={styles.buttonsContainer}>
        <Button onPress={onButtonPress}>{strings.next}</Button>
      </View>

      <View style={{ flex: 21  }} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDA231",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  logoBackground: {
    alignItems: "center",
    justifyContent: "center",
    left: "45%",
    top: "-3%",
  },
  title: {
    fontFamily: "Muli_700Bold",
    fontSize: 28,
    lineHeight: 42,
    textAlign: "center",
    letterSpacing: -0.6,
    color: "#FFFFFF",
  },
  subtitle: {
    fontFamily: "Muli_400Regular",
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
    color: "#FFFFFF",
  },
  buttonsContainer: {
    alignSelf: "stretch",
  },
});

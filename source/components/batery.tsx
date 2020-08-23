import * as React from 'react';
import * as Battery from 'expo-battery';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    batteryLevel: null,
  };
  componentDidMount() {
    this._subscribe();
  }

  async _subscribe() {
    let batteryLevel = await Battery.getBatteryLevelAsync();
    batteryLevel = batteryLevel.toFixed(2)
    batteryLevel = batteryLevel *100
    this.setState({ batteryLevel });
    this._subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      this.setState({ batteryLevel });
      console.log('batteryLevel changed!', batteryLevel.toFixed(2));
    });
  }

  render() {
    return (
        <Text style={styles.text}> {this.state.batteryLevel}% left</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Muli_400Regular",
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
    color: "#FFFFFF",
  },
});

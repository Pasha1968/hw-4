import React, { useRef,Component } from 'react';
import { View, TextInput,StyleSheet } from 'react-native';
const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      keyboardType = "decimal-pad"
      maxLength={6}
    />
  );
}

const MyFormComponent = () => {

  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();
  const ref_input6 = useRef();

  return (
    <>
    <View style={styles.conteiner}>
      <View style = {styles.box}>
        <TextInput
        style={styles.text}
          placeholder="1"
          autoFocus={true}
          returnKeyType="next"
          keyboardType = "decimal-pad"
          maxLength={1}
          onSubmitEditing={() => ref_input2.current.focus()}
        />
      </View>
      <View style = {styles.box}>
        <TextInput
          style={styles.text}
          placeholder="2"
          keyboardType = "decimal-pad"
          maxLength={1}
          returnKeyType="next"
          onChangeText={(value) => {if (value === ""){
            // this.setState({exit[2]:value, active:true})
            exit[2] = value
            active = true
            activegloabal = true
            }         
          }
          }
          onSubmitEditing={() => ref_input3.current.focus()}
          ref={ref_input2}
        />
      </View>
      <View style = {styles.box}>
        <TextInput
        style={styles.text}
          placeholder="3"
          keyboardType = "decimal-pad"
          maxLength={1}
          ref={ref_input3}
          returnKeyType="next"
          onSubmitEditing={() => ref_input4.current.focus()}
        />
      </View>
      <View style = {styles.box}>
        <TextInput
        style={styles.text}
          placeholder="4"
          keyboardType = "decimal-pad"
          maxLength={1}
          ref={ref_input4}
          returnKeyType="next"
          onSubmitEditing={() => ref_input4.current.focus()}
        />
      </View>
      <View style = {styles.box}>
        <TextInput
        style={styles.text}
          placeholder="5"
          keyboardType = "decimal-pad"
          maxLength={1}
          ref={ref_input5}
          returnKeyType="next"
          onSubmitEditing={() => ref_input5.current.focus()}
        />
      </View>
      <View style = {styles.box}>
        <TextInput
        style={styles.text}
          placeholder="6"
          keyboardType = "decimal-pad"
          maxLength={1}
          ref={ref_input6}
          returnKeyType="next"
          onSubmitEditing={() => ref_input6.current.focus()}
        />
      </View>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  conteiner: {
    backgroundColor:"#000000",
    flexDirection:'row',
    height:"100%",
    width:279,
    //flexWrap:'wrap',
    justifyContent: 'space-evenly',
  },
  box:{
    backgroundColor:"#FFFFFF",
    width:"12%",
    textAlign:"center",
    borderRadius: 10,
  },
  text:{
    fontFamily: "Muli_400Regular",
    fontSize: 20,
    lineHeight: 100,
    "top": "20%",
    textAlign: "center",
    alignItems: "flex-end",
    color: "#000000",
  }
});

export default React.memo(MyFormComponent);
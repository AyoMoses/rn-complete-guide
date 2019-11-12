import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.screenWrap}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.formInput} />
        <Button title="Click to Add" style={{}} />
      </View>

      <View></View>
    </View>
  );
}

// YOUR CONST VARIABLE NAME CAN BE ANYTHING AND THAT GOES FOR THE OBJECT CHILD
const styles = StyleSheet.create({
  screenWrap: {
    padding: 50
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }, 

  formInput: {
    width: 220,
    borderColor: "black",
    borderWidth: 1,
    padding: 7,
    marginRight: 5
  }
});

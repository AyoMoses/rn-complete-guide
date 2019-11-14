import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal(""); //we clear the entered goal and reset the field
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.formInput}
          onChangeText={goalInputHandler}
          // WE PASS THE USER KEYPRESS INTO THE INPUTTEXT BY BINDING DATA ONE WAY
          value={enteredGoal}
        />

        <View style={styles.inputButtons}>
          {/* A CACEL BUTTON TO BE BINDED IN THE VISIBLE STATE IN APP.JS */}
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>

          {/* WE THEN BIND THE GOALINPUT HANDLER */}
          <View style={styles.button}>
            <Button title="Add" style={{}} onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  formInput: {
    width: 260,
    borderColor: "black",
    borderWidth: 1,
    padding: 7,
    marginBottom: 10
  },

  inputButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "50%"
  },

  button: {
    width: "40%"
  }
});

export default GoalInput;

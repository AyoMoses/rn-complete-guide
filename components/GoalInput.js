import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={false}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.formInput}
          onChangeText={goalInputHandler}
          // WE PASS THE USER KEYPRESS INTO THE INPUTTEXT BY BINDING DATA ONE WAY
          value={enteredGoal}
        />
        {/* WE THEN BIND THE GOALINPUT HANDLER */}
        <Button
          title="Click to Add"
          style={{}}
          onPress={props.onAddGoal.bind(this, enteredGoal)}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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

export default GoalInput;

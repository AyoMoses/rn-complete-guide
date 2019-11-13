import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  // DISPLAY OUR ENTERED GOAL
  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal }
    ]);
  };

  // function goalInputHandler(enteredText) {
  //   setEnteredGoal(enteredText);
  // };
  // // USING ONE OF THE TWO WORKS
  // const goalInputHandler = (enteredText) => {
  //   setEnteredGoal(enteredText);
  // };

  // ANOTHER FUNCTION FOR WATCHING WHEN THE ADD BUTTON IS CLIICKED

  return (
    <View style={styles.screenWrap}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.formInput}
          onChangeText={goalInputHandler}
          // WE PASS THE USER KEYPRESS INTO THE INPUTTEXT BY BINDING DATA ONE WAY
          value={enteredGoal}
        />
        {/* WE THEN BIND THE GOALINPUT HANDLER */}
        <Button title="Click to Add" style={{}} onPress={addGoalHandler} />
      </View>

      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
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
  },

  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ddd"
  }
});

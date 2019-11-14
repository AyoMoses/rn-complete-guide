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
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  // DISPLAY OUR ENTERED GOAL
  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

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
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler}/>
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

// YOUR CONST VARIABLE NAME CAN BE ANYTHING AND THAT GOES FOR THE OBJECT CHILD
const styles = StyleSheet.create({
  screenWrap: {
    padding: 50
  }
});

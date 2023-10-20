import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './components/goalItem';

import GoalInput from './components/goalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
      setCourseGoals((currentCourseGoal) => [
        ...currentCourseGoal,
        {text: enteredGoalText,
        key: Math.random().toString()},
      ]);
  }

  function deleteGoalHandler(key){
    setCourseGoals(currentCourseGoal => {
      return currentCourseGoal.filter((goal) => goal.key !== key);
    });
  }


  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList 
        data={courseGoals} 
        renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.key}/>;
        }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5,
  },
});

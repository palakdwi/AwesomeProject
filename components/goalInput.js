import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function addGoalHandler() {
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText('');
    }

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }
    
    return (
        <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} onChangeText={goalInputHandler} placeholder='Input a goal'
        value={enteredGoalText}></TextInput>
        <Button title="Add Goals" onPress={addGoalHandler}/>
      </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'center',
        paddingBottom: 4,
        borderBottomWidth: 1,
        borderColor: '#cccccc',
    },
      TextInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
      }, 
})

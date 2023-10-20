import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem (props) {
    return(
        <View style={styles.goalItem}>
            <Pressable 
            android_ripple={{ color: '#5299d3' }}
            onPress={props.onDeleteItem.bind(this, props.id)}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        marginTop: 8,
        //width: '100%',
        borderRadius: 6,
        backgroundColor: '#cccccc',
        color: 'white'
    },
    goalText: {
        color: 'white',
        padding: 8,
    }
})

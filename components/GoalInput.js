import { View, TexInput, Button, StyleSheet } from 'react-native';

function GoalInput(props) {
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder='Enter your goal' style={styles.textInput} onChangeText={goalInputHandler} ref={clearText}></TextInput>
            <Button title='Add goal' onPress={props.onAddGoal}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      textInput: {
        borderWidth: 1,
        color: 'black',
        borderColor: 'black',
        marginRight: 5,
        padding: 13,
        width: '70%'
      },
})

export default GoalInput;
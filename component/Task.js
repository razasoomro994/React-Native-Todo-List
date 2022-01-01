import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'


function Task(props) {
    return (
        <View style={styles.item}>
            <View style={styles.itemleft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circle}>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    itemleft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',

    },
    square: {

        width: 24,
        height: 24,
        backgroundColor: 'blue',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,

    },
    itemText: {
        maxWidth: '80%',
        fontWeight:'bold',
    },
    circle: {
        height: 10,
        width: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'blue',
    },
})

export default Task

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Notes() {
    return(
        <View style={styles.container}>
            <Text>Notes View</Text>
        </View>
    )
}

export default Notes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Profile() {
    return(
        <View style={styles.container}>
            <Text>Profile View</Text>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
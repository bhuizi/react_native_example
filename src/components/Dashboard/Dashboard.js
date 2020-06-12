import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Dashboard({route, navigation}) {
    const { userBio } = route.params;
    
    return(
        <View style={styles.container}>
            <Text>Dashboard View</Text>
        </View>
    )
}

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
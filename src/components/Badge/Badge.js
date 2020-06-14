import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

function Badge({userInfo}) {
    
    return (
        <View style={styles.container}>
            <Image style={styles.image}
                source={{uri: userInfo.avatar_url}}/>
            <Text style={styles.name}>{userInfo.name}</Text>
            <Text style={styles.handle}>{userInfo.login}</Text>
        </View>
    )
}

export default Badge;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#48BBEC',
        paddingBottom: 10
    },
    name: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 21,
        marginTop: 10,
        marginBottom: 5,
    },
    handle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16
    },
    image: {
        height: 125,
        width: 125,
        borderRadius: 65,
        marginTop: 10,
        alignSelf: 'center'
    }
})
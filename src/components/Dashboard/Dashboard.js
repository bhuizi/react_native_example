import React from 'react';
import { 
    StyleSheet, 
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';
import { ROUTES } from '../../enum';

function makeBackground(btn) {
    const obj = {
        alignSelf: 'stretch',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    }
    switch (btn) {
        case 0:
            obj.backgroundColor = '#48BBEC'
            break;
        case 1:
            obj.backgroundColor = '#E77AAE' 
            break;
        case 3:
            obj.backgroundColor = '#758BF4' 
            break;
        default:
            break;
    }
    return obj;
}

function Dashboard({route, navigation}) {
    const { userInfo } = route.params;
    
    return(
        <View style={styles.container}>
            <Image style={styles.image}
            source={{uri: userInfo.avatar_url}}/>
            <TouchableHighlight
                style={makeBackground(1)}
                onPress={() => navigation.navigate(`${ROUTES.PROFILE}`, {
                    userInfo
                })}
                underlayColor="#88DAF5"
            >
                <Text style={styles.buttonText}>View Profile</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={makeBackground(2)}
                onPress={() => navigation.navigate(`${ROUTES.REPOS}`, {
                    userInfo
                })}
                underlayColor="#88DAF5"
            >
                <Text style={styles.buttonText}>View Repos</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={makeBackground(3)}
                onPress={() => navigation.navigate(`${ROUTES.NOTES}`, {
                    userInfo
                })}
                underlayColor="#88DAF5"
            >
                <Text style={styles.buttonText}>View Notes</Text>
            </TouchableHighlight>
        </View>
    )
}

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: 350
    },
    buttonText: {
        alignSelf: 'center',
        color: '#000',
        fontSize: 24,
    }
})
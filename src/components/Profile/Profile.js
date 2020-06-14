import React from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    View
} from 'react-native';
import Badge from '../Badge';

function Profile({route}) {
    const { userInfo } = route.params;
    const topicArray = [ 'company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos'];
    const ProfileData = topicArray.map((topic) => {
        if(!userInfo[topic]) {
            return <View key={topic}></View>
        }
        return (
            <View key={topic}>
                <View style={styles.rowContainer}>
                    <Text style={styles.rowTitle}>{topic === 'public_repos' ? topic.replace('_', ' ') : topic}</Text>
                    <Text style={styles.rowContent}>{userInfo[topic]}</Text>
                </View>
            </View>
        )
    })

    return(
        <View style={styles.container}>
            <ScrollView style={styles.container}>
                <Badge userInfo={userInfo}/>
                {ProfileData}
            </ScrollView>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    rowContainer: {
        padding: 10
    },
    rowTitle: {
        color: '#48BBEC',
        textTransform: 'capitalize',
        fontSize: 16
    },
    rowContent: {
        color: '#696969',
        fontSize: 19
    }
  });

  
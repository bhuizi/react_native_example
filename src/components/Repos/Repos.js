import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

import Badge from '../Badge';
import Separator from '../Separator';
import { getRepos } from '../../api';

function Repos({route}) {
    const { userInfo } = route.params;
    const [ repos, setRepos ] = useState([]);

    useEffect(() => {
        getRepos(userInfo.login)
        .then(res => setRepos(res))
    }, []);

    const Repos = repos.map((r, i) => {
        const desc = repos[i].description ?
            <Text style={styles.description}>{repos[i].description}</Text> : <View />
            return (
                <View key={i}>
                    <View style={styles.rowContainer}>
                        <TouchableHighlight
                            onPress={() => {console.log(repos[i].html_url)}}
                            underlayColor="transparent"
                        >
                            <Text style={styles.name}>{repos[i].name}</Text>
                        </TouchableHighlight>
                        <Text style={styles.stars}>Stars: {repos[i].stargazers_count}</Text>
                        {desc}
                    </View>
                    <Separator />
                </View>
            )
    });

    return(
        <ScrollView style={styles.container}>
            <Badge userInfo={userInfo} />
            {Repos}
        </ScrollView>
    )
}

export default Repos;

var styles = StyleSheet.create({
    container: {
      flex: 1
    },
    rowContainer: {
      flexDirection: 'column',
      flex: 1,
      padding: 10
    },
    name: {
      color: '#48BBEC',
      fontSize: 18,
      paddingBottom: 5
    },
    stars: {
      color: '#48BBEC',
      fontSize: 14,
      paddingBottom: 5
    },
    description: {
      fontSize: 14,
      paddingBottom: 5
    }
  });

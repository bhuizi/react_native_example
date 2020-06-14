import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { WebView } from 'react-native-webview';

// Documentation about autolinking
//https://github.com/react-native-community/cli/blob/master/docs/autolinking.md

function Web_View({route}) {
    const { url } = route.params;
    return (
        <View style={styles.container}>
            <WebView source={{ uri: `${url}` }} />
        </View>
    )
}

export default Web_View;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6EF',
        flexDirection: 'column'
    }
})
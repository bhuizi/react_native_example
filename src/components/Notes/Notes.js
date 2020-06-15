import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { getNotes, addNote} from '../../api';
import Separator from '../Separator';

export default function Notes({route}) {
    const { userInfo } = route.params;
    const [ notes, setNotes ] = useState(null);
    const [note, setNote ] = useState('');

    useEffect(() => {
        getNotes(userInfo.login)
            .then(res => setNotes(res))
            .catch(e => console.log(e));
    }, []);

  function handleChange(e) {
      setNote(e.nativeEvent.text);
  }

  function handleSubmit() {
    addNote(userInfo.login, note)
        .then(data => {
            getNotes(userInfo.login)
                .then(data => setNotes(data))
                .then(() => setNote(''))
         })
  }

  return (
    <ScrollView style={styles.container}>
        {notes == null ? <View /> : Object.values(notes).map((n) => (
        <View style={styles.rowContainer}>
             <Text>{n}</Text>
            <Separator />
        </View>
   ))}
    <View style={styles.footerContainer}>
              <TextInput
                style={styles.searchInput}
                value={note}
                onChange={handleChange}
                placeholder="New Note" />
                <TouchableHighlight
                    style={styles.button}
                    onPress={handleSubmit}
                    undlerlayColor="#88D4F5">
                    <Text style={styles.buttonText}> Submit </Text>
                </TouchableHighlight>
          </View>

    </ScrollView>
  );
}

var styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    buttonText: {
      fontSize: 18,
      color: '#fff'
    },
    button: {
      height: 60,
      backgroundColor: '#48BBEC',
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center'
    },
    searchInput: {
      height: 60,
      padding: 10,
      fontSize: 18,
      color: '#111',
      flex: 10
    },
    rowContainer: {
        fontSize: 24,
        padding: 10
    },
    footerContainer: {
        alignItems: 'center',
        backgroundColor: '#E3E3E3',
        flexDirection: 'row'
    }
  });
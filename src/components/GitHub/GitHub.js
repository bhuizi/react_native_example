import React, { useReducer } from 'react';
import { 
View,
Text,
StyleSheet,
TextInput,
TouchableHighlight,
ActivityIndicator
} from 'react-native';

function GitHub() {
  const [store, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'USER_NAME':
        return {
          ...state,
          userName: action.payload
        };
      case 'IS_LOADING':
        return {
          ...state,
          isLoading: action.payload
        };
      case 'ERROR':
        return {
          ...state,
          error: action.payload
        };
      default:
        throw new Error();
    }
  }, {
    userName: '',
    isLoading: false,
    error: false
  });

  function handleOnChange(e) {
    dispatch({type: 'USER_NAME', payload: e.nativeEvent.text})
  }

  function handleSubmit() {
      dispatch({type: 'IS_LOADING'});
      console.log('submitted', store.userName)
  }
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Search for GitHub User</Text>
        <TextInput
          style={styles.searchInput}
          value={store.userName}
          onChange={handleOnChange}
        />
        <TouchableHighlight
            style={styles.button}
            onPress={handleSubmit}
            underlayColor={"#fff"}>
            <Text style={styles.buttonText}>SEARCH</Text>
        </TouchableHighlight>
      </View>
    );
  }
  
  export default GitHub;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1e90ff',
      flex: 1,
      justifyContent: 'center',
      padding: 30,
      marginTop: 65,
    },
    title: {
      color: '#fff',
      fontSize: 20,
      marginBottom: 20,
      textAlign: 'center'
    },
    searchInput: {
      borderColor: '#fff',
      borderRadius: 8,
      borderWidth: 1,
      color: '#fff',
      fontSize: 23,
      height: 50,
      marginRight: 5,
      padding: 4,
    },
    buttonText: {
      fontSize: 18,
      color: '#111',
      alignSelf: 'center'
    },
    button: {
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderColor: '#fff',
      borderRadius: 8,
      borderWidth: 1,
      flexDirection: 'row',
      height: 45,
      justifyContent: 'center',
      marginBottom: 10,
      marginTop: 10,
    }
  });
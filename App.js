import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Dashboard from './src/components/Dashboard';
import GitHub from './src/components/GitHub';
import Profile from './src/components/Profile';
import Repos from './src/components/Repos';
import Notes from './src/components/Notes';
import { ROUTES } from './src/enum';

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={`${ROUTES.GITHUB}`} component={GitHub} />
        <Stack.Screen name={`${ROUTES.DASHBOARD}`} component={Dashboard} />
        <Stack.Screen name={`${ROUTES.PROFILE}`} component={Profile} />
        <Stack.Screen name={`${ROUTES.REPOS}`} component={Repos} />
        <Stack.Screen name={`${ROUTES.NOTES}`} component={Notes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
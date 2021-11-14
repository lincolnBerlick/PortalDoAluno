import 'react-native-gesture-handler';

import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashBoard from './src/pages/dashboard';

const Stack = createNativeStackNavigator();
const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar />

    <Stack.Navigator>
      <Stack.Screen
        options={{headerBackVisible: false}}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Cadastro"
        component={Cadastro}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="DashBoard"
        component={DashBoard}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

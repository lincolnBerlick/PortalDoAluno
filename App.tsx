import 'react-native-gesture-handler';

import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashBoard from './src/pages/dashboard';
import Aula from './src/pages/aula';
import Agendar from './src/pages/agendar';
import CadastroAluno from './src/pages/CadastroAluno';
import Aluno from './src/pages/Aluno';
import ListaAulas from './src/pages/ListaAulas';

const Stack = createNativeStackNavigator();
const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar />

    <Stack.Navigator>
      <Stack.Screen
        options={{headerBackVisible: false, headerShown: false}}
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

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Aula"
        component={Aula}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Agendar"
        component={Agendar}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="CadastroAluno"
        component={CadastroAluno}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Aluno"
        component={Aluno}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ListaAulas"
        component={ListaAulas}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

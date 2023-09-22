import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import firebaseConfig from './firebaseConfig';
import Login from './src/Login';
import SignUp from './src/Signup';
import Dashboard from './src/Dashboard';
import Header from './components/Header';
import 'firebase/auth';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}
        options={{
          headerTitle: () => <Header name="Eco Saathi" />
        }}
      />
      <Stack.Screen name="Signup" component={SignUp}
        options={{
          headerTitle: () => <Header name="Eco Saathi" />
        }}
      />
      <Stack.Screen name="Dashboard" component={Dashboard}
        options={{
          headerTitle: () => <Header name="Dashboard" />
        }}
      />
    </Stack.Navigator>
  );
}

function MainApp() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}

export default MainApp;
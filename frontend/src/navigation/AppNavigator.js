import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/Login';
import Dashboard from '../screens/Dashboard';
import Calculation from '../screens/Calculation';

const Stack = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Calculation" component={Calculation} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default AppNavigator;

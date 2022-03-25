import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';

const Stack = createStackNavigator();

const Login: React.FC = () => {
  return (
    <View>
      <Text>Login screen</Text>
    </View>
  );
};

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

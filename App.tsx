import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DataManagementScreen from './src/screens/DataManagementScreen';
import SupportScreen from './src/screens/SupportScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DataManagement" component={DataManagementScreen} />
        <Stack.Screen name="Support" component={SupportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
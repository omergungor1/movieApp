import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import AppNavigationContainer from './src/routers/AppNavigationContainer'

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigationContainer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

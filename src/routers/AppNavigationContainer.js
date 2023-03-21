import react from 'react'
import NavigationContainer from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Index from '../screens/index'
import View from '../screens/view'
import View2 from '../screens/view2'

const Stack = createStackNavigator();
const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName='index'>
            <Stack.Screen
                options={{ headerShown: false }}
                name='index'
                component={Index} />
            <Stack.Screen
                options={{ headerShown: false }}
                name='MyView'
                component={View} />
            <Stack.Screen
                options={{ headerShown: false }}
                name='MyView2'
                component={View2} />
        </Stack.Navigator>
    );
};

const Tab = createBottomTabNavigator();
const AppTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (<Icon name='home' color={color} size={size} />)
                }}
                name='Home'
                component={HomeStack}>
            </Tab.Screen>
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (<Icon name='heart' color={color} size={size} />)
                }}
                name='Saved'
                component={HomeStack}>
            </Tab.Screen>
        </Tab.Navigator>
    );
};

const AppNavigationContainer = () => {
    return <AppTabs />;
};

export default AppNavigationContainer;
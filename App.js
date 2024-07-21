import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StatusBar } from 'expo-status-bar';
import TransactionsListScreen from './screens/TransactionListScreens';
import TransactionDetailScreen from './screens/TransactionDetailScreen';
import SummaryScreen from './screens/SummaryScreen';

const CustomBackButton = () => (
  <Icon name="arrow-back" size={24} color="white" />
);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TransactionsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TransactionsList"
        component={TransactionsListScreen}
        options={{
          headerTitle: 'Transactions List',
          headerTitleStyle: {
            color: 'white',
            fontSize: 26,
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: '#4a90e2',
          },
        }}
      />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetailScreen}
        options={{
          headerTitle: 'Transaction Detail',
          headerTitleStyle: {
            color: 'white',
            fontSize: 26,
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: '#4a90e2',
          },
          headerBackImage: () => <CustomBackButton />,
        }}
      />
    </Stack.Navigator>
  );
}

function SummaryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SummaryScreen"
        component={SummaryScreen}
        options={{
          headerTitle: 'Summary',
          headerTitleStyle: {
            color: 'white',
            fontSize: 26,
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: '#4a90e2',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#4a90e2" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Transactions') {
              iconName = 'description';
            } else if (route.name === 'Summary') {
              iconName = 'info';
            }

            return <Icon name={iconName} size={size} color={color}/>;
          },
          tabBarLabel: route.name,
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
            margin: 0,
          },
          tabBarActiveTintColor: '#4a90e2',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#fff',
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Transactions" component={TransactionsStack}/>
        <Tab.Screen name="Summary" component={SummaryStack}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

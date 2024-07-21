import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const transactions = [
  { id: '1', name: 'Shoppers Drug Mart', amount: 18.99, date: 'Mar 02, 2024', address: 'Victoria St., ON' },
  { id: '2', name: 'Mc Donalds', amount: 50.45, date: 'Mar 06, 2024', address: 'Hurron St., ON' },
  { id: '3', name: 'Starbucks', amount: 20.00, date: 'Mar 07, 2024', address: 'North York, ON' },
  { id: '4', name: 'Cineplex', amount: 48.78, date: 'Mar 11, 2024', address: 'Masonville, ON' },
  { id: '5', name: 'Tim Hortons', amount: 30.05, date: 'Mar 17, 2024', address: 'Highbury Avenue, ON' },
  { id: '6', name: 'Food Basics', amount: 300.00, date: 'Mar 19, 2024', address: 'Victoria Road, ON' },
  { id: '7', name: 'Pizza Hut', amount: 25.99, date: 'Mar 22, 2024', address: 'Queens Avenue, ON' },
  { id: '8', name: 'Nike', amount: 250.00, date: 'Mar 29, 2024', address: 'Kipps Lane, ON' },
];

export default function TransactionsListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
          >
            <View style={styles.itemContent}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemAmount}>${item.amount.toFixed(2)}</Text>
            </View>
            <Icon name="chevron-right" size={34} color="#4a90e2"/>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  itemContainer: {
    marginLeft: 5,
    marginRight: 5,
    padding: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  itemText: {
    fontSize: 24,
    color: '#333',
    flex: 1,
  },
  itemAmount: {
    fontSize: 22,
    color: '#4a90e2',
    marginLeft: 10,
  },
});

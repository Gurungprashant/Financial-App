import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionDetailScreen({ route }) {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.amount}>${transaction.amount.toFixed(2)}</Text>
        <Text style={styles.name}>{transaction.name}</Text>
        <Text style={styles.address}>{transaction.address}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateLabel}>Transaction Date</Text>
        <Text style={styles.date}>{transaction.date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  infoContainer: {
    backgroundColor: '#4A90E2',
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  amount: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  name: {
    fontSize: 26,
    color: '#fff',
    paddingBottom: 2,
  },
  address: {
    fontSize: 20,
    color: '#fff',
    paddingBottom: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  dateLabel: {
    fontSize: 22,
    fontWeight: '400',
  },
  date: {
    fontSize: 22,
    color: 'gray',
  },
});
